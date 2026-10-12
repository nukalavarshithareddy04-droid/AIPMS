import { Folder, CheckCircle2, Users, UserRound, DollarSign, Activity } from 'lucide-react'
import { Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { StatCard } from '../../components/ui/StatCard'
import { Badge } from '../../components/ui/Badge'
import { Progress } from '../../components/ui/Progress'
import { execTrend, productivity, projects } from '../../data/mock'

const pie = [
  { name: 'On Track', value: 19, color: '#34D399' },
  { name: 'In Progress', value: 14, color: '#60A5FA' },
  { name: 'At Risk', value: 8, color: '#FB923C' },
  { name: 'Delayed', value: 4, color: '#F43F5E' },
  { name: 'Not Started', value: 3, color: '#94A3B8' },
]

const budget = [
  { name: 'Spent', value: 72, color: '#34D399' },
  { name: 'Committed', value: 18, color: '#60A5FA' },
  { name: 'Remaining', value: 10, color: '#FB923C' },
]

export function ExecutiveDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <StatCard label="Total Projects" value="48" hint="↑ 16% from last month" icon={<Folder size={18} />} />
        <StatCard label="Projects Completed" value="23" hint="↑ 21% from last month" icon={<CheckCircle2 size={18} />} tone="green" />
        <StatCard label="Active Teams" value="15" hint="↑ 7% from last month" icon={<Users size={18} />} tone="blue" />
        <StatCard label="Total Employees" value="256" hint="↑ 12% from last month" icon={<UserRound size={18} />} tone="orange" />
        <StatCard label="Total Budget (USD)" value="$2.45M" hint="↑ 8% from last month" icon={<DollarSign size={18} />} tone="pink" />
        <StatCard label="Portfolio Health" value="87%" hint="↑ 9% from last month" icon={<Activity size={18} />} tone="cyan" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Project Portfolio Overview</h3>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-40 w-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pie} dataKey="value" innerRadius={48} outerRadius={70}>
                    {pie.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1 text-xs">
              <p className="text-3xl font-bold">48</p>
              <p className="text-slate-400">Projects</p>
              {pie.map((d) => (
                <p key={d.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.name} {d.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Performance Metrics (This Month)</h3>
          <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[11px]">
            {[
              ['Schedule', '92%'],
              ['Cost', '88%'],
              ['Quality', '94%'],
              ['Resource', '78%'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-bold text-slate-800">{v}</p>
                <p className="text-slate-400">{k}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 h-36">
            <ResponsiveContainer>
              <LineChart data={execTrend}>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="schedule" stroke="#34D399" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cost" stroke="#60A5FA" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="quality" stroke="#FB923C" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="resource" stroke="#8B7CFF" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Executive Alerts</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="rounded-xl bg-rose-50 p-3">
              <p className="font-semibold text-rose-600">Project Phoenix is 10 days behind schedule</p>
              <p className="text-slate-500">High priority · 10m ago</p>
            </li>
            <li className="rounded-xl bg-amber-50 p-3">Budget variance detected in 3 projects</li>
            <li className="rounded-xl bg-violet-50 p-3">Resource overallocation in Mobile App Revamp</li>
            <li className="rounded-xl bg-emerald-50 p-3">AI recommendation implemented successfully</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Team Productivity Overview</h3>
          <div className="mt-4 h-44">
            <ResponsiveContainer>
              <BarChart data={productivity}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#6D5EF8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Budget Utilization</h3>
          <div className="mx-auto h-36 w-36">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={budget} dataKey="value" innerRadius={42} outerRadius={62}>
                  {budget.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="-mt-3 text-center text-xl font-bold">$2.45M</p>
          <div className="mt-2 space-y-1 text-xs">
            <p>Spent $1.78M (72%)</p>
            <p>Committed $0.45M (18%)</p>
            <p>Remaining $0.22M (10%)</p>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">AI Strategic Insights</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="rounded-xl bg-emerald-50 p-3">AI predicts 15% improvement in on-time delivery using recommended strategies.</li>
            <li className="rounded-xl bg-sky-50 p-3">Resource reallocation can save up to $120K across 4 active projects.</li>
            <li className="rounded-xl bg-violet-50 p-3">Team Alpha shows highest productivity. Consider best practice sharing.</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Top Projects by Progress</h3>
          <table className="mt-3 w-full text-left text-xs">
            <thead className="text-slate-400">
              <tr>
                <th className="pb-2 font-medium">Project</th>
                <th className="pb-2 font-medium">Manager</th>
                <th className="pb-2 font-medium">Progress</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.slice(0, 5).map((p) => (
                <tr key={p.id} className="border-t border-slate-50">
                  <td className="py-2.5 font-medium">{p.title}</td>
                  <td>{p.manager}</td>
                  <td className="w-32">
                    <Progress value={p.progress} />
                  </td>
                  <td>
                    <Badge>{p.status === 'At Risk' ? 'At Risk' : p.status === 'Completed' ? 'On Track' : p.progress > 70 ? 'On Track' : 'In Progress'}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card grid grid-cols-2 gap-3 p-5 sm:grid-cols-4">
          {[
            ['92%', 'Overall Success Rate'],
            ['23', 'Goals Achieved'],
            ['36', 'AI Recommendations'],
            ['$320K', 'Cost Savings (Est.)'],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-slate-50 p-4 text-center">
              <p className="font-display text-2xl font-bold text-violet-600">{n}</p>
              <p className="mt-1 text-[11px] text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
