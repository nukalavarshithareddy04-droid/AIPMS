import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { AppShell } from './components/layout/AppShell'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RoleDashboard } from './pages/dashboards/RoleDashboard'
import { Projects } from './pages/Projects'
import { Tasks } from './pages/Tasks'
import { Attendance } from './pages/Attendance'
import { Standup } from './pages/Standup'
import { AIInsights } from './pages/AIInsights'
import { AIMentor } from './pages/AIMentor'
import { UsersPage } from './pages/UsersPage'
import { Teams } from './pages/Teams'
import { Documents } from './pages/Documents'
import { Reports } from './pages/Reports'
import { Notifications } from './pages/Notifications'
import { Certificates } from './pages/Certificates'
import { Learning } from './pages/Learning'
import { Chat } from './pages/Chat'
import { AuditLogs } from './pages/AuditLogs'
import { Settings } from './pages/Settings'
import { CalendarPage } from './pages/CalendarPage'
import { Leaves } from './pages/Leaves'
import { Performance } from './pages/Performance'
import { Recruitment } from './pages/Recruitment'
import { Risks } from './pages/Risks'
import { ResumeAnalyzer } from './pages/ResumeAnalyzer'
import { SkillGap } from './pages/SkillGap'
import { InterviewPrep } from './pages/InterviewPrep'
import type { ReactNode } from 'react'

function Guard({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        element={
          <Guard>
            <AppShell />
          </Guard>
        }
      >
        <Route path="/app" element={<RoleDashboard />} />
        <Route path="/app/users" element={<UsersPage />} />
        <Route path="/app/interns" element={<UsersPage internOnly />} />
        <Route path="/app/projects" element={<Projects />} />
        <Route path="/app/teams" element={<Teams />} />
        <Route path="/app/tasks" element={<Tasks />} />
        <Route path="/app/attendance" element={<Attendance />} />
        <Route path="/app/standup" element={<Standup />} />
        <Route path="/app/ai" element={<AIInsights />} />
        <Route path="/app/mentor" element={<AIMentor />} />
        <Route path="/app/documents" element={<Documents />} />
        <Route path="/app/reports" element={<Reports />} />
        <Route path="/app/notifications" element={<Notifications />} />
        <Route path="/app/certificates" element={<Certificates />} />
        <Route path="/app/learning" element={<Learning />} />
        <Route path="/app/chat" element={<Chat />} />
        <Route path="/app/audit" element={<AuditLogs />} />
        <Route path="/app/settings" element={<Settings />} />
        <Route path="/app/calendar" element={<CalendarPage />} />
        <Route path="/app/leaves" element={<Leaves />} />
        <Route path="/app/performance" element={<Performance />} />
        <Route path="/app/recruitment" element={<Recruitment />} />
        <Route path="/app/risks" element={<Risks />} />
        <Route path="/app/resume" element={<ResumeAnalyzer />} />
        <Route path="/app/skills" element={<SkillGap />} />
        <Route path="/app/interview" element={<InterviewPrep />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
