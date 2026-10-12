import { Users, Briefcase, UserMinus, GraduationCap, Award } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { StatCard } from '../../components/ui/StatCard'
import { Badge } from '../../components/ui/Badge'
import { Progress } from '../../components/ui/Progress'
import { documents, leaves, people } from '../../data/mock'
import { Link } from 'react-router-dom'

const emp = [
  { name: 'Full Time', value: 98, color: '#8B7CFF' },
  { name: 'Part Time', value: 28, color: '#F472B6' },
  { name: 'Contract', value: 20, color: '#34D399' },
  { name: 'On Leave', value: 10, color: '#FB923C' },
]

const att = [
  { name: 'Present', value: 142, color: '#34D399' },
  { name: 'Absent', value: 9, color: '#F43F5E' },
  { name: 'Late', value: 5, color: '#FB923C' },
]

export function HRDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Total Employees" value="156" hint="↑ 5 from last month" icon={<Users size={18} />} />
        <StatCard label="Present Today" value="142" hint="91%" icon={<Briefcase size={18} />} tone="blue" />
        <StatCard label="On Leave" value="14" hint="9%" icon={<UserMinus size={18} />} tone="orange" />
        <StatCard label="Active Interns" value="48" hint="↑ 6 this month" icon={<GraduationCap size={18} />} tone="green" />
        <StatCard label="Certificates Issued" value="23" hint="↑ 3 this month" icon={<Award size={18} />} tone="pink" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Employee Overview</h3>
          <div className="mt-2 flex items-center gap-4">
            <div className="h-40 w-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={emp} dataKey="value" innerRadius={48} outerRadius={70}>
                    {emp.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1.5 text-xs">
              <p className="text-3xl font-bold">156</p>
              <p className="text-slate-400">Total</p>
              {emp.map((d) => (
                <p key={d.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.name} {d.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Attendance Summary</h3>
          <div className="mx-auto h-36 w-36">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={att} dataKey="value" innerRadius={42} outerRadius={62}>
                  {att.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="-mt-4 text-center text-2xl font-bold text-emerald-500">91%</p>
          <p className="text-center text-xs text-slate-400">Average Attendance</p>
          <p className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-center text-xs text-emerald-600">
            Good job! Attendance is better than last month.
          </p>
        </div>
        <div className="card overflow-hidden p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold">Leave Requests</h3>
            <Link to="/app/leaves" className="text-xs font-semibold text-violet-600">View All</Link>
          </div>
          <table className="mt-3 w-full text-left text-xs">
            <thead className="text-slate-400">
              <tr>
                <th className="pb-2 font-medium">Employee</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((l) => (
                <tr key={l.id} className="border-t border-slate-50">
                  <td className="py-2.5 font-medium">{l.employee}</td>
                  <td>{l.type}</td>
                  <td>
                    <Badge>{l.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Active Interns</h3>
          <ul className="mt-3 space-y-3 text-xs">
            {people.slice(4, 8).map((p) => (
              <li key={p.name} className="flex items-center gap-3">
                <img src={p.avatar} className="h-8 w-8 rounded-full" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-slate-400">{p.dept} · {p.mentor}</p>
                </div>
                <div className="w-24">
                  <Progress value={p.progress} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Upcoming Birthdays</h3>
          <ul className="mt-4 space-y-3 text-xs">
            {[
              ['Alice Brown', '15 May', '2 Days Left'],
              ['Robert Wilson', '18 May', '5 Days Left'],
              ['Daniel Lee', '21 May', '8 Days Left'],
              ['Sophia Martinez', '25 May', '12 Days Left'],
            ].map(([n, d, l]) => (
              <li key={n} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{n}</p>
                  <p className="text-slate-400">{d}</p>
                </div>
                <span className="text-violet-600">{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Important Documents</h3>
          <ul className="mt-4 space-y-2 text-xs">
            {documents.slice(0, 4).map((d) => (
              <li key={d.name} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>{d.name}</span>
                <Badge>PDF</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
