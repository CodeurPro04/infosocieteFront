import { useContent } from '../context/ContentContext.jsx'

export default function ConditionsFormula() {
  const { content } = useContent()
  const page = content.pages?.['conditions-de-la-formule']

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">Details et conditions de la formule premium.</p>
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
