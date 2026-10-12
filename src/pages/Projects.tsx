import { useMemo, useState } from 'react'
import { Plus, Search } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Progress } from '../components/ui/Progress'
import { projects as seed } from '../data/mock'
import type { Project, ProjectStatus } from '../types'

export function Projects() {
  const [q, setQ] = useState('')
  const [items, setItems] = useState(seed)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', team: 'Alpha Team', status: 'Not Started' as ProjectStatus })

  const list = useMemo(
    () => items.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())),
    [items, q],
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
          <Search size={15} className="text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects" className="w-full outline-none" />
        </label>
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white">
          <Plus size={16} /> New project
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((p) => (
          <article key={p.id} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{p.description}</p>
              </div>
              <Badge>{p.status}</Badge>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs">
                <span>Progress</span>
                <span>{p.progress}%</span>
              </div>
              <Progress value={p.progress} color={p.status === 'At Risk' ? 'bg-rose-500' : 'bg-violet-500'} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
              <p>Team · {p.team}</p>
              <p>Manager · {p.manager}</p>
              <p>
                Budget · ${(p.budgetUsed / 1000).toFixed(0)}k / ${(p.budget / 1000).toFixed(0)}k
              </p>
              <p>
                {p.start} → {p.end}
              </p>
            </div>
            <div className="mt-3 flex -space-x-2">
              {p.members.map((m) => (
                <img key={m} src={`https://i.pravatar.cc/40?u=${m}`} className="h-7 w-7 rounded-full border-2 border-white" title={m} />
              ))}
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink-950/40 p-4" onClick={() => setOpen(false)}>
          <form
            className="card w-full max-w-md p-5"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault()
              const next: Project = {
                id: `p-${Date.now()}`,
                title: form.title,
                description: form.description,
                status: form.status,
                progress: 0,
                manager: 'You',
                team: form.team,
                start: new Date().toISOString().slice(0, 10),
                end: '',
                budgetUsed: 0,
                budget: 100000,
                members: [],
              }
              setItems((s) => [next, ...s])
              setOpen(false)
            }}
          >
            <h3 className="font-display text-lg font-semibold">Create project</h3>
            <input required placeholder="Title" className="mt-4 w-full rounded-xl border px-3 py-2 text-sm" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <textarea placeholder="Description" className="mt-3 w-full rounded-xl border px-3 py-2 text-sm" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <select className="mt-3 w-full rounded-xl border px-3 py-2 text-sm" value={form.team} onChange={(e) => setForm({ ...form, team: e.target.value })}>
              {['Alpha Team', 'Beta Team', 'Gamma Team', 'Delta Team'].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setOpen(false)} className="rounded-xl px-4 py-2 text-sm">Cancel</button>
              <button className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white">Create</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
