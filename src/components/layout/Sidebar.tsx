import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  ListChecks,
  CalendarCheck,
  NotebookPen,
  Sparkles,
  FileText,
  BarChart3,
  Bell,
  Award,
  GraduationCap,
  MessageSquare,
  ScrollText,
  Settings,
  UsersRound,
  Briefcase,
  CalendarDays,
  Brain,
  AlertTriangle,
  BookOpen,
  Bot,
  PieChart,
  Wallet,
  Target,
  HelpCircle,
  ClipboardList,
  UserPlus,
} from 'lucide-react'
import { Logo } from '../ui/Logo'
import { useAuth } from '../../context/AuthContext'
import type { Role } from '../../types'
import { cn } from '../../lib/utils'

type Item = { to: string; label: string; icon: typeof LayoutDashboard }

const nav: Record<Role, Item[]> = {
  Admin: [
    { to: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/app/users', label: 'Users', icon: Users },
    { to: '/app/projects', label: 'Projects', icon: FolderKanban },
    { to: '/app/teams', label: 'Teams', icon: UsersRound },
    { to: '/app/tasks', label: 'Tasks', icon: ListChecks },
    { to: '/app/attendance', label: 'Attendance', icon: CalendarCheck },
    { to: '/app/standup', label: 'Daily Standup', icon: NotebookPen },
    { to: '/app/ai', label: 'AI Insights', icon: Sparkles },
    { to: '/app/documents', label: 'Documents', icon: FileText },
    { to: '/app/reports', label: 'Reports', icon: BarChart3 },
    { to: '/app/notifications', label: 'Notifications', icon: Bell },
    { to: '/app/certificates', label: 'Certificates', icon: Award },
    { to: '/app/learning', label: 'Learning Modules', icon: GraduationCap },
    { to: '/app/chat', label: 'Chat', icon: MessageSquare },
    { to: '/app/audit', label: 'Audit Logs', icon: ScrollText },
    { to: '/app/settings', label: 'Settings', icon: Settings },
  ],
  Mentor: [
    { to: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/app/teams', label: 'My Teams', icon: UsersRound },
    { to: '/app/projects', label: 'Projects', icon: FolderKanban },
    { to: '/app/tasks', label: 'Tasks', icon: ListChecks },
    { to: '/app/standup', label: 'Daily Standup', icon: NotebookPen },
    { to: '/app/attendance', label: 'Attendance', icon: CalendarCheck },
    { to: '/app/ai', label: 'AI Insights', icon: Sparkles },
    { to: '/app/documents', label: 'Documents', icon: FileText },
    { to: '/app/chat', label: 'Chat', icon: MessageSquare },
    { to: '/app/reports', label: 'Reports', icon: BarChart3 },
    { to: '/app/calendar', label: 'Calendar', icon: CalendarDays },
    { to: '/app/settings', label: 'Settings', icon: Settings },
  ],
  Intern: [
    { to: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/app/tasks', label: 'My Tasks', icon: ListChecks },
    { to: '/app/projects', label: 'Projects', icon: FolderKanban },
    { to: '/app/standup', label: 'Daily Standup', icon: NotebookPen },
    { to: '/app/attendance', label: 'Attendance', icon: CalendarCheck },
    { to: '/app/mentor', label: 'AI Insights', icon: Sparkles },
    { to: '/app/learning', label: 'Learning Modules', icon: GraduationCap },
    { to: '/app/documents', label: 'Documents', icon: FileText },
    { to: '/app/chat', label: 'Chat', icon: MessageSquare },
    { to: '/app/certificates', label: 'My Certificates', icon: Award },
    { to: '/app/calendar', label: 'Calendar', icon: CalendarDays },
    { to: '/app/reports', label: 'Reports', icon: BarChart3 },
    { to: '/app/settings', label: 'Settings', icon: Settings },
  ],
  HR: [
    { to: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/app/users', label: 'Employees', icon: Users },
    { to: '/app/interns', label: 'Interns', icon: GraduationCap },
    { to: '/app/attendance', label: 'Attendance', icon: CalendarCheck },
    { to: '/app/leaves', label: 'Leaves', icon: ClipboardList },
    { to: '/app/performance', label: 'Performance', icon: Target },
    { to: '/app/certificates', label: 'Certificates', icon: Award },
    { to: '/app/learning', label: 'Learning Modules', icon: BookOpen },
    { to: '/app/documents', label: 'Documents', icon: FileText },
    { to: '/app/reports', label: 'Reports', icon: BarChart3 },
    { to: '/app/recruitment', label: 'Recruitment', icon: UserPlus },
    { to: '/app/ai', label: 'AI Insights', icon: Sparkles },
    { to: '/app/settings', label: 'Settings', icon: Settings },
  ],
  Executive: [
    { to: '/app', label: 'Executive Dashboard', icon: LayoutDashboard },
    { to: '/app/projects', label: 'Portfolio Overview', icon: PieChart },
    { to: '/app/projects', label: 'Projects', icon: FolderKanban },
    { to: '/app/performance', label: 'Performance', icon: Target },
    { to: '/app/ai', label: 'AI Insights', icon: Sparkles },
    { to: '/app/reports', label: 'Financial Overview', icon: Wallet },
    { to: '/app/teams', label: 'Resource Allocation', icon: UsersRound },
    { to: '/app/risks', label: 'Risks & Issues', icon: AlertTriangle },
    { to: '/app/reports', label: 'Reports', icon: BarChart3 },
    { to: '/app/settings', label: 'Strategy & Goals', icon: Briefcase },
    { to: '/app/notifications', label: 'Notifications', icon: Bell },
    { to: '/app/settings', label: 'Settings', icon: Settings },
  ],
  AI: [
    { to: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/app/ai', label: 'AI Insights', icon: Sparkles },
    { to: '/app/risks', label: 'Predictive Analytics', icon: Brain },
    { to: '/app/ai', label: 'Recommendations', icon: Target },
    { to: '/app/risks', label: 'Risk Analysis', icon: AlertTriangle },
    { to: '/app/notifications', label: 'Smart Alerts', icon: Bell },
    { to: '/app/documents', label: 'Knowledge Base', icon: BookOpen },
    { to: '/app/ai', label: 'Model Performance', icon: BarChart3 },
    { to: '/app/mentor', label: 'AI Chat Assistant', icon: Bot },
    { to: '/app/reports', label: 'Reports', icon: FileText },
    { to: '/app/settings', label: 'Settings', icon: Settings },
  ],
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { user } = useAuth()
  const { pathname } = useLocation()
  const items = nav[user?.role ?? 'Intern']

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-ink-950/40 lg:hidden" onClick={onClose} />}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col bg-ink-900 text-white transition-transform lg:static lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center gap-2 px-5 py-5">
          <Logo light />
          <div className="hidden">
            <p className="text-[11px] font-semibold leading-tight">AI-Powered</p>
            <p className="text-[11px] text-white/50">Project Management</p>
          </div>
        </div>
        <nav className="soft-scroll flex-1 space-y-0.5 overflow-y-auto px-3 pb-4">
          {items.map((item) => {
            const active = item.to === '/app' ? pathname === '/app' : pathname.startsWith(item.to)
            const Icon = item.icon
            return (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition',
                  active ? 'bg-violet-500 text-white shadow-glow' : 'text-white/65 hover:bg-white/5 hover:text-white',
                )}
              >
                <Icon size={16} />
                {item.label}
              </NavLink>
            )
          })}
        </nav>
        <div className="border-t border-white/10 p-4">
          {user?.role === 'Intern' || user?.role === 'HR' ? (
            <NavLink
              to="/app/mentor"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] text-white/60 hover:bg-white/5 hover:text-white"
            >
              <HelpCircle size={16} /> Help & Support
            </NavLink>
          ) : null}
          {user?.role === 'AI' && (
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-4">
              <p className="font-display text-sm font-semibold">AI Assistant</p>
              <p className="mt-1 text-[11px] text-white/75">Ask me anything about projects, tasks, risks, or performance.</p>
              <NavLink
                to="/app/mentor"
                className="mt-3 inline-flex rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-violet-700"
              >
                Start Chat
              </NavLink>
            </div>
          )}
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
            {user?.avatar ? (
              <img src={user.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <span className="grid h-8 w-8 place-items-center rounded-full bg-violet-500 text-xs font-bold">AI</span>
            )}
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">{user?.name}</p>
              <p className="truncate text-[10px] text-white/50">{user?.title}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
