const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data.message || 'Une erreur est survenue.'
    throw new Error(message)
  }

  return data
}

export function fetchContent() {
  return request('/api/content')
}

export function searchCompanies(query) {
  return request('/api/search', {
    method: 'POST',
    body: JSON.stringify({ query }),
  })
}

export function submitContact(payload) {
  return request('/api/forms/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function submitCancel(payload) {
  return request('/api/forms/cancel', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function submitClaim(payload) {
  return request('/api/forms/claim', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function loginAdmin(payload) {
  return request('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function updateContent(payload, token) {
  return request('/api/admin/content', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
}

export function fetchSubmissions(token) {
  return request('/api/admin/submissions', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
