import { useState } from 'react'
import { notifications as seed } from '../data/mock'

export function Notifications() {
  const [items, setItems] = useState(seed)
  return (
    <div className="card divide-y">
      {items.map((n) => (
        <button
          key={n.id}
          onClick={() => setItems((s) => s.map((x) => (x.id === n.id ? { ...x, unread: false } : x)))}
          className={`flex w-full items-start gap-3 px-5 py-4 text-left ${n.unread ? 'bg-violet-50/50' : ''}`}
        >
          <span className={`mt-1 h-2 w-2 rounded-full ${n.unread ? 'bg-violet-500' : 'bg-slate-200'}`} />
          <div className="flex-1">
            <p className="text-sm font-semibold">{n.title}</p>
            <p className="text-xs text-slate-500">{n.body}</p>
          </div>
          <span className="text-[11px] text-slate-400">{n.time}</span>
        </button>
      ))}
    </div>
  )
}
