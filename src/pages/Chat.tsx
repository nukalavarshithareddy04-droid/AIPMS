import { useState } from 'react'
import { people } from '../data/mock'

export function Chat() {
  const [active, setActive] = useState(people[0].name)
  const [text, setText] = useState('')
  const [threads, setThreads] = useState<Record<string, { from: string; text: string }[]>>({
    'John Doe': [
      { from: 'John Doe', text: 'Pushed the NLP pipeline PR.' },
      { from: 'You', text: 'Nice — I will review after stand-up.' },
    ],
  })

  const msgs = threads[active] ?? [{ from: active, text: 'Hey! Ready for pairing on the API contract?' }]

  return (
    <div className="card grid h-[70vh] overflow-hidden md:grid-cols-[240px_1fr]">
      <aside className="border-r">
        {people.map((p) => (
          <button
            key={p.name}
            onClick={() => setActive(p.name)}
            className={`flex w-full items-center gap-2 px-4 py-3 text-left text-sm ${active === p.name ? 'bg-violet-50' : ''}`}
          >
            <img src={p.avatar} className="h-8 w-8 rounded-full" />
            <span>{p.name}</span>
          </button>
        ))}
      </aside>
      <div className="flex flex-col">
        <div className="flex-1 space-y-2 overflow-y-auto p-4">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'You' ? 'justify-end' : 'justify-start'}`}>
              <span className={`rounded-2xl px-3 py-2 text-sm ${m.from === 'You' ? 'bg-violet-500 text-white' : 'bg-slate-100'}`}>
                {m.text}
              </span>
            </div>
          ))}
        </div>
        <form
          className="flex gap-2 border-t p-3"
          onSubmit={(e) => {
            e.preventDefault()
            if (!text.trim()) return
            setThreads((t) => ({ ...t, [active]: [...(t[active] ?? msgs), { from: 'You', text }] }))
            setText('')
          }}
        >
          <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 rounded-xl border px-3 py-2 text-sm" placeholder={`Message ${active}`} />
          <button className="rounded-xl bg-violet-500 px-4 text-sm font-semibold text-white">Send</button>
        </form>
      </div>
    </div>
  )
}
