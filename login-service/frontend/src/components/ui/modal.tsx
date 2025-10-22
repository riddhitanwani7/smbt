import React from 'react'
import { Button } from './button'

export function Modal({ open, title, description, onClose, actionLabel, onAction }: { open: boolean; title: string; description: string; onClose: ()=>void; actionLabel?: string; onAction?: ()=>void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative card max-w-md w-[90%]">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-foreground/80 mb-6">{description}</p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={onClose}>Close</Button>
            {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
          </div>
        </div>
      </div>
    </div>
  )
}
