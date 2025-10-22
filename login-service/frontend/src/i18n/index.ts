import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { translation: {} },
  ja: { translation: {} },
}

// Load external json at runtime using fetch from public folder
const lng = localStorage.getItem('credexa_lang') || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

// lazy load
fetch('/locales/en/translation.json').then(r=>r.json()).then((t)=>{
  i18n.addResources('en', 'translation', t)
})
fetch('/locales/ja/translation.json').then(r=>r.json()).then((t)=>{
  i18n.addResources('ja', 'translation', t)
})

export default i18n
