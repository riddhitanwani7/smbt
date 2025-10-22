import React from 'react'

export function Select({ value, onChange, options, className = '' }: { value: string; onChange: (v: string)=>void; options: {label:string,value:string}[]; className?: string }) {
  return (
    <select
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      className={'h-10 px-3 rounded-lg bg-white/5 border border-white/10 text-[var(--text-dark)] focus:outline-none focus:ring-2 focus:ring-primary ' + className}
    >
      {options.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}
