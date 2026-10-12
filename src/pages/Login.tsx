import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../components/ui/Logo'
import { useAuth } from '../context/AuthContext'
import { users } from '../data/mock'
import { asset } from '../lib/utils'
import type { Role } from '../types'

export function Login() {
  const { login, loginAs } = useAuth()
  const nav = useNavigate()
  const [email, setEmail] = useState('intern@aipms.io')
  const [password, setPassword] = useState('intern123')
  const [error, setError] = useState<string | null>(null)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const err = login(email, password)
    if (err) setError(err)
    else nav('/app')
  }

  const quick = (role: Role) => {
    loginAs(role)
    nav('/app')
  }

  return (
    <div className="mesh grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src={asset('images/hero-bg.jpg')} alt="" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">JWT · RBAC · Multi-agent</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white">
            Sign in. Land on your command center.
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/60">
            Interns get tasks and stand-ups. Mentors get team health. Executives get the portfolio pulse.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Logo light />
          <h1 className="mt-8 font-display text-3xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-white/55">Use a demo account or your credentials.</p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <label className="block text-xs font-semibold text-white/70">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400"
              />
            </label>
            <label className="block text-xs font-semibold text-white/70">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400"
              />
            </label>
            {error && <p className="text-xs text-rose-300">{error}</p>}
            <button className="w-full rounded-xl bg-violet-500 py-3 text-sm font-bold text-white shadow-glow hover:bg-violet-400">
              Continue
            </button>
          </form>
          <p className="mt-5 text-center text-xs text-white/50">
            New here?{' '}
            <Link to="/register" className="font-semibold text-violet-200">
              Create an account
            </Link>
          </p>
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">One-click demo roles</p>
            <div className="grid grid-cols-2 gap-2">
              {users.map((u) => (
                <button
                  key={u.id}
                  onClick={() => quick(u.role)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10"
                >
                  <p className="text-xs font-semibold text-white">{u.role}</p>
                  <p className="text-[10px] text-white/45">{u.email}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
