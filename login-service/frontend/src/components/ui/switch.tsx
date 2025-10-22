import React from 'react'

export function Switch({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (v: boolean)=>void }) {
  return (
    <button
      onClick={()=>onCheckedChange(!checked)}
      className={'w-12 h-6 rounded-full transition-all ' + (checked ? 'bg-primary' : 'bg-white/20')}
      aria-checked={checked}
      role="switch"
    >
      <span className={'block h-5 w-5 bg-white rounded-full transition-transform translate-y-0.5 ' + (checked ? 'translate-x-6' : 'translate-x-0.5')}></span>
    </button>
  )
}
