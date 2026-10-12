import { ListChecks, CheckCircle2, CalendarCheck, Award, Clock } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { StatCard } from '../../components/ui/StatCard'
import { Badge } from '../../components/ui/Badge'
import { Progress } from '../../components/ui/Progress'
import { learning, notifications, tasks } from '../../data/mock'
import { Link } from 'react-router-dom'

const attPie = [
  { name: 'Present', value: 19, color: '#34D399' },
  { name: 'Absent', value: 1, color: '#F43F5E' },
  { name: 'Late', value: 0, color: '#FB923C' },
]

export function InternDashboard() {
  const mine = tasks.filter((t) => t.assignee === 'Sarah Intern')
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="My Tasks" value="12" hint="3 Pending" icon={<ListChecks size={18} />} />
        <StatCard label="Tasks Completed" value="18" hint="↑ This Month" icon={<CheckCircle2 size={18} />} tone="blue" />
        <StatCard label="Attendance" value="95%" hint="↑ This Month" icon={<CalendarCheck size={18} />} tone="green" />
        <StatCard label="Certificates" value="2" hint="Earned" icon={<Award size={18} />} tone="orange" />
        <StatCard label="Today's Work Hours" value="6.5 h" hint="Logged" icon={<Clock size={18} />} tone="violet" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5 xl:col-span-1">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold">My Tasks</h3>
            <Link to="/app/tasks" className="text-xs font-semibold text-violet-600">View All Tasks</Link>
          </div>
          <table className="mt-3 w-full text-left text-xs">
            <thead className="text-slate-400">
              <tr>
                <th className="pb-2 font-medium">Task</th>
                <th className="pb-2 font-medium">Due</th>
                <th className="pb-2 font-medium">Priority</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mine.map((t) => (
                <tr key={t.id} className="border-t border-slate-50">
                  <td className="py-2.5">
                    <p className="font-medium">{t.title}</p>
                    <p className="text-slate-400">{t.project}</p>
                  </td>
                  <td>{t.due.slice(5)}</td>
                  <td>
                    <Badge>{t.priority}</Badge>
                  </td>
                  <td>
                    <Badge>{t.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold">Today's Standup</h3>
            <Link to="/app/standup" className="text-xs font-semibold text-violet-600">Edit Standup</Link>
          </div>
          <ol className="mt-4 space-y-3 text-xs">
            <li className="border-l-2 border-emerald-400 pl-3">
              <p className="font-semibold text-emerald-600">Yesterday</p>
              <p className="text-slate-600">Completed the login page UI and fixed minor bugs.</p>
            </li>
            <li className="border-l-2 border-violet-400 pl-3">
              <p className="font-semibold text-violet-600">Today</p>
              <p className="text-slate-600">Working on API integration and user authentication.</p>
            </li>
            <li className="border-l-2 border-amber-400 pl-3">
              <p className="font-semibold text-amber-600">Blockers</p>
              <p className="text-slate-600">Waiting for API endpoint from backend team.</p>
            </li>
          </ol>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Upcoming Deadlines</h3>
          <ul className="mt-4 space-y-3 text-xs">
            {[
              ['MAY 12', 'Integrate API', '2 Days Left', 'bg-violet-50 text-violet-600'],
              ['MAY 15', 'Database Schema', '5 Days Left', 'bg-emerald-50 text-emerald-600'],
              ['MAY 18', 'Test Cases', '8 Days Left', 'bg-amber-50 text-amber-600'],
              ['MAY 20', 'UI Bug Fixes', '10 Days Left', 'bg-rose-50 text-rose-600'],
            ].map(([d, t, l, c]) => (
              <li key={t} className="flex items-center gap-3">
                <span className={`rounded-xl px-2 py-1 text-[10px] font-bold ${c}`}>{d}</span>
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-slate-400">{l}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Attendance Overview</h3>
          <div className="mx-auto h-36 w-36">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={attPie} dataKey="value" innerRadius={42} outerRadius={62}>
                  {attPie.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="-mt-4 text-center text-2xl font-bold text-emerald-500">95%</p>
          <p className="text-center text-xs text-slate-400">Present</p>
          <p className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-center text-xs font-semibold text-emerald-600">
            Great! Keep up your good attendance.
          </p>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">My Projects</h3>
          <ul className="mt-4 space-y-3 text-xs">
            {[
              ['AI Chatbot Platform', 75],
              ['Mobile App Revamp', 60],
              ['Website Revamp', 40],
            ].map(([n, p]) => (
              <li key={String(n)}>
                <div className="mb-1 flex justify-between">
                  <span className="font-medium">{n}</span>
                  <span>{p}%</span>
                </div>
                <Progress value={Number(p)} />
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Learning Progress</h3>
          <ul className="mt-4 space-y-3 text-xs">
            {learning.slice(0, 3).map((l) => (
              <li key={l.id}>
                <div className="mb-1 flex justify-between">
                  <span className="font-medium">{l.name}</span>
                  <span>{l.progress}%</span>
                </div>
                <Progress value={l.progress} color="bg-emerald-500" />
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Recent AI Insights</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="rounded-xl bg-emerald-50 p-3">You are most productive between 10 AM – 1 PM.</li>
            <li className="rounded-xl bg-amber-50 p-3">Focus more on completing high priority tasks.</li>
            <li className="rounded-xl bg-sky-50 p-3">You have improved by 12% in task completion this week.</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Quick Links</h3>
          <div className="mt-4 grid grid-cols-5 gap-3 text-center text-[11px] font-semibold text-slate-600">
            {[
              ['/app/standup', 'Submit Standup', 'bg-emerald-50'],
              ['/app/documents', 'Upload Document', 'bg-sky-50'],
              ['/app/mentor', 'Ask AI Assistant', 'bg-violet-50'],
              ['/app/certificates', 'View Certificates', 'bg-amber-50'],
              ['/app/chat', 'Join Chat', 'bg-pink-50'],
            ].map(([to, l, c]) => (
              <Link key={l} to={to} className={`rounded-2xl ${c} px-2 py-4 hover:opacity-80`}>
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Recent Notifications</h3>
          <ul className="mt-3 space-y-2 text-xs">
            {notifications.slice(0, 3).map((n) => (
              <li key={n.id} className="flex justify-between border-b border-slate-50 py-2">
                <span>{n.body}</span>
                <span className="shrink-0 text-slate-400">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
