import AES from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'

const KEY = 'credexa_demo_key_2025' // replace via env for production

export function encryptObject<T extends object>(obj: T): string {
  const plaintext = JSON.stringify(obj)
  return AES.encrypt(plaintext, KEY).toString()
}

export function decryptObject<T = any>(cipher: string): T | null {
  try {
    const bytes = AES.decrypt(cipher, KEY)
    const text = bytes.toString(Utf8)
    return JSON.parse(text)
  } catch {
    return null
  }
}
