import { auditLogs } from '../data/mock'

export function AuditLogs() {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs text-slate-400">
          <tr>
            <th className="px-5 py-3 font-medium">User</th>
            <th className="px-5 py-3 font-medium">Activity</th>
            <th className="px-5 py-3 font-medium">IP</th>
            <th className="px-5 py-3 font-medium">Time</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((l) => (
            <tr key={l.activity} className="border-t border-slate-50">
              <td className="px-5 py-3 font-medium">{l.user}</td>
              <td className="px-5 text-slate-600">{l.activity}</td>
              <td className="px-5 font-mono text-xs text-slate-400">{l.ip}</td>
              <td className="px-5 text-slate-400">{l.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
