import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../components/ui/Logo'
import { useAuth } from '../context/AuthContext'
import type { Role } from '../types'

const roles: Role[] = ['Intern', 'Mentor', 'HR', 'Admin']

export function Register() {
  const { register } = useAuth()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<Role>('Intern')
  const [error, setError] = useState<string | null>(null)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setError('All fields are required.')
      return
    }
    const err = register(name, email, password, role)
    if (err) setError(err)
    else nav('/app')
  }

  return (
    <div className="mesh flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
        <Logo light />
        <h1 className="mt-6 font-display text-3xl font-bold text-white">Join AIPMS</h1>
        <p className="mt-2 text-sm text-white/55">Create a local demo profile. Data stays in this browser.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <label className="text-xs font-semibold text-white/70">
            Full name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            />
          </label>
          <label className="text-xs font-semibold text-white/70">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            />
          </label>
          <label className="text-xs font-semibold text-white/70">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            />
          </label>
          <div>
            <p className="mb-2 text-xs font-semibold text-white/70">Role</p>
            <div className="grid grid-cols-4 gap-2">
              {roles.map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRole(r)}
                  className={`rounded-xl py-2 text-xs font-semibold ${
                    role === r ? 'bg-violet-500 text-white' : 'border border-white/10 text-white/70'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          {error && <p className="text-xs text-rose-300">{error}</p>}
          <button className="rounded-xl bg-violet-500 py-3 text-sm font-bold text-white">Create account</button>
        </form>
        <p className="mt-5 text-center text-xs text-white/50">
          Already have access?{' '}
          <Link to="/login" className="font-semibold text-violet-200">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
