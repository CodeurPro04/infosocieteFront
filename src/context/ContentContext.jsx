import { createContext, useContext, useEffect, useState } from 'react'
import defaultContent from '../content/defaultContent.js'
import { fetchContent } from '../api.js'

const ContentContext = createContext({
  content: defaultContent,
  loading: true,
  refresh: () => {},
})

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent)
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const data = await fetchContent()
      if (data && Object.keys(data).length > 0) {
        setContent(data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <ContentContext.Provider value={{ content, loading, refresh: load }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  return useContext(ContentContext)
}
