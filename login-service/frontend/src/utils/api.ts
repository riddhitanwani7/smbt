import { getToken, setToken, clearToken } from './auth'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

// Use Vite dev proxy to avoid CORS in development
export const BASE_URL = ''

async function request<T>(path: string, method: Method, body?: any): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  const token = getToken()
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    mode: 'cors',
    credentials: 'omit',
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (res.status === 401) {
    clearToken()
  }

  if (!res.ok) {
    const msg = await safeText(res)
    throw new Error(msg || 'Request failed')
  }
  return res.json() as Promise<T>
}

async function safeText(res: Response) {
  try { return await res.text() } catch { return '' }
}

// DTO wrappers matching backend controller
type ApiResponse<T> = { success?: boolean; message?: string; data?: T }
type LoginResponse = { token: string }
type BankConfigResponse = any
type TokenValidationResponse = { valid: boolean }
type User = any

export const api = {
  // POST /login
  login: async (data: { usernameOrEmailOrMobile: string; password: string }) => {
    const r = await request<ApiResponse<LoginResponse>>('/login', 'POST', data)
    if (r?.data?.token) setToken(r.data.token)
    return r
  },

  // POST /register
  register: (data: any) => request<ApiResponse<User>>('/register', 'POST', data),

  // POST /logout
  logout: async () => {
    const r = await request<ApiResponse<void>>('/logout', 'POST')
    clearToken()
    return r
  },

  // POST /validate-token (plain text body)
  validateToken: async (token: string) => {
    const res = await fetch(`${BASE_URL}/validate-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      mode: 'cors',
      credentials: 'omit',
      body: token,
    })
    if (!res.ok) throw new Error(await safeText(res))
    return res.json() as Promise<ApiResponse<TokenValidationResponse>>
  },

  // GET /bank-config
  bankConfig: () => request<ApiResponse<BankConfigResponse>>('/bank-config', 'GET'),

  // GET /user/{username}
  userByUsername: (username: string) => request<ApiResponse<User>>(`/user/${encodeURIComponent(username)}`, 'GET'),

  // GET /health
  health: () => request<ApiResponse<string>>('/health', 'GET'),
}
