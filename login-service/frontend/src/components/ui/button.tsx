import React from 'react'
import { cva } from './cva'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const styles = cva('inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed', {
  variants: {
    variant: {
      primary: 'bg-primary text-[var(--text-dark)] hover:brightness-110 active:brightness-95',
      ghost: 'bg-white/5 text-[var(--text-dark)] hover:bg-white/10'
    },
    size: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-5',
      lg: 'h-12 px-6 text-lg'
    }
  },
  defaultVariants: { variant: 'primary', size: 'md' }
})

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, size, ...props }, ref) => (
    <button ref={ref} className={styles({ variant, size }) + ' ' + className} {...props} />
  )
)
Button.displayName = 'Button'
