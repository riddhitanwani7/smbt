import React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <input ref={ref} className={"w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-[var(--text-dark)] placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary" + (className ? ' ' + className : '')} {...props} />
  )
)
Input.displayName = 'Input'
