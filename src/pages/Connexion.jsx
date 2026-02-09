import { useContent } from '../context/ContentContext.jsx'

export default function Connexion() {
  const { content } = useContent()
  const page = content.pages?.connexion

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">Accedez a votre espace pour consulter vos documents.</p>
      </div>
      <form className="form-card wide">
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Mot de passe
          <input type="password" required />
        </label>
        <button className="button primary" type="submit">
          Se connecter
        </button>
        <p className="muted">{page?.forgot}</p>
      </form>
    </section>
  )
}
