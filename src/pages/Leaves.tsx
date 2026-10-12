import { useState } from 'react'
import { leaves as seed } from '../data/mock'
import { Badge } from '../components/ui/Badge'
import type { LeaveRequest } from '../types'

export function Leaves() {
  const [items, setItems] = useState(seed)
  const act = (id: string, status: LeaveRequest['status']) => setItems((s) => s.map((l) => (l.id === id ? { ...l, status } : l)))
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs text-slate-400">
          <tr>
            <th className="px-5 py-3 font-medium">Employee</th>
            <th className="px-5 py-3 font-medium">Type</th>
            <th className="px-5 py-3 font-medium">From</th>
            <th className="px-5 py-3 font-medium">To</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((l) => (
            <tr key={l.id} className="border-t border-slate-50">
              <td className="px-5 py-3 font-medium">{l.employee}</td>
              <td className="px-5">{l.type}</td>
              <td className="px-5 text-slate-500">{l.from}</td>
              <td className="px-5 text-slate-500">{l.to}</td>
              <td className="px-5">
                <Badge>{l.status}</Badge>
              </td>
              <td className="px-5">
                {l.status === 'Pending' && (
                  <div className="flex gap-2">
                    <button onClick={() => act(l.id, 'Approved')} className="text-xs font-semibold text-emerald-600">Approve</button>
                    <button onClick={() => act(l.id, 'Rejected')} className="text-xs font-semibold text-rose-600">Reject</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
