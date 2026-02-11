import { NavLink } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import logo from '../assets/illustrations/logokbis.jpeg'
import cards from '../assets/illustrations/cards.png'

export default function Layout({ children }) {
  const { content } = useContent()

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/">
            <img className="brand-logo" src={logo} alt={content.site?.name || 'Infosociete'} />
          </NavLink>
          <nav className="nav">
            {content.navigation?.map((item) => (
              <NavLink key={item.path} to={item.path} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-cta">
            <a className="phone-link" href={`tel:${content.site?.phone?.replace(/\s/g, '')}`}>
              <span className="phone-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                  <path
                    d="M7.2 3.75c.42 0 .82.2 1.06.55l1.52 2.2c.28.4.3.93.05 1.35l-1.02 1.7a.9.9 0 0 0 .1 1.06 11.9 11.9 0 0 0 4.05 3.53.9.9 0 0 0 1.1-.2l1.43-1.43c.38-.38.95-.5 1.44-.3l2.38.95c.58.23.92.83.83 1.45l-.32 2.22a1.5 1.5 0 0 1-1.48 1.29c-7.45 0-13.5-6.05-13.5-13.5A1.5 1.5 0 0 1 6.6 3.75h.6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{content.site?.phone}</span>
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-top">
          <p className="footer-disclaimer">{content.home?.disclaimer}</p>
        </div>
        <div className="container footer-brand">
          <img className="footer-logo" src={logo} alt={content.site?.name || 'Infosociete'} />
        </div>
        <div className="container">
          <hr className="footer-rule" />
        </div>
        <div className="container footer-grid">
          <div className="footer-description">
            {content.footer?.description && <p>{content.footer.description}</p>}
          </div>
          <div className="footer-links-group">
            {content.footer?.links?.slice(0, 5).map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="footer-links-group">
            {content.footer?.links?.slice(5, 10).map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="footer-links-group">
            {content.footer?.links?.slice(10, 15).map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ))}
            <div className="footer-contact">
              <span>{content.site?.phone}</span>
              <span>{content.site?.email}</span>
            </div>
            <div className="footer-payments">
              <img src={cards} alt="Verified by Visa and MasterCard SecureCode" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {content.site?.year || new Date().getFullYear()} Infosociete - 2022 - 2026 Tous droits réservés
        </div>
        <div className="footer-bottom footer-meta">IE 3985411WH</div>
        <div className="footer-bottom footer-meta">
          Odysseus Media - 13 Baggot Street Upper, Dublin 4, D04 W7K5, Republic of Ireland
        </div>
      </footer>
    </div>
  )
}
