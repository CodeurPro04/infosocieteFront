import { NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'

export default function Layout({ children }) {
  const { content } = useContent()

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark">IS</div>
            <div>
              <div className="brand-name">{content.site?.name}</div>
              <div className="brand-tagline">{content.site?.tagline}</div>
            </div>
          </div>
          <nav className="nav">
            {content.navigation?.map((item) => (
              <NavLink key={item.path} to={item.path} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-cta">
            <NavLink className="button ghost" to="/resiliation">
              Resiliation
            </NavLink>
            <NavLink className="button primary" to="/offre">
              {content.home?.cta}
            </NavLink>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-title">{content.site?.name}</div>
            <p className="muted">{content.site?.tagline}</p>
            {content.footer?.description && <p className="muted">{content.footer.description}</p>}
            <div className="footer-contact">
              <span>{content.site?.phone}</span>
              <span>{content.site?.email}</span>
              <span>{content.site?.hours}</span>
            </div>
          </div>
          <div>
            <div className="footer-title">Liens utiles</div>
            <div className="footer-links">
              {content.footer?.links?.map((link) => (
                <NavLink key={link.path} to={link.path}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">© {content.site?.year || new Date().getFullYear()} Infosociete Pro. Tous droits reserves.</div>
      </footer>
    </div>
  )
}
