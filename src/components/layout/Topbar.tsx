import { Bell, LogOut, Menu, MessageSquare, Search } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { notifications } from '../../data/mock'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { Role } from '../../types'

const roles: Role[] = ['Admin', 'Mentor', 'Intern', 'HR', 'Executive', 'AI']

export function Topbar({
  title,
  subtitle,
  onMenu,
}: {
  title: string
  subtitle?: string
  onMenu: () => void
}) {
  const { user, logout, loginAs } = useAuth()
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const unread = notifications.filter((n) => n.unread).length

  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-slate-100 bg-white/80 px-5 py-3 backdrop-blur-xl">
      <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={onMenu}>
        <Menu size={18} />
      </button>
      <div className="min-w-0">
        <h1 className="font-display text-lg font-semibold tracking-tight text-slate-900">{title}</h1>
        {subtitle && <p className="truncate text-xs text-slate-500">{subtitle}</p>}
      </div>
      <div className="ml-auto hidden flex-1 items-center justify-center md:flex">
        <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
          <Search size={15} />
          <input
            className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Search projects, teams, KPIs…"
          />
        </label>
      </div>
      <div className="ml-auto flex items-center gap-1 md:ml-0">
        <button onClick={() => nav('/app/notifications')} className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <Bell size={18} />
          {unread > 0 && (
            <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-violet-500 px-1 text-[9px] font-bold text-white">
              {unread}
            </span>
          )}
        </button>
        <button onClick={() => nav('/app/chat')} className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <MessageSquare size={18} />
          <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
            3
          </span>
        </button>
        <div className="relative">
          <button onClick={() => setOpen((v) => !v)} className="ml-1 flex items-center gap-2 rounded-full py-1 pl-1 pr-2 hover:bg-slate-100">
            {user?.avatar ? (
              <img src={user.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <span className="grid h-8 w-8 place-items-center rounded-full bg-violet-500 text-xs font-bold text-white">AI</span>
            )}
            <span className="hidden text-left text-xs leading-tight sm:block">
              <span className="block font-semibold text-slate-800">{user?.name}</span>
              <span className="text-slate-500">{user?.role}</span>
            </span>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-100 bg-white p-2 shadow-card">
              <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Demo switch role</p>
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    loginAs(r)
                    setOpen(false)
                    nav('/app')
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left text-xs ${
                    user?.role === r ? 'bg-violet-50 font-semibold text-violet-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {r}
                </button>
              ))}
              <button
                onClick={() => {
                  logout()
                  nav('/login')
                }}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50"
              >
                <LogOut size={13} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
