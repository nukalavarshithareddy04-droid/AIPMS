import { projects } from '../data/mock'
import { Badge } from '../components/ui/Badge'
import { Progress } from '../components/ui/Progress'

export function Risks() {
  return (
    <div className="space-y-4">
      {projects.map((p) => {
        const risk = p.status === 'At Risk' ? 82 : p.progress < 50 ? 55 : p.progress > 90 ? 12 : 28
        return (
          <article key={p.id} className="card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-semibold">{p.title}</h3>
                <p className="text-xs text-slate-500">
                  Predicted slip drivers: {risk > 60 ? 'resource shortage, late tasks, high absenteeism' : 'stable velocity'}
                </p>
              </div>
              <Badge>{risk > 70 ? 'Critical' : risk > 40 ? 'Medium' : 'Low'}</Badge>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-xs">
                <span>Risk score</span>
                <span>{risk}</span>
              </div>
              <Progress value={risk} color={risk > 70 ? 'bg-rose-500' : risk > 40 ? 'bg-amber-400' : 'bg-emerald-500'} />
            </div>
          </article>
        )
      })}
    </div>
  )
}
