import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import kbisCard from '../assets/illustrations/document-kbis.webp'
import kbisList from '../assets/illustrations/document.png'

export default function Connexion() {
  const { content } = useContent()
  const page = content.pages?.connexion
  const kbis = page?.kbis

  return (
    <section className="connexion-page section">
      <div className="container connexion">
        <form className="form-card connexion-form">
          <h1>{page?.title}</h1>
          <label>
            Email
            <input type="email" required />
          </label>
          <label>
            Mot de passe
            <input type="password" required />
          </label>
          <Link className="connexion-forgot" to="/connexion">
            {page?.forgot}
          </Link>
          <button className="button primary connexion-submit" type="submit">
            Se Connecter
          </button>
        </form>
       
      </div>
    </section>
  )
}
