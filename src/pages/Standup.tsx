import { FormEvent, useState } from 'react'
import { standups as seed } from '../data/mock'
import { Badge } from '../components/ui/Badge'
import { useAuth } from '../context/AuthContext'

export function Standup() {
  const { user } = useAuth()
  const [list, setList] = useState(seed)
  const [yesterday, setYesterday] = useState('')
  const [today, setToday] = useState('')
  const [blockers, setBlockers] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const sentiment = blockers.toLowerCase().includes('wait') || blockers.toLowerCase().includes('block') ? -0.2 : 0.6
    setList((s) => [
      {
        id: `s-${Date.now()}`,
        user: user?.name ?? 'You',
        team: user?.team ?? 'Alpha Team',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        yesterday,
        today,
        blockers: blockers || 'None',
        sentiment,
      },
      ...s,
    ])
    setDone(true)
    setYesterday('')
    setToday('')
    setBlockers('')
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <form onSubmit={submit} className="card space-y-3 p-5 lg:col-span-2">
        <h3 className="font-display font-semibold">Submit daily stand-up</h3>
        <p className="text-xs text-slate-500">One entry per intern per business day. AI scores sentiment + blockers asynchronously.</p>
        <label className="block text-xs font-semibold text-slate-500">
          Yesterday
          <textarea required value={yesterday} onChange={(e) => setYesterday(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={3} />
        </label>
        <label className="block text-xs font-semibold text-slate-500">
          Today’s plan
          <textarea required value={today} onChange={(e) => setToday(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={3} />
        </label>
        <label className="block text-xs font-semibold text-slate-500">
          Blockers
          <textarea value={blockers} onChange={(e) => setBlockers(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" rows={2} />
        </label>
        <button className="w-full rounded-xl bg-violet-500 py-2.5 text-sm font-semibold text-white">Submit</button>
        {done && <p className="rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-700">Submitted. AI insight queued — mentor alerted if sentiment &lt; −0.5 or blocker detected.</p>}
      </form>
      <div className="space-y-3 lg:col-span-3">
        {list.map((s) => (
          <article key={s.id} className="card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <img src={`https://i.pravatar.cc/48?u=${s.user}`} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{s.user}</p>
                  <p className="text-[11px] text-slate-400">{s.team} · {s.time}</p>
                </div>
              </div>
              <Badge tone={s.sentiment < 0 ? 'At Risk' : 'On Track'}>{s.sentiment < 0 ? 'Blocker / low mood' : 'Healthy'}</Badge>
            </div>
            <div className="mt-3 grid gap-2 text-xs md:grid-cols-3">
              <p><span className="font-semibold text-slate-500">Yesterday · </span>{s.yesterday}</p>
              <p><span className="font-semibold text-slate-500">Today · </span>{s.today}</p>
              <p><span className="font-semibold text-slate-500">Blockers · </span>{s.blockers}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
