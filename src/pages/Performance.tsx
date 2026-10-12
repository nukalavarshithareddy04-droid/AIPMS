import { people } from '../data/mock'
import { Progress } from '../components/ui/Progress'

export function Performance() {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs text-slate-400">
          <tr>
            <th className="px-5 py-3 font-medium">Intern</th>
            <th className="px-5 py-3 font-medium">Attendance</th>
            <th className="px-5 py-3 font-medium">Tasks</th>
            <th className="px-5 py-3 font-medium">Stand-ups</th>
            <th className="px-5 py-3 font-medium">Score</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, i) => {
            const score = p.progress
            return (
              <tr key={p.name} className="border-t border-slate-50">
                <td className="flex items-center gap-2 px-5 py-3">
                  <img src={p.avatar} className="h-8 w-8 rounded-full" />
                  {p.name}
                </td>
                <td className="px-5">{94 - i}%</td>
                <td className="px-5">{18 - i}/22</td>
                <td className="px-5">{i === 7 ? '88%' : '100%'}</td>
                <td className="px-5 w-48">
                  <div className="flex items-center gap-2">
                    <Progress value={score} />
                    <span className="text-xs font-bold">{score}</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
