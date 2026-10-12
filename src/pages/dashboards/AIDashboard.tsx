import { Lightbulb, TrendingUp, Shield, Star, Sparkles } from 'lucide-react'
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { StatCard } from '../../components/ui/StatCard'
import { Badge } from '../../components/ui/Badge'
import { Progress } from '../../components/ui/Progress'
import { aiTrend } from '../../data/mock'
import { Link } from 'react-router-dom'

const health = [
  { name: 'Healthy', value: 14, color: '#34D399' },
  { name: 'At Risk', value: 12, color: '#60A5FA' },
  { name: 'Needs Attention', value: 7, color: '#FB923C' },
  { name: 'Critical', value: 3, color: '#F43F5E' },
]

export function AIDashboard() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Insights Generated" value="128" hint="↑ 24% from last week" icon={<Lightbulb size={18} />} />
        <StatCard label="Prediction Accuracy" value="92.7%" hint="↑ 4.3% from last week" icon={<TrendingUp size={18} />} tone="blue" />
        <StatCard label="Risks Detected" value="18" hint="↓ 10% from last week" icon={<Shield size={18} />} tone="green" up={false} />
        <StatCard label="Recommendations" value="36" hint="↑ 12% from last week" icon={<Star size={18} />} tone="orange" />
        <StatCard label="Tasks Optimized" value="142" hint="↑ 18% from last week" icon={<Sparkles size={18} />} tone="violet" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Project Health Prediction</h3>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-40 w-40">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={health} dataKey="value" innerRadius={48} outerRadius={70}>
                    {health.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1.5 text-xs">
              <p className="text-3xl font-bold">36</p>
              <p className="text-slate-400">Projects</p>
              {health.map((d) => (
                <p key={d.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.name} {d.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">AI Insights Trend</h3>
          <div className="mt-4 h-44">
            <ResponsiveContainer>
              <LineChart data={aiTrend}>
                <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="insights" stroke="#6D5EF8" strokeWidth={2} />
                <Line type="monotone" dataKey="risks" stroke="#60A5FA" strokeWidth={2} />
                <Line type="monotone" dataKey="recs" stroke="#34D399" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Top AI Insights</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="rounded-xl bg-violet-50 p-3">Team Alpha productivity improved by 15%</li>
            <li className="rounded-xl bg-amber-50 p-3">High risk of delay in Project Phoenix</li>
            <li className="rounded-xl bg-emerald-50 p-3">Resource reallocation recommended</li>
            <li className="rounded-xl bg-sky-50 p-3">3 tasks may miss deadline</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Risk Analysis</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Project Phoenix</p>
                <p className="text-slate-500">Risk of delay due to resource overload</p>
              </div>
              <Badge>High</Badge>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Mobile App Revamp</p>
                <p className="text-slate-500">API integration causing dependency risk</p>
              </div>
              <Badge>Medium</Badge>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Data Migration</p>
                <p className="text-slate-500">Minor data inconsistency issues</p>
              </div>
              <Badge>Low</Badge>
            </li>
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">AI Recommendations</h3>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="rounded-xl bg-slate-50 p-3">Reassign 2 developers from Project X to Project Phoenix</li>
            <li className="rounded-xl bg-slate-50 p-3">Increase automated testing for Mobile App Revamp</li>
            <li className="rounded-xl bg-slate-50 p-3">Adjust timeline for Data Analytics System</li>
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-sm font-semibold">Model Performance</h3>
          <p className="mt-2 text-4xl font-bold text-violet-600">93%</p>
          <p className="text-xs text-slate-400">Overall Score</p>
          <ul className="mt-4 space-y-2 text-xs">
            {[
              ['Prediction Quality', 94],
              ['Data Quality', 92],
              ['Model Reliability', 91],
              ['User Feedback', 95],
            ].map(([n, v]) => (
              <li key={String(n)}>
                <div className="mb-1 flex justify-between">
                  <span>{n}</span>
                  <span>{v}%</span>
                </div>
                <Progress value={Number(v)} color="bg-emerald-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card flex flex-col gap-4 p-5 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-600">
            <Sparkles />
          </span>
          <div>
            <p className="font-display font-semibold">Hello! I'm your AI Assistant.</p>
            <p className="text-xs text-slate-500">Ask me anything about projects, insights, risks, or recommendations.</p>
          </div>
        </div>
        <Link
          to="/app/mentor"
          className="ml-auto rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Open AI Mentor
        </Link>
      </div>
    </div>
  )
}
