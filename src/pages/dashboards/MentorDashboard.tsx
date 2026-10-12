import { Users, Folder, CheckCircle2, Clock, TrendingUp } from 'lucide-react'
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { StatCard } from '../../components/ui/StatCard'
import { Progress } from '../../components/ui/Progress'
import { people, standups, teams } from '../../data/mock'
import { Link } from 'react-router-dom'

const taskPie = [
  { name: 'Completed', value: 22, color: '#34D399' },
  { name: 'In Progress', value: 12, color: '#60A5FA' },
  { name: 'Pending', value: 6, color: '#FB923C' },
  { name: 'Overdue', value: 2, color: '#F43F5E' },
]

const att = [
  { d: 'Mon', p: 70, o: 62 },
  { d: 'Tue', p: 78, o: 64 },
  { d: 'Wed', p: 74, o: 66 },
  { d: 'Thu', p: 86, o: 68 },
  { d: 'Fri', p: 80, o: 70 },
  { d: 'Sat', p: 90, o: 72 },
]

export function MentorDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="My Teams" value="4" hint="↑ 1 new this month" icon={<Users size={18} />} />
        <StatCard label="Active Projects" value="5" hint="↑ 2 active" icon={<Folder size={18} />} tone="blue" />
        <StatCard label="Tasks Assigned" value="42" hint="↑ 8 this week" icon={<CheckCircle2 size={18} />} tone="green" />
        <StatCard label="Pending Approvals" value="6" hint="↓ 2 pending" icon={<Clock size={18} />} tone="orange" up={false} />
        <StatCard label="Team Performance" value="87%" hint="↑ 5% from last week" icon={<TrendingUp size={18} />} tone="pink" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">My Teams Overview</h3>
          <table className="mt-4 w-full text-left text-xs">
            <thead className="text-slate-400">
              <tr>
                <th className="pb-2 font-medium">Team</th>
                <th className="pb-2 font-medium">Project</th>
                <th className="pb-2 font-medium">Members</th>
                <th className="pb-2 font-medium">Progress</th>
              </tr>
            </thead>
            <tbody>
              {teams.slice(0, 4).map((t) => (
                <tr key={t.id} className="border-t border-slate-50">
                  <td className="py-2.5 font-medium">{t.name}</td>
                  <td className="text-slate-500">{t.project}</td>
                  <td>
                    <div className="flex -space-x-2">
                      {people.slice(0, t.members.length).map((p) => (
                        <img key={p.name} src={p.avatar} className="h-6 w-6 rounded-full border-2 border-white" />
                      ))}
                    </div>
                  </td>
                  <td className="w-28">
                    <Progress value={t.progress} color={t.progress > 70 ? 'bg-emerald-500' : t.progress > 50 ? 'bg-amber-400' : 'bg-rose-400'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/app/teams" className="mt-3 inline-block text-xs font-semibold text-violet-600">View All Teams →</Link>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Tasks Overview</h3>
          <div className="mt-2 flex items-center gap-4">
            <div className="h-40 w-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={taskPie} dataKey="value" innerRadius={48} outerRadius={70}>
                    {taskPie.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-3xl font-bold">42</p>
              <p className="text-slate-400">Total Tasks</p>
              {taskPie.map((d) => (
                <p key={d.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.name} {d.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold">Today's Standups</h3>
            <Link to="/app/standup" className="text-xs font-semibold text-violet-600">View All</Link>
          </div>
          <ul className="mt-4 space-y-3">
            {standups.slice(0, 3).map((s) => (
              <li key={s.id} className="flex items-start justify-between gap-3 text-xs">
                <div className="flex gap-2">
                  <img src={`https://i.pravatar.cc/40?u=${s.user}`} className="h-8 w-8 rounded-full" />
                  <div>
                    <p className="font-semibold">{s.user}</p>
                    <p className="text-slate-400">{s.team}</p>
                    <p className="mt-0.5 text-slate-500">Done: {s.yesterday}</p>
                    <p className="text-slate-500">Plan: {s.today}</p>
                    <p className="text-rose-500">Blockers: {s.blockers}</p>
                  </div>
                </div>
                <span className="text-slate-400">{s.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Attendance Summary</h3>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <p className="text-2xl font-bold text-emerald-500">92%</p>
              <p className="text-slate-400">Average</p>
            </div>
            <div>
              <p className="text-2xl font-bold">18</p>
              <p className="text-slate-400">Total Interns</p>
            </div>
            <div>
              <p className="text-2xl font-bold">17</p>
              <p className="text-slate-400">Present Today</p>
            </div>
          </div>
          <div className="mt-3 h-28">
            <ResponsiveContainer>
              <LineChart data={att}>
                <XAxis dataKey="d" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="p" stroke="#34D399" strokeWidth={2} />
                <Line type="monotone" dataKey="o" stroke="#60A5FA" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">AI Insights For Your Teams</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="rounded-xl bg-emerald-50 p-3">Alpha Team productivity is high this week. Keep up the good work!</li>
            <li className="rounded-xl bg-amber-50 p-3">Beta Team has 2 overdue tasks. Consider reviewing priorities.</li>
            <li className="rounded-xl bg-violet-50 p-3">Gamma Team efficiency improved by 12% compared to last week.</li>
          </ul>
          <Link to="/app/ai" className="mt-3 inline-block text-xs font-semibold text-violet-600">Go to AI Insights →</Link>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Upcoming Deadlines</h3>
          <ul className="mt-4 space-y-3 text-xs">
            {[
              ['MAY 15', 'AI Chatbot Platform - Phase 2', '2 Days Left', 'bg-emerald-50 text-emerald-600'],
              ['MAY 17', 'Mobile App Revamp - Testing', '4 Days Left', 'bg-amber-50 text-amber-600'],
              ['MAY 20', 'Data Analytics System - Report', '7 Days Left', 'bg-rose-50 text-rose-600'],
            ].map(([d, t, l, c]) => (
              <li key={t} className="flex items-center gap-3">
                <span className={`rounded-xl px-2 py-1 text-[10px] font-bold ${c}`}>{d}</span>
                <div className="flex-1">
                  <p className="font-semibold">{t}</p>
                  <p className="text-slate-400">{l}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
