import { Progress } from '../components/ui/Progress'

const rows = [
  { skill: 'React', have: 75, need: 80 },
  { skill: 'TypeScript', have: 55, need: 75 },
  { skill: 'FastAPI', have: 20, need: 70 },
  { skill: 'PostgreSQL', have: 40, need: 65 },
  { skill: 'RAG / Vector DB', have: 10, need: 60 },
  { skill: 'Communication', have: 70, need: 70 },
]

export function SkillGap() {
  return (
    <div className="card p-6">
      <h3 className="font-display font-semibold">Sarah Intern · vs AI Chatbot Platform</h3>
      <p className="mt-1 text-xs text-slate-500">Learning Agent compares current proficiency with required skills and builds a path.</p>
      <div className="mt-6 space-y-5">
        {rows.map((r) => (
          <div key={r.skill}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-semibold">{r.skill}</span>
              <span className="text-slate-400">
                {r.have}% / need {r.need}%
              </span>
            </div>
            <Progress value={r.have} color={r.have >= r.need ? 'bg-emerald-500' : 'bg-violet-500'} />
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-violet-50 p-4 text-sm text-violet-800">
        Recommended path: FastAPI + JWT (6h) → RAG workshop → mock interview. Close the gap in ~3 weeks at 5 hours/week.
      </div>
    </div>
  )
}
