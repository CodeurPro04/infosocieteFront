import { createContext, useContext, useEffect, useState } from 'react'
import defaultContent from '../content/defaultContent.js'
import { fetchContent } from '../api.js'

const ContentContext = createContext({
  content: defaultContent,
  loading: true,
  refresh: () => {},
})

const BRAND_SOURCE_REGEX = /Infosociete Pro/gi
const BRAND_TARGET = 'Infogref.goentrypro'

function normalizeBrandLabel(value) {
  if (typeof value === 'string') {
    return value.replace(BRAND_SOURCE_REGEX, BRAND_TARGET)
  }

  if (Array.isArray(value)) {
    return value.map(normalizeBrandLabel)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, normalizeBrandLabel(entry)]))
  }

  return value
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => normalizeBrandLabel(defaultContent))
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const data = await fetchContent()
      if (data && Object.keys(data).length > 0) {
        setContent(normalizeBrandLabel(data))
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
