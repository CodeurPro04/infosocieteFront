import { useContent } from '../context/ContentContext.jsx'

export default function Hpy() {
  const { content } = useContent()
  const page = content.pages?.['hpy-infoscte']

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">Informations sur le libelle HPY*INFOSCTE.</p>
      </div>
      <div className="page-grid">
        {page?.sections?.map((section) => (
          <div key={section.title} className="page-card">
            <h2>{section.title}</h2>
            <p className="muted">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
