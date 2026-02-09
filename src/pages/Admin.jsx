import { useEffect, useMemo, useState } from 'react'
import { fetchSubmissions, loginAdmin, updateContent } from '../api.js'
import { useContent } from '../context/ContentContext.jsx'

function setByPath(obj, path, value) {
  let cursor = obj
  for (let i = 0; i < path.length - 1; i += 1) {
    if (!cursor[path[i]]) {
      cursor[path[i]] = {}
    }
    cursor = cursor[path[i]]
  }
  cursor[path[path.length - 1]] = value
}

export default function Admin() {
  const { content, refresh } = useContent()
  const [token, setToken] = useState(() => localStorage.getItem('admin_token') || '')
  const [draft, setDraft] = useState(content)
  const [status, setStatus] = useState('')
  const [submissions, setSubmissions] = useState([])
  const [loadingSubmissions, setLoadingSubmissions] = useState(false)

  useEffect(() => {
    setDraft(content)
  }, [content])

  const handleLogin = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())

    setStatus('')
    try {
      const data = await loginAdmin(payload)
      localStorage.setItem('admin_token', data.token)
      setToken(data.token)
      setStatus('Connexion reussie.')
    } catch (error) {
      setStatus(error.message)
    }
  }

  const handleSave = async () => {
    setStatus('')
    try {
      await updateContent(draft, token)
      await refresh()
      setStatus('Contenu mis a jour.')
    } catch (error) {
      setStatus(error.message)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    setToken('')
  }

  const handleFetchSubmissions = async () => {
    setLoadingSubmissions(true)
    try {
      const data = await fetchSubmissions(token)
      setSubmissions(data.submissions || [])
    } catch (error) {
      setStatus(error.message)
    } finally {
      setLoadingSubmissions(false)
    }
  }

  const updatePath = (path, value) => {
    setDraft((prev) => {
      const next = structuredClone(prev)
      setByPath(next, path, value)
      return next
    })
  }

  const home = draft.home || {}
  const faqItems = draft.pages?.faq?.items || []
  const legalPages = useMemo(
    () => [
      { slug: 'mentions-legales', label: 'Mentions legales' },
      { slug: 'conditions-generales-de-vente', label: 'CGV' },
      { slug: 'politique-de-confidentialite', label: 'Confidentialite' },
      { slug: 'cookies', label: 'Cookies' },
    ],
    [],
  )

  if (!token) {
    return (
      <section className="container page admin-page">
        <div className="page-header">
          <h1>Back office</h1>
          <p className="muted">Connectez-vous pour gerer le contenu.</p>
        </div>
        <form className="form-card admin-login" onSubmit={handleLogin}>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Mot de passe
            <input name="password" type="password" required />
          </label>
          <button className="button primary" type="submit">
            Se connecter
          </button>
          {status && <p className="status-text">{status}</p>}
        </form>
      </section>
    )
  }

  return (
    <section className="container page admin-page">
      <div className="page-header">
        <h1>Back office</h1>
        <p className="muted">Modifiez le contenu public et suivez les demandes.</p>
      </div>

      <div className="admin-actions">
        <button className="button primary" onClick={handleSave}>
          Enregistrer
        </button>
        <button className="button ghost" onClick={() => setDraft(content)}>
          Annuler les changements
        </button>
        <button className="button light" onClick={handleLogout}>
          Deconnexion
        </button>
      </div>
      {status && <p className="status-text">{status}</p>}

      <div className="admin-grid">
        <div className="admin-card">
          <h2>Accueil - Hero</h2>
          <label>
            Titre
            <input
              value={home.heroTitle || ''}
              onChange={(event) => updatePath(['home', 'heroTitle'], event.target.value)}
            />
          </label>
          <label>
            Sous-titre
            <textarea
              rows="3"
              value={home.heroSubtitle || ''}
              onChange={(event) => updatePath(['home', 'heroSubtitle'], event.target.value)}
            />
          </label>
          <label>
            Bouton principal
            <input
              value={home.cta || ''}
              onChange={(event) => updatePath(['home', 'cta'], event.target.value)}
            />
          </label>
        </div>

        <div className="admin-card">
          <h2>Formule</h2>
          <label>
            Prix
            <input
              value={home.formulaPrice || ''}
              onChange={(event) => updatePath(['home', 'formulaPrice'], event.target.value)}
            />
          </label>
          {(home.formulaBullets || []).map((item, index) => (
            <div key={`${item}-${index}`} className="admin-inline">
              <input
                value={item}
                onChange={(event) => updatePath(['home', 'formulaBullets', index], event.target.value)}
              />
              <button
                className="button light"
                type="button"
                onClick={() =>
                  setDraft((prev) => {
                    const next = structuredClone(prev)
                    next.home.formulaBullets.splice(index, 1)
                    return next
                  })
                }
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            className="button ghost"
            type="button"
            onClick={() =>
              setDraft((prev) => ({
                ...prev,
                home: {
                  ...prev.home,
                  formulaBullets: [...(home.formulaBullets || []), 'Nouveau point'],
                },
              }))
            }
          >
            Ajouter un point
          </button>
        </div>

        <div className="admin-card">
          <h2>FAQ</h2>
          {faqItems.map((item, index) => (
            <div key={`${item.q}-${index}`} className="admin-faq">
              <input
                value={item.q}
                onChange={(event) => updatePath(['pages', 'faq', 'items', index, 'q'], event.target.value)}
                placeholder="Question"
              />
              <textarea
                rows="3"
                value={item.a}
                onChange={(event) => updatePath(['pages', 'faq', 'items', index, 'a'], event.target.value)}
                placeholder="Reponse"
              />
              <button
                className="button light"
                type="button"
                onClick={() =>
                  setDraft((prev) => {
                    const next = structuredClone(prev)
                    next.pages.faq.items.splice(index, 1)
                    return next
                  })
                }
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            className="button ghost"
            type="button"
            onClick={() =>
              setDraft((prev) => ({
                ...prev,
                pages: {
                  ...prev.pages,
                  faq: {
                    ...prev.pages.faq,
                    items: [...faqItems, { q: 'Nouvelle question', a: 'Reponse' }],
                  },
                },
              }))
            }
          >
            Ajouter une FAQ
          </button>
        </div>

        <div className="admin-card">
          <h2>Contact</h2>
          <label>
            Email
            <input
              value={draft.site?.email || ''}
              onChange={(event) => updatePath(['site', 'email'], event.target.value)}
            />
          </label>
          <label>
            Telephone
            <input
              value={draft.site?.phone || ''}
              onChange={(event) => updatePath(['site', 'phone'], event.target.value)}
            />
          </label>
          <label>
            Horaires
            <input
              value={draft.site?.hours || ''}
              onChange={(event) => updatePath(['site', 'hours'], event.target.value)}
            />
          </label>
        </div>

        <div className="admin-card">
          <h2>Pages legales</h2>
          {legalPages.map((page) => (
            <div key={page.slug} className="admin-legal">
              <div className="admin-legal-title">{page.label}</div>
              {(draft.pages?.[page.slug]?.sections || []).map((section, index) => (
                <div key={`${section.title}-${index}`} className="admin-legal-section">
                  <input
                    value={section.title}
                    onChange={(event) =>
                      updatePath(['pages', page.slug, 'sections', index, 'title'], event.target.value)
                    }
                  />
                  <textarea
                    rows="3"
                    value={section.body}
                    onChange={(event) =>
                      updatePath(['pages', page.slug, 'sections', index, 'body'], event.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <h2>Demandes recentes</h2>
        <button className="button ghost" type="button" onClick={handleFetchSubmissions}>
          {loadingSubmissions ? 'Chargement...' : 'Charger les demandes'}
        </button>
        <div className="submissions">
          {submissions.map((item, index) => (
            <div key={`${item.type}-${index}`} className="submission-card">
              <div className="submission-type">{item.type}</div>
              <div className="submission-date">{item.created_at}</div>
              <pre>{JSON.stringify(item.payload, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <h2>Edition brute</h2>
        <textarea
          rows="12"
          value={JSON.stringify(draft, null, 2)}
          onChange={(event) => {
            try {
              const parsed = JSON.parse(event.target.value)
              setDraft(parsed)
              setStatus('')
            } catch (error) {
              setStatus('JSON invalide')
            }
          }}
        />
        <p className="muted">
          Vous pouvez modifier directement le JSON si besoin pour des changements rapides.
        </p>
      </div>
    </section>
  )
}
