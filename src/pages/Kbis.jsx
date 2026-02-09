import { useContent } from '../context/ContentContext.jsx'

export default function Kbis() {
  const { content } = useContent()
  const page = content.pages?.['information-kbis']

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.intro}</p>
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
