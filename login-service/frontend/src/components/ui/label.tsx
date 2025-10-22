import React from 'react'

export function Label({ children, className = '', ...props }: React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={'block text-sm mb-1 text-[var(--text-dark)] ' + className} {...props}>{children}</label>
  )
}
