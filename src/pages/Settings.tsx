import { useAuth } from '../context/AuthContext'

export function Settings() {
  const { user } = useAuth()
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="card p-6">
        <h3 className="font-display font-semibold">Profile</h3>
        <div className="mt-4 grid gap-3 text-sm">
          <label className="text-xs text-slate-500">
            Name
            <input defaultValue={user?.name} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>
          <label className="text-xs text-slate-500">
            Email
            <input defaultValue={user?.email} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>
          <label className="text-xs text-slate-500">
            Title
            <input defaultValue={user?.title} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </label>
          <button className="rounded-xl bg-violet-500 py-2 text-sm font-semibold text-white">Save changes</button>
        </div>
      </div>
      <div className="card p-6">
        <h3 className="font-display font-semibold">Organization</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li className="flex justify-between"><span>Tenant</span><span className="font-semibold">Krishnova LLP</span></li>
          <li className="flex justify-between"><span>Region</span><span className="font-semibold">ap-south-1</span></li>
          <li className="flex justify-between"><span>SSO</span><span className="font-semibold">OAuth2 ready</span></li>
          <li className="flex justify-between"><span>MFA</span><span className="font-semibold">Phase 3</span></li>
        </ul>
      </div>
    </div>
  )
}
