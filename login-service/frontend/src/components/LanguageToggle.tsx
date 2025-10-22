import { useTranslation } from 'react-i18next'
import { Switch } from './ui/switch'
import { setLang, getLang } from '@/utils/auth'

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { i18n } = useTranslation()
  const isJa = i18n.language === 'ja'
  const toggle = () => {
    const next = isJa ? 'en' : 'ja'
    i18n.changeLanguage(next)
    setLang(next)
  }
  return (
    <div className={'flex items-center gap-2 ' + className}>
      <span className={'text-sm ' + (!isJa ? 'opacity-100' : 'opacity-60')}>EN</span>
      <Switch checked={isJa} onCheckedChange={toggle} />
      <span className={'text-sm ' + (isJa ? 'opacity-100' : 'opacity-60')}>日本語</span>
    </div>
  )
}
