import { useState } from 'react'
import { Badge } from '../components/ui/Badge'
import { tasks as seed } from '../data/mock'
import type { Task, TaskStatus } from '../types'
import { useAuth } from '../context/AuthContext'

const cols: TaskStatus[] = ['Todo', 'In Progress', 'In Review', 'Done']

export function Tasks() {
  const { user } = useAuth()
  const [items, setItems] = useState(seed)
  const mine = user?.role === 'Intern' ? items.filter((t) => t.assignee === user.name || t.assignee === 'Sarah Intern') : items

  const move = (id: string, status: TaskStatus) => setItems((s) => s.map((t) => (t.id === id ? { ...t, status } : t)))

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {cols.map((col) => (
        <div key={col} className="rounded-2xl bg-white p-3 ring-1 ring-slate-100">
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{col}</p>
            <span className="rounded-full bg-slate-100 px-2 text-[10px] font-bold">{mine.filter((t) => t.status === col).length}</span>
          </div>
          <div className="space-y-2">
            {mine
              .filter((t) => t.status === col)
              .map((t) => (
                <TaskCard key={t.id} task={t} onMove={move} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function TaskCard({ task, onMove }: { task: Task; onMove: (id: string, s: TaskStatus) => void }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
      <p className="text-sm font-semibold">{task.title}</p>
      <p className="mt-1 text-[11px] text-slate-500">{task.project}</p>
      <div className="mt-2 flex items-center justify-between">
        <Badge>{task.priority}</Badge>
        <span className="text-[10px] text-slate-400">{task.due}</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center gap-1 text-[11px] text-slate-500">
          <img src={`https://i.pravatar.cc/32?u=${task.assignee}`} className="h-5 w-5 rounded-full" />
          {task.assignee}
        </span>
        <select
          value={task.status}
          onChange={(e) => onMove(task.id, e.target.value as TaskStatus)}
          className="rounded-lg border bg-white px-1 py-0.5 text-[10px]"
        >
          {cols.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </article>
  )
}
