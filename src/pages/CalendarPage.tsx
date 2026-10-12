const days = Array.from({ length: 31 }, (_, i) => i + 1)
const events: Record<number, string> = {
  12: 'Integrate API',
  15: 'Phase 2 review',
  17: 'Mobile testing',
  20: 'Analytics report',
  22: 'Interview — Diya',
}

export function CalendarPage() {
  return (
    <div className="card p-5">
      <h3 className="font-display font-semibold">May 2026</h3>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <p key={d} className="font-semibold text-slate-400">{d}</p>
        ))}
        {days.map((d) => (
          <div key={d} className={`min-h-20 rounded-xl border p-2 text-left ${events[d] ? 'border-violet-200 bg-violet-50' : 'border-slate-100'}`}>
            <p className="font-semibold">{d}</p>
            {events[d] && <p className="mt-1 text-[10px] text-violet-700">{events[d]}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
