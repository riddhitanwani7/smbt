type VariantMap = Record<string, Record<string, string>>

export function cva(base: string, opts?: { variants?: VariantMap; defaultVariants?: Record<string,string> }) {
  return (props?: Record<string, string | undefined>) => {
    const classes = [base]
    const variants = opts?.variants || {}
    const merged = { ...(opts?.defaultVariants || {}), ...(props || {}) }
    for (const key in variants) {
      const val = merged[key]
      if (val && variants[key][val]) classes.push(variants[key][val])
    }
    return classes.join(' ')
  }
}
