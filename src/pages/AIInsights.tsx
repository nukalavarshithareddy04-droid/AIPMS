import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const cards = [
  { to: '/app/mentor', t: 'AI Mentor', d: '24×7 technical + career guidance', c: 'from-violet-500 to-indigo-500' },
  { to: '/app/resume', t: 'Resume Analyzer', d: 'Extract skills, score, rank candidates', c: 'from-sky-500 to-cyan-500' },
  { to: '/app/skills', t: 'Skill Gap Analysis', d: 'Current vs required competencies', c: 'from-emerald-500 to-teal-500' },
  { to: '/app/interview', t: 'Interview Prep', d: 'Technical + HR mock sessions', c: 'from-amber-500 to-orange-500' },
  { to: '/app/risks', t: 'Risk Prediction', d: 'Slip, absenteeism, bottlenecks', c: 'from-rose-500 to-pink-500' },
  { to: '/app/learning', t: 'Learning Paths', d: 'Personalized courses and challenges', c: 'from-fuchsia-500 to-violet-500' },
]

export function AIInsights() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.t} to={c.to} className={`rounded-3xl bg-gradient-to-br ${c.c} p-6 text-white shadow-card`}>
            <Sparkles size={20} />
            <h3 className="mt-4 font-display text-xl font-semibold">{c.t}</h3>
            <p className="mt-1 text-sm text-white/80">{c.d}</p>
          </Link>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ['Productivity score', '87', 'Alpha Team leads this week'],
          ['Stand-up coverage', '96%', '1 intern missed today'],
          ['Prediction accuracy', '92.7%', 'Risk model v2 online'],
        ].map(([k, v, s]) => (
          <div key={k} className="card p-5">
            <p className="text-xs text-slate-500">{k}</p>
            <p className="font-display text-3xl font-bold">{v}</p>
            <p className="text-xs text-slate-400">{s}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
