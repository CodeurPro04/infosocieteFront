import { useContent } from '../context/ContentContext.jsx'

export default function Legal({ slug }) {
  const { content } = useContent()
  const page = content.pages?.[slug]

  if (!page) {
    return (
      <section className="container page">
        <h1>Page introuvable</h1>
      </section>
    )
  }

  if (slug === 'politique-de-confidentialite') {
    return (
      <section className="privacy-page">
        <div className="container">
          <div className="privacy-header">
            <h1>{page.title}</h1>
            {page.intro && <p className="cgv-intro">{page.intro}</p>}
            {page.effective && <p className="privacy-effective">{page.effective}</p>}
          </div>
          {page.sections?.map((section) => (
            <div key={section.title} className="privacy-section">
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list?.length ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.afterList?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (slug === 'conditions-generales-de-vente') {
    return (
      <section className="cgv-page">
        <div className="container">
          <div className="page-header cgv-header">
            <h1>{page.title}</h1>
            {page.version && <p className="muted">{page.version}</p>}
          </div>
          {page.intro && <p className="cgv-intro">{page.intro}</p>}
          <div className="cgv-body">
            {page.blocks?.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={`${block.type}-${index}`} className="cgv-heading">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'subheading') {
                return (
                  <h3 key={`${block.type}-${index}`} className="cgv-subheading">
                    {block.text}
                  </h3>
                )
              }
              if (block.type === 'definition') {
                return (
                  <p key={`${block.type}-${index}`} className="cgv-definition">
                    <strong>{block.term}</strong> {block.text}
                  </p>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={`${block.type}-${index}`} className="cgv-list">
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'emphasis') {
                return (
                  <p key={`${block.type}-${index}`} className="cgv-emphasis">
                    {block.text}
                  </p>
                )
              }
              return (
                <p key={`${block.type}-${index}`} className="cgv-paragraph">
                  {block.text}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  if (slug === 'mentions-legales') {
    return (
      <section className="mentions-page">
        <div className="container">
          <div className="page-header mentions-header">
            <h1>{page.title}</h1>
          </div>
          <div className="mentions-body">
            {page.lines?.map((line, index) =>
              line === '' ? (
                <div key={`mentions-space-${index}`} className="mentions-spacer" />
              ) : (
                <p key={`mentions-line-${index}`}>{line}</p>
              )
            )}
          </div>
        </div>
      </section>
    )
  }

  if (slug === 'cookies') {
    return (
      <section className="cookies-page">
        <div className="container">
          <div className="privacy-header">
            <h1>{page.title}</h1>
            {page.intro && <p className="cgv-intro">{page.intro}</p>}
            {page.version && <p className="privacy-effective">{page.version}</p>}
          </div>
          <div className="cookies-body">
            {page.blocks?.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={`${block.type}-${index}`} className="cookies-heading">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'table') {
                return (
                  <div key={`${block.type}-${index}`} className="cookies-table">
                    <div className="cookies-table-head">
                      <span>{block.headers?.[0]}</span>
                      <span>{block.headers?.[1]}</span>
                    </div>
                    {block.rows?.map((row) => (
                      <div key={row.label} className="cookies-table-row">
                        <strong>{row.label}</strong>
                        <span>{row.value}</span>
                      </div>
                    ))}
                  </div>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={`${block.type}-${index}`} className="cgv-list">
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={`${block.type}-${index}`} className="cookies-paragraph">
                  {block.text}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page.title}</h1>
        {page.version && <p className="muted">{page.version}</p>}
        {page.effective && <p className="muted">{page.effective}</p>}
        {!page.version && !page.effective && <p className="muted">Informations legales et administratives.</p>}
      </div>
      <div className="page-grid">
        {page.sections?.map((section) => (
          <div key={section.title} className="page-card">
            <h2>{section.title}</h2>
            <p className="muted">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
