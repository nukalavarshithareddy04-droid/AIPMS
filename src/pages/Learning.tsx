import { learning } from '../data/mock'
import { Progress } from '../components/ui/Progress'
import { Badge } from '../components/ui/Badge'

export function Learning() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {learning.map((l) => (
        <article key={l.id} className="card p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold">{l.name}</h3>
              <p className="text-xs text-slate-500">{l.category} · {l.duration}</p>
            </div>
            <Badge>{l.level}</Badge>
          </div>
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs">
              <span>Progress</span>
              <span>{l.progress}%</span>
            </div>
            <Progress value={l.progress} />
          </div>
          <button className="mt-4 w-full rounded-xl bg-violet-50 py-2 text-xs font-semibold text-violet-700">
            Continue module
          </button>
        </article>
      ))}
    </div>
  )
}
