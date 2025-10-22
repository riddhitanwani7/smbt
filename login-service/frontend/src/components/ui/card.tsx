import React from 'react'

export function Card({ children, className = '' }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={'card ' + className}>{children}</div>
}
export function CardHeader({ children, className = '' }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={'p-6 pb-2 ' + className}>{children}</div>
}
export function CardContent({ children, className = '' }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={'p-6 pt-2 ' + className}>{children}</div>
}
