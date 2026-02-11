import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext.jsx'
import kbisCard from '../assets/illustrations/document-kbis.webp'
import kbisList from '../assets/illustrations/document.png'

export default function BankInfo() {
  const { content } = useContent()
  const page = content.pages?.['votre-releve-bancaire']
  const kbis = page?.kbis

  return (
    <section className="bankinfo-page section">
      <div className="container">
        <div className="bankinfo-header">
          <h1>{page?.title}</h1>
        </div>
        <div className="bankinfo-body">
          <p>{page?.intro}</p>
        </div>
        <div className="bankinfo-section">
          <h2>{page?.questionTitle}</h2>
          <p>{page?.questionBody}</p>
        </div>
        <div className="bankinfo-section">
          <h3 className="bankinfo-subtitle">{page?.interpretationsTitle}</h3>
          <div className="bankinfo-interpretations">
            {page?.interpretations?.map((item) => (
              <div className="bankinfo-interpretation" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bankinfo-section">
          <h3 className="bankinfo-subtitle">{page?.conclusionTitle}</h3>
          <p>{page?.conclusionBody}</p>
        </div>
      </div>
    </section>
  )
}
