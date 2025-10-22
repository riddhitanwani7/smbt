import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import LanguageToggle from '@/components/LanguageToggle'
import CurrencySelector from '@/components/CurrencySelector'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  const { t } = useTranslation()
  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold">Credexa</div>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <LanguageToggle />
        </div>
      </header>

      <main className="landing-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('tagline')}</h1>
          <p className="text-lg md:text-xl mb-8">{t('subtext')}</p>
          <Link to="/login"><Button size="lg" className="landing-btn">{t('explore')}</Button></Link>
        </motion.div>
      </main>

      <footer className="px-6 py-6 flex items-center justify-between text-sm">
        <span>© {new Date().getFullYear()} Credexa</span>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <LanguageToggle />
        </div>
      </footer>
    </div>
  )
}

