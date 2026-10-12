import { useState } from 'react'

const qs = [
  { q: 'Explain JWT refresh rotation.', a: 'Issue a short-lived access token and a rotating refresh token stored httpOnly. On refresh, invalidate the old family if reuse is detected.' },
  { q: 'How would you detect a standup blocker with NLP?', a: 'Classify sentences for barrier phrases, score sentiment, and raise a mentor alert if blocker_detected or score < -0.5 — matching the spec sequence.' },
  { q: 'Tell me about a conflict with a teammate.', a: 'Use STAR. Keep it specific, blameless, and end with a measurable outcome.' },
]

export function InterviewPrep() {
  const [i, setI] = useState(0)
  const [show, setShow] = useState(false)
  const cur = qs[i]
  return (
    <div className="mx-auto max-w-2xl card p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">Mock session {i + 1}/{qs.length}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold">{cur.q}</h2>
      <button onClick={() => setShow((s) => !s)} className="mt-6 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white">
        {show ? 'Hide coaching' : 'Reveal model answer'}
      </button>
      {show && <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">{cur.a}</p>}
      <div className="mt-6 flex justify-between">
        <button disabled={i === 0} onClick={() => { setI((x) => x - 1); setShow(false) }} className="text-sm font-semibold text-slate-500 disabled:opacity-30">
          Previous
        </button>
        <button disabled={i === qs.length - 1} onClick={() => { setI((x) => x + 1); setShow(false) }} className="text-sm font-semibold text-violet-600 disabled:opacity-30">
          Next question
        </button>
      </div>
    </div>
  )
}
