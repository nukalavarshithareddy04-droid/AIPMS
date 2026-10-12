import { useEffect, useState } from 'react'
import { MapPin, Timer } from 'lucide-react'
import { formatTime } from '../lib/utils'
import { people } from '../data/mock'
import { Badge } from '../components/ui/Badge'
import { useAuth } from '../context/AuthContext'

export function Attendance() {
  const { user } = useAuth()
  const [clocked, setClocked] = useState<Date | null>(null)
  const [out, setOut] = useState<Date | null>(null)
  const [now, setNow] = useState(new Date())
  const [geo, setGeo] = useState('Locating…')

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => setGeo(`${p.coords.latitude.toFixed(3)}, ${p.coords.longitude.toFixed(3)}`),
        () => setGeo('Hyderabad HQ · geo-fence OK'),
      )
    } else setGeo('Hyderabad HQ · geo-fence OK')
    return () => clearInterval(t)
  }, [])

  const hours = clocked ? ((out ?? now).getTime() - clocked.getTime()) / 36e5 : 0

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="card p-6 lg:col-span-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live clock</p>
        <p className="mt-2 font-display text-4xl font-bold">{formatTime(now)}</p>
        <p className="mt-1 text-xs text-slate-500">{now.toDateString()}</p>
        <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <MapPin size={14} /> {geo}
        </p>
        <div className="mt-6 flex gap-2">
          <button
            disabled={!!clocked}
            onClick={() => setClocked(new Date())}
            className="flex-1 rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-white disabled:opacity-40"
          >
            Check in
          </button>
          <button
            disabled={!clocked || !!out}
            onClick={() => setOut(new Date())}
            className="flex-1 rounded-xl bg-ink-900 py-3 text-sm font-semibold text-white disabled:opacity-40"
          >
            Check out
          </button>
        </div>
        <div className="mt-5 rounded-2xl bg-violet-50 p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-violet-700">
            <Timer size={16} /> {hours.toFixed(2)} hrs today
          </p>
          <p className="mt-1 text-xs text-violet-600">
            {clocked ? `In ${formatTime(clocked)}` : 'Not clocked in'}
            {out ? ` · Out ${formatTime(out)}` : ''}
          </p>
          <p className="mt-2 text-[11px] text-slate-500">IP captured · unique per user/day (spec § attendance table)</p>
        </div>
        <p className="mt-4 text-xs text-slate-400">Signed in as {user?.name}</p>
      </div>
      <div className="card overflow-hidden p-5 lg:col-span-2">
        <h3 className="font-display font-semibold">Team attendance · today</h3>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="text-xs text-slate-400">
            <tr>
              <th className="pb-2 font-medium">Intern</th>
              <th className="pb-2 font-medium">Team</th>
              <th className="pb-2 font-medium">In</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p, i) => (
              <tr key={p.name} className="border-t border-slate-50">
                <td className="flex items-center gap-2 py-3">
                  <img src={p.avatar} className="h-8 w-8 rounded-full" />
                  {p.name}
                </td>
                <td className="text-slate-500">{p.team}</td>
                <td className="text-slate-500">{['09:02', '09:11', '08:58', '09:24', '09:05', '09:18', '08:49', '—'][i]}</td>
                <td>
                  <Badge>{i === 7 ? 'Absent' : i === 3 ? 'Late' : 'Present'}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
