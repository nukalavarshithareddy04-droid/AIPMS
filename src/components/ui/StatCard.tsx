import type { ReactNode } from 'react'

const tones: Record<string, string> = {
  violet: 'bg-violet-50 text-violet-600',
  blue: 'bg-sky-50 text-sky-600',
  green: 'bg-emerald-50 text-emerald-600',
  orange: 'bg-orange-50 text-orange-500',
  pink: 'bg-pink-50 text-pink-500',
  cyan: 'bg-cyan-50 text-cyan-600',
}

export function StatCard({
  label,
  value,
  hint,
  icon,
  tone = 'violet',
  up,
}: {
  label: string
  value: string | number
  hint?: string
  icon: ReactNode
  tone?: keyof typeof tones
  up?: boolean
}) {
  return (
    <div className="card px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900">{value}</p>
          {hint && (
            <p className={`mt-1 text-[11px] font-semibold ${up === false ? 'text-rose-500' : 'text-emerald-500'}`}>
              {hint}
            </p>
          )}
        </div>
        <span className={`grid h-10 w-10 place-items-center rounded-2xl ${tones[tone]}`}>{icon}</span>
      </div>
    </div>
  )
}
