import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { LoginForm } from '@/components/AuthForm'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="auth-container">
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
        <CurrencySelector />
        <LanguageToggle />
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="auth-card">
          <CardHeader>
            <h2 className="auth-title">{t('welcome_back')}</h2>
            <p className="text-sm text-gray-500">{t('subtext')}</p>
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

