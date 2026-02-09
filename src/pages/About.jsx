import { useContent } from '../context/ContentContext.jsx'

export default function About() {
  const { content } = useContent()
  const page = content.pages?.['a-propos']

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.subtitle}</p>
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
