import { candidates } from '../data/mock'
import { Badge } from '../components/ui/Badge'
import { Progress } from '../components/ui/Progress'
import { Link } from 'react-router-dom'

export function Recruitment() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link to="/app/resume" className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white">
          Analyze a resume
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {candidates.map((c) => (
          <article key={c.id} className="card p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display font-semibold">{c.name}</h3>
                <p className="text-xs text-slate-500">{c.role}</p>
              </div>
              <Badge>{c.status}</Badge>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-xs">
                <span>AI match score</span>
                <span>{c.score}</span>
              </div>
              <Progress value={c.score} />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.skills.map((s) => (
                <span key={s} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
