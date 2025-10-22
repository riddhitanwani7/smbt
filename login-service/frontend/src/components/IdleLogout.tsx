import { useIdleTimer } from 'react-idle-timer'
import { useEffect, useRef, useState } from 'react'
import { Modal } from './ui/modal'
import { useTranslation } from 'react-i18next'
import { clearToken } from '@/utils/auth'

export default function IdleLogout({ onLogout, timeoutMs = 5 * 60 * 1000 }: { onLogout: ()=>void; timeoutMs?: number }) {
  const { t } = useTranslation()
  const [warningOpen, setWarningOpen] = useState(false)
  const [seconds, setSeconds] = useState(30)
  const warningTimer = useRef<number | null>(null)

  const handleOnIdle = () => {
    setWarningOpen(true)
    setSeconds(30)
    if (warningTimer.current) window.clearInterval(warningTimer.current)
    warningTimer.current = window.setInterval(()=>{
      setSeconds((s)=>{
        if (s <= 1) {
          window.clearInterval(warningTimer.current!)
          clearToken()
          setWarningOpen(false)
          onLogout()
          return 0
        }
        return s - 1
      })
    }, 1000)
  }

  const idle = useIdleTimer({ timeout: timeoutMs - 30000, onIdle: handleOnIdle, debounce: 500 })

  const stay = () => {
    setWarningOpen(false)
    if (warningTimer.current) window.clearInterval(warningTimer.current)
    idle.reset()
  }

  useEffect(()=>()=>{ if (warningTimer.current) window.clearInterval(warningTimer.current) }, [])

  return (
    <Modal
      open={warningOpen}
      title={t('inactivity_warning', { seconds })}
      description=""
      onClose={stay}
      actionLabel={t('stay_logged_in')}
      onAction={stay}
    />
  )
}
