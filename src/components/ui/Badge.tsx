import { cn } from '../../lib/utils'

const map: Record<string, string> = {
  'In Progress': 'bg-violet-50 text-violet-600',
  Completed: 'bg-emerald-50 text-emerald-600',
  'On Hold': 'bg-amber-50 text-amber-600',
  Planning: 'bg-pink-50 text-pink-600',
  'Not Started': 'bg-slate-100 text-slate-600',
  'At Risk': 'bg-rose-50 text-rose-600',
  Delayed: 'bg-rose-50 text-rose-600',
  'On Track': 'bg-emerald-50 text-emerald-600',
  Todo: 'bg-slate-100 text-slate-600',
  'In Review': 'bg-sky-50 text-sky-600',
  Done: 'bg-emerald-50 text-emerald-600',
  High: 'bg-rose-50 text-rose-600',
  Critical: 'bg-rose-100 text-rose-700',
  Medium: 'bg-amber-50 text-amber-600',
  Low: 'bg-slate-100 text-slate-500',
  Present: 'bg-emerald-50 text-emerald-600',
  Absent: 'bg-rose-50 text-rose-600',
  Late: 'bg-amber-50 text-amber-600',
  Pending: 'bg-amber-50 text-amber-600',
  Approved: 'bg-emerald-50 text-emerald-600',
  Rejected: 'bg-rose-50 text-rose-600',
  Interview: 'bg-violet-50 text-violet-600',
  Shortlisted: 'bg-sky-50 text-sky-600',
  Screening: 'bg-slate-100 text-slate-600',
  Offer: 'bg-emerald-50 text-emerald-600',
  Admin: 'bg-violet-50 text-violet-600',
  Mentor: 'bg-sky-50 text-sky-600',
  Intern: 'bg-emerald-50 text-emerald-600',
  HR: 'bg-pink-50 text-pink-600',
  Executive: 'bg-amber-50 text-amber-700',
  AI: 'bg-cyan-50 text-cyan-700',
}

export function Badge({ children, tone }: { children: string; tone?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold',
        map[tone ?? children] ?? 'bg-slate-100 text-slate-600',
      )}
    >
      {children}
    </span>
  )
}
