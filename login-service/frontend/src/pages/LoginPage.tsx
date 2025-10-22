import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { LoginForm } from '@/components/AuthForm'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [role, setRole] = useState<'customer' | 'advisor'>('customer')
  return (
    <div className="auth-container">
      <div className="auth-brand">
        <img src="/logo.svg" alt="Credexa" className="h-8 w-8" />
        <span className="font-semibold">Credexa</span>
      </div>
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
        <CurrencySelector />
        <LanguageToggle />
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="auth-card">
          <CardHeader>
            <h2 className="auth-title">{t('welcome_back')}</h2>
            <p className="text-sm text-gray-500">{t('subtext')}</p>
            <div className="mt-3 role-toggle" role="tablist" aria-label="Select role">
              <button type="button" role="tab" aria-selected={role==='customer'}
                className={'role-chip ' + (role==='customer' ? 'active' : '')}
                onClick={()=>setRole('customer')}
              >Customer</button>
              <button type="button" role="tab" aria-selected={role==='advisor'}
                className={'role-chip ' + (role==='advisor' ? 'active' : '')}
                onClick={()=>setRole('advisor')}
              >Advisor</button>
            </div>
          </CardHeader>
          <CardContent>
            <LoginForm onSuccess={() => navigate('/dashboard')} />
            <div className="auth-footer">
              <a className="hover:underline" href="#">{t('forgot')}</a>
              <span> · </span>
              <Link to="/register" className="hover:underline">{t('signup')}</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

