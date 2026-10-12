import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { weeklyTasks, productivity } from '../data/mock'

export function Reports() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="card p-5">
        <h3 className="font-display font-semibold">Weekly task throughput</h3>
        <div className="mt-4 h-56">
          <ResponsiveContainer>
            <BarChart data={weeklyTasks}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#6D5EF8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card p-5">
        <h3 className="font-display font-semibold">Team productivity</h3>
        <div className="mt-4 h-56">
          <ResponsiveContainer>
            <BarChart data={productivity}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#22D3EE" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card p-5 lg:col-span-2">
        <h3 className="font-display font-semibold">Export packs</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {['Daily stand-up digest (PDF)', 'Attendance month (XLSX)', 'Intern scorecards (PDF)', 'Executive board pack (PDF)'].map((r) => (
            <button key={r} className="rounded-2xl border border-dashed border-violet-200 bg-violet-50 px-4 py-6 text-sm font-semibold text-violet-700">
              Generate {r}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
