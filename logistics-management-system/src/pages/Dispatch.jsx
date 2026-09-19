import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Map,
  MapPin,
  MoreHorizontal,
  Navigation,
  Package,
  Truck,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const dispatches = [
  ["DSP-2048", "Kochi Hub", "Bangalore", "Arun Kumar", "KL 07 AB 2451", 12, "In Progress", "2h 15m", 68],
  ["DSP-2047", "Alappuzha", "Chennai", "Rahul S", "KL 04 CD 7821", 8, "Ready", "4h 40m", 0],
  ["DSP-2046", "Trivandrum", "Calicut", "Vishnu K", "KL 01 EF 4567", 15, "Delayed", "5h 05m", 42],
  ["DSP-2045", "Kochi Hub", "Coimbatore", "Anil P", "KL 08 GH 9234", 10, "In Progress", "1h 35m", 74],
  ["DSP-2044", "Alappuzha", "Kottayam", "Suresh M", "KL 05 JK 6123", 6, "Ready", "1h 10m", 0],
  ["DSP-2043", "Thrissur", "Kozhikode", "Manu R", "KL 07 XY 3412", 9, "Completed", "Completed", 100],
];

const statusStyles = {
  "In Progress": "border-blue-100 bg-blue-50 text-blue-700",
  Ready: "border-emerald-100 bg-emerald-50 text-emerald-700",
  Delayed: "border-orange-100 bg-orange-50 text-orange-700",
  Completed: "border-gray-200 bg-gray-50 text-gray-600",
};

function StatCard({ label, value, description, icon: Icon, iconClass, trend }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">{label}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">{value}</h2>
        </div>
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}><Icon size={17} /></div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {trend && <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600"><ArrowUpRight size={11} />{trend}</span>}
        <span className="text-[10px] text-gray-400">{description}</span>
      </div>
    </div>
  );
}

function DispatchCard({ dispatch }) {
  const [id, origin, destination, driver, vehicle, orders, status, eta, progress] = dispatch;
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[11px] font-semibold text-gray-900">{id}</p>
          <span className={`rounded-md border px-2 py-1 text-[10px] font-medium ${statusStyles[status]}`}>{status}</span>
        </div>
        <MoreHorizontal size={16} className="text-gray-400" />
      </div>
      <div className="mt-4 rounded-lg bg-gray-50 p-3">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div><p className="text-[8px] font-semibold uppercase text-gray-400">From</p><p className="mt-1 truncate text-[10px] font-semibold text-gray-800">{origin}</p></div>
          <MapPin size={14} className="text-gray-400" />
          <div className="text-right"><p className="text-[8px] font-semibold uppercase text-gray-400">To</p><p className="mt-1 truncate text-[10px] font-semibold text-gray-800">{destination}</p></div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 divide-x divide-gray-100">
        <div className="pr-3"><p className="flex items-center gap-1.5 text-[9px] text-gray-400"><UserRound size={12} /> Driver</p><p className="mt-1 truncate text-[10px] font-medium text-gray-800">{driver}</p></div>
        <div className="pl-3"><p className="flex items-center gap-1.5 text-[9px] text-gray-400"><Truck size={12} /> Vehicle</p><p className="mt-1 truncate text-[10px] font-medium text-gray-800">{vehicle}</p></div>
      </div>
      <div className="mt-4 grid grid-cols-2 border-y border-gray-100 py-3">
        <div><p className="text-[9px] text-gray-400">Orders</p><p className="mt-1 text-[12px] font-semibold text-gray-800">{orders}</p></div>
        <div><p className="text-[9px] text-gray-400">ETA</p><p className="mt-1 text-[12px] font-semibold text-gray-800">{eta}</p></div>
      </div>
      <div className="mt-3"><div className="flex justify-between text-[9px] text-gray-400"><span className="flex items-center gap-1.5"><Navigation size={10} /> Route progress</span><span>{progress}%</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-100"><div className={`h-full rounded-full ${status === "Delayed" ? "bg-orange-500" : status === "Completed" ? "bg-gray-400" : status === "Ready" ? "bg-emerald-500" : "bg-blue-500"}`} style={{ width: `${progress}%` }} /></div></div>
    </article>
  );
}

export default function Dispatch() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header title="Dispatch" subtitle="Manage routes and delivery assignments" searchPlaceholder="Search dispatches..." />
      <main className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-[11px] font-medium text-gray-400">OPERATIONS</p><h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">Dispatch center</h1><p className="mt-1 text-[11px] text-gray-400">Coordinate routes, drivers and delivery assignments.</p></div>
          <button type="button" onClick={() => navigate("/dispatch/create")} className="flex items-center gap-2 rounded-lg bg-gray-900 px-3.5 py-2.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md"><Navigation size={14} />Create dispatch</button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Active dispatches" value="18" description="currently on route" icon={Navigation} iconClass="bg-blue-50 text-blue-600" trend="+8.4%" />
          <StatCard label="Ready" value="7" description="awaiting departure" icon={CheckCircle2} iconClass="bg-emerald-50 text-emerald-600" />
          <StatCard label="Orders assigned" value="142" description="across active routes" icon={Package} iconClass="bg-gray-100 text-gray-700" />
          <StatCard label="Exceptions" value="3" description="need attention" icon={CircleAlert} iconClass="bg-orange-50 text-orange-600" />
        </div>
        <section className="mt-5 rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-5"><div><h3 className="text-sm font-semibold text-gray-900">All dispatches</h3><p className="mt-0.5 text-[11px] text-gray-400">Current routes, assignments and delivery progress</p></div><button type="button" className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-[10px] font-medium text-gray-600 hover:bg-gray-50">View map <Map size={12} /></button></div>
          <div className="grid grid-cols-1 gap-3 p-3 sm:p-4 lg:grid-cols-2 xl:grid-cols-3">{dispatches.map((dispatch) => <DispatchCard key={dispatch[0]} dispatch={dispatch} />)}</div>
        </section>
        <section className="mt-5 rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-5"><div><h3 className="text-sm font-semibold text-gray-900">Route activity</h3><p className="mt-0.5 text-[11px] text-gray-400">Active dispatch progress</p></div><Navigation size={16} className="text-gray-400" /></div>
          <div className="grid gap-5 p-4 sm:grid-cols-2 sm:p-5">{dispatches.slice(0, 5).map((dispatch) => <div key={dispatch[0]}><div className="flex justify-between gap-3"><p className="text-[10px] font-medium text-gray-600">{dispatch[1]} → {dispatch[2]}</p><p className="text-[9px] text-gray-400">{dispatch[5]} orders</p></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-blue-500" style={{ width: `${dispatch[8]}%` }} /></div></div>)}</div>
        </section>
      </main>
    </div>
  );
}
