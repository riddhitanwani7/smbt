const TOKEN_KEY = 'credexa_token'
const LANG_KEY = 'credexa_lang'
const CURR_KEY = 'credexa_currency'

export function setToken(token: string) { localStorage.setItem(TOKEN_KEY, token) }
export function getToken() { return localStorage.getItem(TOKEN_KEY) }
export function clearToken() { localStorage.removeItem(TOKEN_KEY) }

export function setLang(l: string) { localStorage.setItem(LANG_KEY, l) }
export function getLang() { return localStorage.getItem(LANG_KEY) || 'en' }

export function setCurrency(c: string) { localStorage.setItem(CURR_KEY, c) }
export function getCurrency() { return localStorage.getItem(CURR_KEY) || 'INR' }

export function currencySymbol(code: string) {
  switch (code) {
    case 'INR': return '₹'
    case 'KWD': return 'د.ك'
    case 'JPY': return '¥'
    default: return code
  }
}
