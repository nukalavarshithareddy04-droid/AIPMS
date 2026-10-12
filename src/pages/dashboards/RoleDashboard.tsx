import { useAuth } from '../../context/AuthContext'
import { AdminDashboard } from './AdminDashboard'
import { MentorDashboard } from './MentorDashboard'
import { InternDashboard } from './InternDashboard'
import { HRDashboard } from './HRDashboard'
import { ExecutiveDashboard } from './ExecutiveDashboard'
import { AIDashboard } from './AIDashboard'

export function RoleDashboard() {
  const { user } = useAuth()
  switch (user?.role) {
    case 'Admin':
      return <AdminDashboard />
    case 'Mentor':
      return <MentorDashboard />
    case 'HR':
      return <HRDashboard />
    case 'Executive':
      return <ExecutiveDashboard />
    case 'AI':
      return <AIDashboard />
    default:
      return <InternDashboard />
  }
}
