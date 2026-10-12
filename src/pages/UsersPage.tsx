import { users, people } from '../data/mock'
import { Badge } from '../components/ui/Badge'

export function UsersPage({ internOnly = false }: { internOnly?: boolean }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs text-slate-400">
          <tr>
            <th className="px-5 py-3 font-medium">Person</th>
            <th className="px-5 py-3 font-medium">Role</th>
            <th className="px-5 py-3 font-medium">Team / Dept</th>
            <th className="px-5 py-3 font-medium">Progress</th>
          </tr>
        </thead>
        <tbody>
          {!internOnly &&
            users.map((u) => (
              <tr key={u.id} className="border-t border-slate-50">
                <td className="flex items-center gap-3 px-5 py-3">
                  {u.avatar ? <img src={u.avatar} className="h-9 w-9 rounded-full" /> : <span className="grid h-9 w-9 place-items-center rounded-full bg-violet-500 text-xs text-white">AI</span>}
                  <div>
                    <p className="font-semibold">{u.name}</p>
                    <p className="text-xs text-slate-400">{u.email}</p>
                  </div>
                </td>
                <td className="px-5">
                  <Badge>{u.role}</Badge>
                </td>
                <td className="px-5 text-slate-500">{u.department}</td>
                <td className="px-5 text-slate-400">—</td>
              </tr>
            ))}
          {people.map((p) => (
            <tr key={p.name} className="border-t border-slate-50">
              <td className="flex items-center gap-3 px-5 py-3">
                <img src={p.avatar} className="h-9 w-9 rounded-full" />
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-slate-400">{p.dept}</p>
                </div>
              </td>
              <td className="px-5">
                <Badge>Intern</Badge>
              </td>
              <td className="px-5 text-slate-500">{p.team}</td>
              <td className="px-5">{p.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
