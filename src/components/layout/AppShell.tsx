import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { useAuth } from '../../context/AuthContext'

const titles: Record<string, { title: string; subtitle?: string }> = {
  '/app': { title: 'Dashboard', subtitle: 'Strategic overview of organization performance' },
  '/app/users': { title: 'Users', subtitle: 'Role-based access and intern roster' },
  '/app/interns': { title: 'Interns', subtitle: 'Track intern progress and mentors' },
  '/app/projects': { title: 'Projects', subtitle: 'Portfolio, milestones, and risk' },
  '/app/teams': { title: 'Teams', subtitle: 'Collaborative squads and workload' },
  '/app/tasks': { title: 'Tasks', subtitle: 'Sprint backlog and priorities' },
  '/app/attendance': { title: 'Attendance', subtitle: 'Check-in, geo-fence, and hours' },
  '/app/standup': { title: 'Daily Stand-up', subtitle: 'Yesterday · Today · Blockers' },
  '/app/ai': { title: 'AI Insights', subtitle: 'Real-time intelligence and analytics' },
  '/app/mentor': { title: 'AI Mentor', subtitle: '24×7 guidance, debugging, and career help' },
  '/app/documents': { title: 'Documents', subtitle: 'Resumes, reports, and project files' },
  '/app/reports': { title: 'Reports', subtitle: 'Daily, weekly, and executive packs' },
  '/app/notifications': { title: 'Notifications', subtitle: 'Alerts, reminders, and AI recs' },
  '/app/certificates': { title: 'Certificates', subtitle: 'Digitally signed, QR-verifiable' },
  '/app/learning': { title: 'Learning Modules', subtitle: 'Personalized skill paths' },
  '/app/chat': { title: 'Chat', subtitle: 'Mentor–intern conversations' },
  '/app/audit': { title: 'Audit Logs', subtitle: 'Security and compliance trail' },
  '/app/settings': { title: 'Settings', subtitle: 'Profile, org, and preferences' },
  '/app/calendar': { title: 'Calendar', subtitle: 'Deadlines, stand-ups, interviews' },
  '/app/leaves': { title: 'Leave Management', subtitle: 'Requests and approvals' },
  '/app/performance': { title: 'Performance', subtitle: 'Productivity scoring' },
  '/app/recruitment': { title: 'Recruitment', subtitle: 'Resume ranking and matching' },
  '/app/risks': { title: 'Risks & Issues', subtitle: 'Predictive project health' },
  '/app/resume': { title: 'Resume Analyzer', subtitle: 'Skill extraction and ranking' },
  '/app/skills': { title: 'Skill Gap Analysis', subtitle: 'Current vs required competencies' },
  '/app/interview': { title: 'Interview Prep', subtitle: 'Mock interviews and feedback' },
}

function roleDash(role?: string, name?: string) {
  const first = name?.split(' ')[0] ?? 'there'
  const map: Record<string, { title: string; subtitle: string }> = {
    Admin: { title: 'Admin Dashboard', subtitle: 'Platform-wide operations at a glance' },
    Mentor: { title: 'Mentor Dashboard', subtitle: `Welcome back, ${first} 👋` },
    Intern: { title: 'Intern Dashboard', subtitle: `Welcome back, ${name ?? 'Intern'}! 👋` },
    HR: { title: 'HR Dashboard', subtitle: `Welcome back, ${first}! 👋` },
    Executive: { title: 'Executive Dashboard', subtitle: 'Strategic overview of organization performance' },
    AI: { title: 'AI Dashboard', subtitle: 'Real-time AI insights and intelligent analytics' },
  }
  return map[role ?? 'Intern']
}

export function AppShell() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { user } = useAuth()
  const meta =
    pathname === '/app'
      ? roleDash(user?.role, user?.name)
      : titles[pathname] ?? { title: 'AIPMS', subtitle: '' }

  return (
    <div className="flex min-h-screen bg-[#f6f7fb]">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={meta.title} subtitle={meta.subtitle} onMenu={() => setOpen(true)} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
        <footer className="px-6 py-3 text-center text-[11px] text-slate-400">
          © 2026 Krishnova LLP · AI-Powered Internship & Project Management System. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
