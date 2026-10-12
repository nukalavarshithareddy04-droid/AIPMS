export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-cyan-400 shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1" />
        </svg>
      </span>
      {!compact && (
        <div className="leading-tight">
          <p className={`font-display text-[13px] font-bold tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}>
            AIPMS
          </p>
          <p className={`text-[10px] font-medium ${light ? 'text-white/55' : 'text-slate-500'}`}>
            Krishnova LLP
          </p>
        </div>
      )}
    </div>
  )
}
