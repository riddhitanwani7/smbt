import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { api } from '@/utils/api'
import { getCurrency, getLang } from '@/utils/auth'

export function LoginForm({ onSuccess }: { onSuccess: ()=>void }) {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const validate = () => {
    if (!username) return t('required')
    if (!password) return t('required')
    if (!/^.{8,}.*[!@#$%^&*(),.?":{}|<>]/.test(password)) return t('password_policy')
    return ''
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(); if (v) { setError(v); return }
    setError(''); setLoading(true)
    try {
      await api.login({ usernameOrEmailOrMobile: username, password })
      onSuccess()
    } catch (e: any) {
      setError(t('invalid_credentials'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <Label>{t('email_or_phone')}</Label>
        <Input className="auth-input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="john@doe.com" />
      </div>
      <div>
        <Label>{t('password')}</Label>
        <Input className="auth-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <Button type="submit" disabled={loading} className="auth-btn">{t('signin')}</Button>
    </form>
  )
}

export function SignupForm({ onSuccess }: { onSuccess: ()=>void }) {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const validate = () => {
    if (!email) return t('required')
    if (!password) return t('required')
    if (password !== confirm) return 'Passwords do not match'
    if (!/^.{8,}.*[!@#$%^&*(),.?":{}|<>]/.test(password)) return t('password_policy')
    if (!agree) return 'Please agree to terms'
    return ''
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(); if (v) { setError(v); return }
    setError(''); setLoading(true)
    try {
      await api.register({
        username: name?.trim() || email?.split('@')[0],
        password,
        email,
        mobileNumber: phone,
        preferredLanguage: getLang(),
        preferredCurrency: getCurrency(),
      })
      onSuccess()
    } catch (e: any) {
      setError(e.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <Label>{t('full_name')}</Label>
        <Input className="auth-input" value={name} onChange={e=>setName(e.target.value)} placeholder="John Doe" />
      </div>
      <div>
        <Label>{t('email')}</Label>
        <Input className="auth-input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@doe.com" />
      </div>
      <div>
        <Label>{t('phone')}</Label>
        <Input className="auth-input" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+91 90000 00000" />
      </div>
      <div>
        <Label>{t('password')}</Label>
        <Input className="auth-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
      </div>
      <div>
        <Label>{t('confirm_password')}</Label>
        <Input className="auth-input" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="••••••••" />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} />
        <span>{t('agree')}</span>
      </label>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <Button type="submit" disabled={loading} className="auth-btn">{t('submit')}</Button>
    </form>
  )
}
