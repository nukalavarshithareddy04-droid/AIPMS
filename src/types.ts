export type Role = 'Admin' | 'Mentor' | 'Intern' | 'HR' | 'Executive' | 'AI'

export type ProjectStatus = 'Not Started' | 'In Progress' | 'On Hold' | 'Completed' | 'At Risk'
export type TaskStatus = 'Todo' | 'In Progress' | 'In Review' | 'Done'
export type Priority = 'Low' | 'Medium' | 'High' | 'Critical'
export type AttendanceStatus = 'Present' | 'Absent' | 'Late' | 'Excused'

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: Role
  title: string
  avatar: string
  team?: string
  department?: string
}

export interface Project {
  id: string
  title: string
  description: string
  status: ProjectStatus
  progress: number
  manager: string
  team: string
  start: string
  end: string
  budgetUsed: number
  budget: number
  members: string[]
}

export interface Task {
  id: string
  title: string
  project: string
  assignee: string
  priority: Priority
  status: TaskStatus
  due: string
}

export interface Team {
  id: string
  name: string
  project: string
  members: string[]
  progress: number
}

export interface Standup {
  id: string
  user: string
  team: string
  time: string
  yesterday: string
  today: string
  blockers: string
  sentiment: number
}

export interface NotificationItem {
  id: string
  title: string
  body: string
  time: string
  unread: boolean
  type: 'task' | 'ai' | 'attendance' | 'system' | 'alert'
}

export interface LearningModule {
  id: string
  name: string
  category: string
  level: string
  duration: string
  progress: number
}

export interface Certificate {
  id: string
  intern: string
  title: string
  issueDate: string
  code: string
}

export interface LeaveRequest {
  id: string
  employee: string
  type: string
  from: string
  to: string
  status: 'Pending' | 'Approved' | 'Rejected'
}

export interface Candidate {
  id: string
  name: string
  role: string
  score: number
  skills: string[]
  status: string
}
