import { useContent } from '../context/ContentContext.jsx'

export default function Legal({ slug }) {
  const { content } = useContent()
  const page = content.pages?.[slug]

  if (!page) {
    return (
      <section className="container page">
        <h1>Page introuvable</h1>
      </section>
    )
  }

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page.title}</h1>
        {page.version && <p className="muted">{page.version}</p>}
        {page.effective && <p className="muted">{page.effective}</p>}
        {!page.version && !page.effective && <p className="muted">Informations legales et administratives.</p>}
      </div>
      <div className="page-grid">
        {page.sections?.map((section) => (
          <div key={section.title} className="page-card">
            <h2>{section.title}</h2>
            <p className="muted">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
