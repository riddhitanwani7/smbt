import { Card, CardContent, CardHeader } from '@/components/ui/card'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { SignupForm } from '@/components/AuthForm'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SignupPage() {
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
            <h2 className="auth-title">{t('create_account')}</h2>
            <p className="text-sm text-gray-500">{t('subtext')}</p>
          </CardHeader>
          <CardContent>
            <SignupForm onSuccess={() => navigate('/login')} />
            <div className="auth-footer">
              <span>{t('have_account')}</span>
              <span> · </span>
              <Link to="/login" className="hover:underline">{t('back_to_login')}</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

