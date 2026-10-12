import { teams, people } from '../data/mock'
import { Progress } from '../components/ui/Progress'

export function Teams() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {teams.map((t) => (
        <article key={t.id} className="card p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold">{t.name}</h3>
              <p className="text-xs text-slate-500">{t.project}</p>
            </div>
            <span className="text-sm font-bold text-violet-600">{t.progress}%</span>
          </div>
          <div className="mt-3">
            <Progress value={t.progress} />
          </div>
          <div className="mt-4 space-y-2">
            {t.members.map((m) => {
              const p = people.find((x) => x.name === m)
              return (
                <div key={m} className="flex items-center gap-2 text-xs">
                  <img src={p?.avatar ?? `https://i.pravatar.cc/32?u=${m}`} className="h-7 w-7 rounded-full" />
                  <span>{m}</span>
                </div>
              )
            })}
          </div>
        </article>
      ))}
    </div>
  )
}
