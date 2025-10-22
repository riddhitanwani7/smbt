import { useEffect, useState } from 'react'
import { Select } from './ui/select'
import { getCurrency, setCurrency, currencySymbol } from '@/utils/auth'

const options = [
  { label: 'INR (₹)', value: 'INR' },
  { label: 'KWD (د.ك)', value: 'KWD' },
  { label: 'JPY (¥)', value: 'JPY' },
]

export default function CurrencySelector({ className = '' }: { className?: string }) {
  const [value, setValue] = useState(getCurrency())
  useEffect(()=>{ setCurrency(value) }, [value])
  return (
    <div className={'flex items-center gap-2 ' + className}>
      <Select value={value} onChange={setValue} options={options} />
      <span className="text-sm opacity-70">{currencySymbol(value)}</span>
    </div>
  )
}
