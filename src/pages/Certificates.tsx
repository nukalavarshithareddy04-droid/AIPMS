import { certificates } from '../data/mock'
import { Award, QrCode } from 'lucide-react'

export function Certificates() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {certificates.map((c) => (
        <article key={c.id} className="relative overflow-hidden rounded-3xl bg-ink-900 p-6 text-white">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/30 blur-2xl" />
          <Award className="text-violet-300" />
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-200">Krishnova LLP</p>
          <h3 className="mt-2 font-display text-xl font-semibold">{c.title}</h3>
          <p className="mt-2 text-sm text-white/60">Awarded to {c.intern}</p>
          <div className="mt-6 flex items-end justify-between text-xs text-white/50">
            <div>
              <p>Issued {c.issueDate}</p>
              <p className="font-mono text-violet-200">{c.code}</p>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-white/10">
              <QrCode />
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
