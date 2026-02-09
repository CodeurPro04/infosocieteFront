import { useContent } from '../context/ContentContext.jsx'

export default function Faq() {
  const { content } = useContent()
  const page = content.pages?.faq

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.intro}</p>
      </div>
      <div className="faq-list">
        {page?.items?.map((item) => (
          <div key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            <p className="muted">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
