import { useContent } from '../context/ContentContext.jsx'

export default function BankInfo() {
  const { content } = useContent()
  const page = content.pages?.['votre-releve-bancaire']

  return (
    <section className="container page">
      <div className="page-header">
        <h1>{page?.title}</h1>
        <p className="muted">{page?.body}</p>
      </div>
    </section>
  )
}
