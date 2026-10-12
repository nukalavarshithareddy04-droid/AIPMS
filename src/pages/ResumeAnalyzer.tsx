import { useState } from 'react'
import { Progress } from '../components/ui/Progress'

export function ResumeAnalyzer() {
  const [file, setFile] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="card p-6">
        <h3 className="font-display font-semibold">Upload resume</h3>
        <p className="mt-1 text-xs text-slate-500">PDF / DOCX. We extract education, skills, certifications, and project experience.</p>
        <label className="mt-6 grid h-40 cursor-pointer place-items-center rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50 text-sm text-violet-700">
          {file ?? 'Drop a resume or click to browse'}
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              setFile(f?.name ?? null)
              setReady(false)
              setTimeout(() => setReady(true), 800)
            }}
          />
        </label>
      </div>
      <div className="card p-6">
        <h3 className="font-display font-semibold">AI extraction</h3>
        {!ready && <p className="mt-8 text-sm text-slate-400">Waiting for a document…</p>}
        {ready && (
          <div className="mt-4 space-y-4 text-sm">
            <p>
              <span className="text-slate-400">Candidate · </span>Ishaan Kapoor
            </p>
            <p>
              <span className="text-slate-400">Education · </span>B.Tech CSE · CGPA 8.6
            </p>
            <div>
              <div className="mb-1 flex justify-between text-xs">
                <span>Match vs AI Chatbot Platform</span>
                <span>92</span>
              </div>
              <Progress value={92} />
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'REST', 'Git'].map((s) => (
                <span key={s} className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                  {s}
                </span>
              ))}
              {['FastAPI', 'RAG'].map((s) => (
                <span key={s} className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700">
                  missing · {s}
                </span>
              ))}
            </div>
            <p className="rounded-xl bg-slate-50 p-3 text-xs">
              Rank #1 of 24 in this week’s frontend intern funnel. Recommend interview — strong UI craft, gap on backend/RAG can be closed via Learning Agent.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
