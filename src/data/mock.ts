import type {
  User,
  Project,
  Task,
  Team,
  Standup,
  NotificationItem,
  LearningModule,
  Certificate,
  LeaveRequest,
  Candidate,
} from '../types'

export const users: User[] = [
  {
    id: 'u1',
    name: 'Aarav Mehta',
    email: 'admin@aipms.io',
    password: 'admin123',
    role: 'Admin',
    title: 'Platform Administrator',
    avatar: 'https://i.pravatar.cc/150?img=12',
    department: 'Operations',
  },
  {
    id: 'u2',
    name: 'Ananya Rao',
    email: 'mentor@aipms.io',
    password: 'mentor123',
    role: 'Mentor',
    title: 'Senior Mentor',
    avatar: 'https://i.pravatar.cc/150?img=47',
    team: 'Alpha Team',
    department: 'Engineering',
  },
  {
    id: 'u3',
    name: 'Sarah Intern',
    email: 'intern@aipms.io',
    password: 'intern123',
    role: 'Intern',
    title: 'Software Intern',
    avatar: 'https://i.pravatar.cc/150?img=32',
    team: 'Alpha Team',
    department: 'AI Development',
  },
  {
    id: 'u4',
    name: 'Kavya Iyer',
    email: 'hr@aipms.io',
    password: 'hr123',
    role: 'HR',
    title: 'HR Manager',
    avatar: 'https://i.pravatar.cc/150?img=49',
    department: 'People Ops',
  },
  {
    id: 'u5',
    name: 'John Executive',
    email: 'exec@aipms.io',
    password: 'exec123',
    role: 'Executive',
    title: 'Chief Executive Officer',
    avatar: 'https://i.pravatar.cc/150?img=15',
    department: 'Leadership',
  },
  {
    id: 'u6',
    name: 'AI Engine',
    email: 'ai@aipms.io',
    password: 'ai123',
    role: 'AI',
    title: 'AI Administrator',
    avatar: '',
    department: 'Intelligence',
  },
]

export const people = [
  { name: 'John Doe', team: 'Alpha Team', role: 'Intern', dept: 'AI Development', mentor: 'Ananya Rao', progress: 75, avatar: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Jane Smith', team: 'Beta Team', role: 'Intern', dept: 'Web Development', mentor: 'Ananya Rao', progress: 60, avatar: 'https://i.pravatar.cc/150?img=45' },
  { name: 'Mike Johnson', team: 'Gamma Team', role: 'Intern', dept: 'Data Analytics', mentor: 'Ananya Rao', progress: 80, avatar: 'https://i.pravatar.cc/150?img=13' },
  { name: 'Emily Davis', team: 'Alpha Team', role: 'Intern', dept: 'AI Development', mentor: 'Ananya Rao', progress: 68, avatar: 'https://i.pravatar.cc/150?img=20' },
  { name: 'Sarah Wilson', team: 'Alpha Team', role: 'Intern', dept: 'AI Development', mentor: 'John Doe', progress: 75, avatar: 'https://i.pravatar.cc/150?img=32' },
  { name: 'Michael Brown', team: 'Beta Team', role: 'Intern', dept: 'Web Development', mentor: 'Jane Smith', progress: 60, avatar: 'https://i.pravatar.cc/150?img=14' },
  { name: 'Priya Sharma', team: 'Gamma Team', role: 'Intern', dept: 'Data Analytics', mentor: 'Mike Johnson', progress: 80, avatar: 'https://i.pravatar.cc/150?img=36' },
  { name: 'Rahul Verma', team: 'Delta Team', role: 'Intern', dept: 'Cloud Computing', mentor: 'Emily Davis', progress: 40, avatar: 'https://i.pravatar.cc/150?img=18' },
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'AI Chatbot Platform',
    description: 'Multi-agent mentor chatbot with RAG knowledge retrieval and stand-up summarization.',
    status: 'In Progress',
    progress: 85,
    manager: 'Sarah Johnson',
    team: 'Alpha Team',
    start: '2026-02-01',
    end: '2026-08-30',
    budgetUsed: 450000,
    budget: 520000,
    members: ['Sarah Intern', 'John Doe', 'Emily Davis'],
  },
  {
    id: 'p2',
    title: 'Mobile App Revamp',
    description: 'Native-feel internship companion for attendance, stand-ups, and push alerts.',
    status: 'In Progress',
    progress: 60,
    manager: 'Mike Smith',
    team: 'Beta Team',
    start: '2026-03-10',
    end: '2026-09-15',
    budgetUsed: 320000,
    budget: 500000,
    members: ['Jane Smith', 'Michael Brown'],
  },
  {
    id: 'p3',
    title: 'Data Analytics System',
    description: 'Productivity scoring, risk prediction, and executive dashboards.',
    status: 'At Risk',
    progress: 40,
    manager: 'Emily Davis',
    team: 'Gamma Team',
    start: '2026-04-01',
    end: '2026-10-01',
    budgetUsed: 180000,
    budget: 450000,
    members: ['Mike Johnson', 'Priya Sharma'],
  },
  {
    id: 'p4',
    title: 'Cloud Migration',
    description: 'AWS ECS, RDS PostgreSQL, ElastiCache Redis, and S3 document store.',
    status: 'In Progress',
    progress: 75,
    manager: 'David Brown',
    team: 'Delta Team',
    start: '2026-01-15',
    end: '2026-07-30',
    budgetUsed: 260000,
    budget: 350000,
    members: ['Rahul Verma'],
  },
  {
    id: 'p5',
    title: 'Project Phoenix',
    description: 'Enterprise onboarding + certificate verification with QR codes.',
    status: 'At Risk',
    progress: 25,
    manager: 'Jessica Lee',
    team: 'Epsilon Team',
    start: '2026-05-01',
    end: '2026-11-20',
    budgetUsed: 150000,
    budget: 300000,
    members: ['Sarah Intern'],
  },
  {
    id: 'p6',
    title: 'Website Revamp',
    description: 'Public career portal, internship listings, and recruiter workspace.',
    status: 'Completed',
    progress: 100,
    manager: 'Ananya Rao',
    team: 'Beta Team',
    start: '2025-11-01',
    end: '2026-04-20',
    budgetUsed: 210000,
    budget: 220000,
    members: ['Jane Smith'],
  },
]

export const tasks: Task[] = [
  { id: 't1', title: 'Design Login Page', project: 'AI Chatbot Platform', assignee: 'Sarah Intern', priority: 'High', status: 'In Progress', due: '2026-05-10' },
  { id: 't2', title: 'Integrate API', project: 'AI Chatbot Platform', assignee: 'Sarah Intern', priority: 'Medium', status: 'Todo', due: '2026-05-12' },
  { id: 't3', title: 'Database Schema', project: 'Mobile App Revamp', assignee: 'Sarah Intern', priority: 'High', status: 'In Progress', due: '2026-05-15' },
  { id: 't4', title: 'Test Cases', project: 'Mobile App Revamp', assignee: 'Sarah Intern', priority: 'Low', status: 'Todo', due: '2026-05-18' },
  { id: 't5', title: 'UI Bug Fixes', project: 'Website Revamp', assignee: 'Sarah Intern', priority: 'Medium', status: 'Todo', due: '2026-05-20' },
  { id: 't6', title: 'Stand-up NLP pipeline', project: 'AI Chatbot Platform', assignee: 'John Doe', priority: 'Critical', status: 'In Review', due: '2026-05-11' },
  { id: 't7', title: 'Attendance geo-fence', project: 'Mobile App Revamp', assignee: 'Jane Smith', priority: 'High', status: 'In Progress', due: '2026-05-16' },
  { id: 't8', title: 'Risk model v2', project: 'Data Analytics System', assignee: 'Mike Johnson', priority: 'Critical', status: 'Todo', due: '2026-05-20' },
  { id: 't9', title: 'Certificate QR verify', project: 'Project Phoenix', assignee: 'Emily Davis', priority: 'High', status: 'Todo', due: '2026-05-22' },
  { id: 't10', title: 'ECS rollout plan', project: 'Cloud Migration', assignee: 'Rahul Verma', priority: 'Medium', status: 'In Review', due: '2026-05-14' },
  { id: 't11', title: 'Mentor digest emails', project: 'AI Chatbot Platform', assignee: 'John Doe', priority: 'Low', status: 'Done', due: '2026-05-08' },
  { id: 't12', title: 'Leave policy upload', project: 'Website Revamp', assignee: 'Kavya Iyer', priority: 'Low', status: 'Done', due: '2026-05-06' },
]

export const teams: Team[] = [
  { id: 'tm1', name: 'Alpha Team', project: 'AI Chatbot Platform', members: ['Sarah Intern', 'John Doe', 'Emily Davis'], progress: 75 },
  { id: 'tm2', name: 'Beta Team', project: 'Mobile App Revamp', members: ['Jane Smith', 'Michael Brown'], progress: 60 },
  { id: 'tm3', name: 'Gamma Team', project: 'Data Analytics System', members: ['Mike Johnson', 'Priya Sharma'], progress: 90 },
  { id: 'tm4', name: 'Delta Team', project: 'Cloud Migration', members: ['Rahul Verma'], progress: 40 },
  { id: 'tm5', name: 'Epsilon Team', project: 'Project Phoenix', members: ['Jessica Lee'], progress: 25 },
]

export const standups: Standup[] = [
  {
    id: 's1',
    user: 'John Doe',
    team: 'Alpha Team',
    time: '09:15 AM',
    yesterday: 'Completed the login page UI and fixed minor bugs.',
    today: 'Working on API integration and user authentication.',
    blockers: 'Waiting for DB',
    sentiment: 0.42,
  },
  {
    id: 's2',
    user: 'Jane Smith',
    team: 'Beta Team',
    time: '09:20 AM',
    yesterday: 'Developed login flow.',
    today: 'Profile module.',
    blockers: 'None',
    sentiment: 0.71,
  },
  {
    id: 's3',
    user: 'Mike Johnson',
    team: 'Gamma Team',
    time: '09:30 AM',
    yesterday: 'Data cleaning.',
    today: 'Model training.',
    blockers: 'Need more data',
    sentiment: -0.18,
  },
  {
    id: 's4',
    user: 'Sarah Intern',
    team: 'Alpha Team',
    time: '09:05 AM',
    yesterday: 'Completed the login page UI and fixed minor bugs.',
    today: 'Working on API integration and user authentication.',
    blockers: 'Waiting for API endpoint from backend team.',
    sentiment: 0.21,
  },
]

export const notifications: NotificationItem[] = [
  { id: 'n1', title: 'Task assigned', body: 'Task “Integrate API” has been assigned to you.', time: '10:30 AM', unread: true, type: 'task' },
  { id: 'n2', title: 'Stand-up saved', body: 'Daily standup submitted successfully.', time: '09:15 AM', unread: true, type: 'attendance' },
  { id: 'n3', title: 'New document', body: 'New document “SRS_v2.docx” uploaded in AI Chatbot Platform.', time: 'Yesterday', unread: false, type: 'system' },
  { id: 'n4', title: 'Risk alert', body: 'Project Phoenix is 10 days behind schedule.', time: '10m ago', unread: true, type: 'alert' },
  { id: 'n5', title: 'AI recommendation', body: 'Reassign 2 developers from Project X to Project Phoenix.', time: '4h ago', unread: true, type: 'ai' },
  { id: 'n6', title: 'Attendance reminder', body: 'Daily standup reminder sent to all teams.', time: 'Today, 09:00 AM', unread: false, type: 'attendance' },
]

export const learning: LearningModule[] = [
  { id: 'l1', name: 'Python Basics', category: 'Backend', level: 'Beginner', duration: '8h', progress: 75 },
  { id: 'l2', name: 'React.js Fundamentals', category: 'Frontend', level: 'Intermediate', duration: '12h', progress: 50 },
  { id: 'l3', name: 'Machine Learning Intro', category: 'AI', level: 'Beginner', duration: '10h', progress: 30 },
  { id: 'l4', name: 'FastAPI + JWT', category: 'Backend', level: 'Intermediate', duration: '6h', progress: 20 },
  { id: 'l5', name: 'System Design for Interns', category: 'Architecture', level: 'Advanced', duration: '9h', progress: 10 },
  { id: 'l6', name: 'Interview Communication', category: 'Career', level: 'Beginner', duration: '4h', progress: 0 },
]

export const certificates: Certificate[] = [
  { id: 'c1', intern: 'Sarah Intern', title: 'Internship Completion — AIPMS Pilot', issueDate: '2026-04-12', code: 'KRISH-AIPMS-8821' },
  { id: 'c2', intern: 'Sarah Intern', title: 'AI Mentor Mastery', issueDate: '2026-03-02', code: 'KRISH-AIM-4410' },
  { id: 'c3', intern: 'Michael Brown', title: 'Internship Completion — Web Track', issueDate: '2026-05-01', code: 'KRISH-AIPMS-9012' },
]

export const leaves: LeaveRequest[] = [
  { id: 'lv1', employee: 'John Doe', type: 'Casual Leave', from: '10 May 2026', to: '11 May 2026', status: 'Pending' },
  { id: 'lv2', employee: 'Jane Smith', type: 'Sick Leave', from: '09 May 2026', to: '09 May 2026', status: 'Approved' },
  { id: 'lv3', employee: 'Mike Johnson', type: 'Casual Leave', from: '12 May 2026', to: '12 May 2026', status: 'Pending' },
  { id: 'lv4', employee: 'Emily Davis', type: 'Earned Leave', from: '15 May 2026', to: '18 May 2026', status: 'Rejected' },
]

export const candidates: Candidate[] = [
  { id: 'cd1', name: 'Ishaan Kapoor', role: 'Frontend Intern', score: 92, skills: ['React', 'TypeScript', 'Tailwind'], status: 'Interview' },
  { id: 'cd2', name: 'Meera Nair', role: 'Data Intern', score: 88, skills: ['Python', 'SQL', 'Pandas'], status: 'Shortlisted' },
  { id: 'cd3', name: 'Arjun Reddy', role: 'Backend Intern', score: 81, skills: ['FastAPI', 'PostgreSQL', 'Docker'], status: 'Screening' },
  { id: 'cd4', name: 'Diya Shah', role: 'ML Intern', score: 95, skills: ['PyTorch', 'NLP', 'RAG'], status: 'Offer' },
]

export const documents = [
  { name: 'HR Policy.pdf', by: 'HR Manager', date: '05 May 2025', type: 'PDF' },
  { name: 'Employee Handbook.pdf', by: 'HR Manager', date: '01 May 2025', type: 'PDF' },
  { name: 'Leave Policy.pdf', by: 'HR Manager', date: '28 Apr 2025', type: 'PDF' },
  { name: 'Intern Guidelines.pdf', by: 'HR Manager', date: '25 Apr 2025', type: 'PDF' },
  { name: 'SRS_v2.docx', by: 'Ananya Rao', date: '09:15 AM', type: 'DOCX' },
]

export const auditLogs = [
  { user: 'Aarav Mehta', activity: 'Created project Website Revamp', ip: '103.21.244.12', time: 'Today, 09:15 AM' },
  { user: 'Sarah Intern', activity: 'Submitted daily stand-up', ip: '49.37.18.201', time: 'Today, 09:05 AM' },
  { user: 'Ananya Rao', activity: 'Approved leave for Jane Smith', ip: '103.21.244.18', time: 'Yesterday' },
  { user: 'Kavya Iyer', activity: 'Issued certificate to Michael Brown', ip: '103.21.244.22', time: 'Yesterday' },
  { user: 'AI Engine', activity: 'Generated risk alert for Project Phoenix', ip: 'internal', time: '10m ago' },
]

export const weeklyTasks = [
  { day: 'Mon', value: 280 },
  { day: 'Tue', value: 370 },
  { day: 'Wed', value: 450 },
  { day: 'Thu', value: 400 },
  { day: 'Fri', value: 250 },
  { day: 'Sat', value: 160 },
  { day: 'Sun', value: 220 },
]

export const attendanceTrend = [
  { week: 'Week 1', present: 78, absent: 18 },
  { week: 'Week 2', present: 72, absent: 12 },
  { week: 'Week 3', present: 76, absent: 16 },
  { week: 'Week 4', present: 80, absent: 14 },
]

export const productivity = [
  { name: 'Alpha Team', value: 92 },
  { name: 'Beta Team', value: 78 },
  { name: 'Gamma Team', value: 85 },
  { name: 'Delta Team', value: 71 },
  { name: 'Epsilon Team', value: 88 },
]

export const execTrend = [
  { day: 'May 1', schedule: 88, cost: 82, quality: 90, resource: 70 },
  { day: 'May 6', schedule: 86, cost: 84, quality: 91, resource: 72 },
  { day: 'May 11', schedule: 90, cost: 83, quality: 92, resource: 74 },
  { day: 'May 16', schedule: 91, cost: 86, quality: 93, resource: 75 },
  { day: 'May 21', schedule: 89, cost: 87, quality: 93, resource: 76 },
  { day: 'May 26', schedule: 91, cost: 88, quality: 94, resource: 77 },
  { day: 'May 31', schedule: 92, cost: 88, quality: 94, resource: 78 },
]

export const aiTrend = [
  { day: 'Mon', insights: 56, risks: 28, recs: 14 },
  { day: 'Tue', insights: 58, risks: 30, recs: 15 },
  { day: 'Wed', insights: 70, risks: 36, recs: 18 },
  { day: 'Thu', insights: 78, risks: 38, recs: 20 },
  { day: 'Fri', insights: 86, risks: 42, recs: 22 },
  { day: 'Sat', insights: 90, risks: 46, recs: 24 },
  { day: 'Sun', insights: 94, risks: 48, recs: 26 },
]

export const teamMembers = [
  'N. Varshitha',
  'M. Akshitha',
  'R. Sankeerthana',
  'P. Gouthami',
  'P. Hemasri',
  'B. Vivekraj',
  'D. Dharani',
  'M. Pragnusha',
  'B. Varshitha',
  'J. Nandini',
  'N. Nanditha',
  'Nandini',
  'CH. Sravani',
  'P. Mamatha',
  'P. Vaishali',
  'CH. Asritha',
  'Shephali',
]
