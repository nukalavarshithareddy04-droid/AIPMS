import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Fingerprint,
  Github,
  GraduationCap,
  Kanban,
  LineChart,
  Radar,
  Shield,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'
import { Logo } from '../components/ui/Logo'
import { teamMembers } from '../data/mock'
import { asset } from '../lib/utils'

const agents = [
  { icon: Bot, name: 'AI Mentor', desc: '24×7 guidance, stand-up analysis, and career coaching.' },
  { icon: Workflow, name: 'Project Manager', desc: 'Task assignment, deadline prediction, workload balance.' },
  { icon: CalendarCheck, name: 'HR & Attendance', desc: 'Check-in, geo-fence, leave, and hours analytics.' },
  { icon: Users, name: 'Recruitment', desc: 'Resume scoring, skill extraction, intern matching.' },
  { icon: GraduationCap, name: 'Learning', desc: 'Skill-gap paths, courses, and certifications.' },
  { icon: LineChart, name: 'Reporting', desc: 'Daily / weekly / executive packs on autopilot.' },
]

const features = [
  { icon: Kanban, title: 'Projects & Kanban', text: 'Milestones, sprint boards, priorities from Critical to Low.' },
  { icon: Fingerprint, title: 'Smart Attendance', text: 'Clock-in with IP + geo, QR / biometric-ready.' },
  { icon: Sparkles, title: 'Stand-up NLP', text: 'Sentiment, blockers, and mentor alerts in one submit.' },
  { icon: Radar, title: 'Risk Prediction', text: 'Catch delays, absenteeism, and bottlenecks early.' },
  { icon: Brain, title: 'RAG Knowledge', text: 'Answers grounded in your SOPs, repos, and docs.' },
  { icon: Shield, title: 'RBAC + JWT', text: 'Admin, Mentor, Intern, HR, Executive — locked down.' },
]

const roles = [
  { role: 'Intern', color: 'from-emerald-400 to-cyan-400', points: ['Tasks & stand-ups', 'Clock-in / clock-out', 'AI Mentor chat', 'Certificates'] },
  { role: 'Mentor', color: 'from-sky-400 to-violet-400', points: ['Team health', 'Review stand-ups', 'Assign work', 'AI digests'] },
  { role: 'Admin', color: 'from-violet-400 to-fuchsia-400', points: ['Users & roles', 'Org dashboards', 'Audit logs', 'Certificates'] },
  { role: 'HR', color: 'from-pink-400 to-orange-400', points: ['Leaves', 'Recruitment', 'Attendance %', 'Onboarding'] },
]

export function Landing() {
  return (
    <div className="mesh min-h-screen text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo light />
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#agents" className="hover:text-white">AI Agents</a>
          <a href="#roles" className="hover:text-white">Roles</a>
          <a href="#team" className="hover:text-white">Team</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-semibold text-white/80 hover:text-white">
            Sign in
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-violet-100"
          >
            Launch app
          </Link>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:42px_42px] opacity-40" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-violet-200">
            <Sparkles size={13} /> Krishnova LLP · Technology Division
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Internship ops.
            <span className="block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Supercharged by AI.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            AIPMS unifies projects, attendance, stand-ups, mentoring, recruitment, and certificates —
            then layers multi-agent intelligence so mentors stop chasing spreadsheets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold shadow-glow hover:bg-violet-400"
            >
              Enter the command center <ArrowRight size={16} />
            </Link>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
            >
              See the architecture
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              ['70–80%', 'less admin work'],
              ['6 roles', 'one login'],
              ['8 agents', 'one orchestrator'],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold">{n}</p>
                <p className="text-xs text-white/50">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <img src={asset('images/hero-bg.jpg')} alt="" className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
              {[
                ['Phoenix', 'At risk · −10d'],
                ['Alpha Team', 'Productivity +15%'],
                ['Stand-ups', '96% submitted'],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl px-3 py-2.5">
                  <p className="text-[11px] text-white/50">{k}</p>
                  <p className="text-sm font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={asset('images/ai-orb.jpg')} alt="" className="floaty absolute -left-8 -top-8 hidden h-28 w-28 rounded-full border border-white/20 object-cover shadow-glow lg:block" />
        </motion.div>
      </section>

      <section id="product" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">The platform</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Everything from first clock-in to certificate.</h2>
          </div>
          <p className="max-w-md text-sm text-white/55">
            Phase 1 pilot to Phase 3 enterprise — React + TypeScript frontend, FastAPI, PostgreSQL, Redis, and LLM agents.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-3xl p-5">
              <f.icon className="mb-4 text-violet-300" size={22} />
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="agents" className="mx-auto max-w-7xl px-6 py-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Multi-agent architecture</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Not a chatbot. A crew.</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Supervisor → Planner → Project, HR, Mentor, and Reporting agents. LangGraph / CrewAI style orchestration,
                RAG over org knowledge, and predictive scoring on attendance, tasks, and code.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/75">
                {['Stand-up summaries with sentiment', 'Resume ranking for recruitment', 'Interview prep + skill gaps', 'QR-verified digital certificates'].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400" /> {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {agents.map((a) => (
                <div key={a.name} className="rounded-2xl border border-white/10 bg-ink-950/40 p-4">
                  <a.icon size={18} className="text-violet-300" />
                  <p className="mt-3 font-semibold">{a.name}</p>
                  <p className="mt-1 text-xs text-white/55">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="roles" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold">One product. Six command views.</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Demo every persona instantly — Admin, Mentor, Intern, HR, Executive, AI Engine.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <div key={r.role} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${r.color}`} />
              <h3 className="font-display text-xl font-semibold">{r.role}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/60">
                {r.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid overflow-hidden rounded-[32px] border border-white/10 lg:grid-cols-2">
          <img src={asset('images/workspace.jpg')} alt="" className="h-72 w-full object-cover lg:h-full" />
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">Business value</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Mentors mentor. AI does the chasing.</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[
                ['Faster tracking', 'Live dashboards + AI summaries'],
                ['Better outcomes', 'Personalized learning + scoring'],
                ['Data decisions', 'Risk, attendance, productivity'],
                ['Enterprise ready', 'AWS, K8s, SSO, audit logs'],
              ].map(([h, b]) => (
                <div key={h}>
                  <p className="font-semibold">{h}</p>
                  <p className="text-white/50">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Built by</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Krishnova Technology Division</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {teamMembers.map((n) => (
            <span key={n} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">
              {n}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <div className="rounded-[32px] border border-violet-400/30 bg-gradient-to-br from-violet-600/30 to-cyan-500/10 px-8 py-14">
          <h2 className="font-display text-4xl font-bold">Ready to run internships like a product org?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Jump in with a demo role. No backend required — the frontend is fully interactive with the spec’s workflows.
          </p>
          <Link
            to="/login"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-ink-900"
          >
            Open AIPMS <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        AIPMS · Krishnova LLP Technology Division · React + TypeScript · {new Date().getFullYear()}
        <span className="mx-2">·</span>
        <span className="inline-flex items-center gap-1">
          <Github size={12} /> Built from Documentation.Final
        </span>
      </footer>
    </div>
  )
}
