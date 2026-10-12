import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { users } from '../data/mock'
import type { Role, User } from '../types'

interface AuthState {
  user: User | null
  login: (email: string, password: string) => string | null
  loginAs: (role: Role) => void
  register: (name: string, email: string, password: string, role: Role) => string | null
  logout: () => void
}

const AuthContext = createContext<AuthState | null>(null)
const KEY = 'aipms.user'

function readStored(): User | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(readStored)

  const persist = (next: User | null) => {
    setUser(next)
    if (next) localStorage.setItem(KEY, JSON.stringify(next))
    else localStorage.removeItem(KEY)
  }

  const value = useMemo<AuthState>(
    () => ({
      user,
      login: (email, password) => {
        const found = users.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
        )
        if (!found) return 'Invalid email or password. Try a demo account below.'
        persist(found)
        return null
      },
      loginAs: (role) => {
        const found = users.find((u) => u.role === role)
        if (found) persist(found)
      },
      register: (name, email, password, role) => {
        if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
          return 'An account with this email already exists.'
        }
        persist({
          id: `u-${Date.now()}`,
          name,
          email,
          password,
          role,
          title: role,
          avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`,
        })
        return null
      },
      logout: () => persist(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
