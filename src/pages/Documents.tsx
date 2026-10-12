import { documents } from '../data/mock'
import { Badge } from '../components/ui/Badge'
import { FileText } from 'lucide-react'

export function Documents() {
  return (
    <div className="card divide-y">
      {documents.map((d) => (
        <div key={d.name} className="flex items-center gap-3 px-5 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-rose-50 text-rose-500">
            <FileText size={18} />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold">{d.name}</p>
            <p className="text-xs text-slate-400">
              {d.by} · {d.date}
            </p>
          </div>
          <Badge>{d.type}</Badge>
        </div>
      ))}
    </div>
  )
}
