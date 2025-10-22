import { useEffect, useState } from 'react'
import { currencySymbol, getCurrency } from '@/utils/auth'
import CurrencySelector from '@/components/CurrencySelector'
import LanguageToggle from '@/components/LanguageToggle'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import IdleLogout from '@/components/IdleLogout'
import { api } from '@/utils/api'

export default function DashboardPage() {
  const [curr, setCurr] = useState(getCurrency())
  const navigate = useNavigate()

  useEffect(()=>{
    const i = setInterval(()=> setCurr(getCurrency()), 500)
    return ()=>clearInterval(i)
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-8 w-8" />
          <span className="text-xl font-semibold">Credexa</span>
        </div>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <LanguageToggle />
        </div>
      </header>
      <main className="flex-1 grid place-items-center px-4 text-center">
        <div className="card p-8 max-w-xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
          <p className="text-foreground/80 mb-6">Mock balance preview in selected currency.</p>
          <div className="text-4xl font-bold mb-8">{currencySymbol(curr)} 120,450</div>
          <Button onClick={async ()=>{ try { await api.logout() } finally { navigate('/login') } }}>Logout</Button>
        </div>
      </main>
      <IdleLogout onLogout={()=>navigate('/login')} />
    </div>
  )
}
