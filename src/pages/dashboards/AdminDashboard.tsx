import { Folder, CheckCircle2, Clock, Users, Sparkles, UsersRound } from 'lucide-react'
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, Bar, BarChart, XAxis } from 'recharts'
import { StatCard } from '../../components/ui/StatCard'
import { attendanceTrend, weeklyTasks } from '../../data/mock'
import { Link } from 'react-router-dom'

const projectPie = [
  { name: 'In Progress', value: 12, color: '#8B7CFF' },
  { name: 'Completed', value: 8, color: '#34D399' },
  { name: 'On Hold', value: 4, color: '#FB923C' },
  { name: 'Planning', value: 4, color: '#F472B6' },
]

const roles = [
  { name: 'Admins', value: 8, color: '#F472B6' },
  { name: 'Managers', value: 25, color: '#60A5FA' },
  { name: 'Mentors', value: 40, color: '#34D399' },
  { name: 'Interns', value: 160, color: '#FB923C' },
  { name: 'HR', value: 23, color: '#F472B6' },
]

const activities = [
  { t: 'New user John Doe registered', time: '10:30 AM', c: 'bg-violet-100 text-violet-600' },
  { t: 'Project Website Revamp created', time: '09:15 AM', c: 'bg-sky-100 text-sky-600' },
  { t: 'Task UI Design completed', time: 'Yesterday', c: 'bg-emerald-100 text-emerald-600' },
  { t: 'Document SRS.docx uploaded', time: '2 days ago', c: 'bg-amber-100 text-amber-600' },
  { t: 'AI Insight generated for Project Alpha', time: '2 days ago', c: 'bg-pink-100 text-pink-600' },
]

const notes = [
  { t: 'Server backup completed successfully', time: 'Today, 08:00 AM' },
  { t: 'Daily Standup reminder sent to all teams', time: 'Today, 09:00 AM' },
  { t: 'Project deadline approaching: AI Chatbot', time: 'Today, 10:30 AM' },
  { t: 'High priority task pending review', time: 'Today, 11:15 AM' },
  { t: 'New AI Insight generated for Project Beta', time: 'Today, 11:45 AM' },
]

export function AdminDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <StatCard label="Total Users" value="256" hint="↑ 12% from last month" icon={<Users size={18} />} tone="violet" />
        <StatCard label="Active Projects" value="28" hint="↑ 8% from last month" icon={<Folder size={18} />} tone="blue" />
        <StatCard label="Tasks Completed" value="1,245" hint="↑ 15% from last month" icon={<CheckCircle2 size={18} />} tone="green" />
        <StatCard label="Pending Tasks" value="312" hint="↓ 5% from last month" icon={<Clock size={18} />} tone="orange" up={false} />
        <StatCard label="Teams" value="15" hint="↑ 7% from last month" icon={<UsersRound size={18} />} tone="blue" />
        <StatCard label="AI Insights Generated" value="128" hint="↑ 20% from last month" icon={<Sparkles size={18} />} tone="pink" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Projects Overview</h3>
          <div className="mt-2 flex items-center gap-4">
            <div className="h-40 w-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={projectPie} dataKey="value" innerRadius={48} outerRadius={70} paddingAngle={3}>
                    {projectPie.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-3xl font-bold">28</p>
              <p className="text-slate-400">Projects</p>
              {projectPie.map((d) => (
                <p key={d.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.name} {d.value} ({((d.value / 28) * 100).toFixed(1)}%)
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Tasks Overview</h3>
          <div className="mt-4 h-44">
            <ResponsiveContainer>
              <BarChart data={weeklyTasks}>
                <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#6D5EF8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold">Recent Activities</h3>
            <Link to="/app/audit" className="text-xs font-semibold text-violet-600">View All</Link>
          </div>
          <ul className="mt-4 space-y-3">
            {activities.map((a) => (
              <li key={a.t} className="flex items-start justify-between gap-3 text-xs">
                <span className="flex items-start gap-2">
                  <span className={`mt-0.5 grid h-7 w-7 place-items-center rounded-full ${a.c}`}>•</span>
                  {a.t}
                </span>
                <span className="shrink-0 text-slate-400">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">User Role Distribution</h3>
          <div className="mt-2 flex items-center gap-4">
            <div className="h-40 w-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={roles} dataKey="value" innerRadius={48} outerRadius={70}>
                    {roles.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1.5 text-xs">
              <p className="text-3xl font-bold">256</p>
              <p className="text-slate-400">Users</p>
              {roles.map((d) => (
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
            <h3 className="font-display text-sm font-semibold">Attendance Summary</h3>
            <span className="text-xs text-slate-400">This Month</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl bg-emerald-50 p-2">
              <p className="font-bold text-emerald-600">92.5%</p>
              <p className="text-slate-500">Present</p>
            </div>
            <div className="rounded-xl bg-rose-50 p-2">
              <p className="font-bold text-rose-500">5.8%</p>
              <p className="text-slate-500">Absent</p>
            </div>
            <div className="rounded-xl bg-amber-50 p-2">
              <p className="font-bold text-amber-500">1.7%</p>
              <p className="text-slate-500">Late</p>
            </div>
          </div>
          <div className="mt-3 h-28">
            <ResponsiveContainer>
              <LineChart data={attendanceTrend}>
                <XAxis dataKey="week" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="present" stroke="#34D399" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="absent" stroke="#F43F5E" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold">System Notifications</h3>
            <Link to="/app/notifications" className="text-xs font-semibold text-violet-600">View All</Link>
          </div>
          <ul className="mt-4 space-y-3 text-xs">
            {notes.map((n) => (
              <li key={n.t} className="flex justify-between gap-3">
                <span>{n.t}</span>
                <span className="shrink-0 text-slate-400">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
