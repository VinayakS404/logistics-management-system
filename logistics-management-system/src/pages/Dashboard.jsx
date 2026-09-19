import {
  Package,
  Truck,
  MapPin,
  ArrowUpRight,
  Navigation,
  CircleAlert,
  Clock3,
  ChevronRight,
  MoreHorizontal,
  CheckCircle2,
} from "lucide-react";

import Header from "../components/Header";
import { useLayout } from "../context/LayoutContext";

const shipments = [
  {
    id: "ORD-10482",
    customer: "Rahul Menon",
    destination: "Kochi, Kerala",
    status: "In Transit",
    eta: "12 min",
    agent: "AK",
    vehicle: "KL-07-AB-2841",
  },
  {
    id: "ORD-10481",
    customer: "Anjali Nair",
    destination: "Alappuzha, Kerala",
    status: "Out for Delivery",
    eta: "24 min",
    agent: "RS",
    vehicle: "KL-04-C-9281",
  },
  {
    id: "ORD-10480",
    customer: "Arjun Kumar",
    destination: "Kottayam, Kerala",
    status: "In Transit",
    eta: "31 min",
    agent: "MJ",
    vehicle: "KL-05-F-1920",
  },
  {
    id: "ORD-10479",
    customer: "Nikhil Thomas",
    destination: "Thrissur, Kerala",
    status: "Delivered",
    eta: "Completed",
    agent: "VN",
    vehicle: "KL-08-D-4412",
  },
  {
    id: "ORD-10478",
    customer: "Meera Joseph",
    destination: "Ernakulam, Kerala",
    status: "Delayed",
    eta: "48 min",
    agent: "AS",
    vehicle: "KL-01-H-7822",
  },
];

const exceptions = [
  {
    type: "Delayed",
    title: "ORD-10478",
    description: "Traffic congestion on NH 66",
    time: "8 min ago",
    icon: Clock3,
    tone: "amber",
  },
  {
    type: "Issue",
    title: "ORD-10465",
    description: "Delivery address needs verification",
    time: "21 min ago",
    icon: CircleAlert,
    tone: "red",
  },
  {
    type: "Resolved",
    title: "ORD-10461",
    description: "Driver reported vehicle issue",
    time: "43 min ago",
    icon: CheckCircle2,
    tone: "green",
  },
];

const agents = [
  {
    initials: "AK",
    name: "Arun Krishnan",
    status: "On Delivery",
    location: "Kochi",
    deliveries: 12,
  },
  {
    initials: "RS",
    name: "Riya Suresh",
    status: "On Delivery",
    location: "Alappuzha",
    deliveries: 9,
  },
  {
    initials: "MJ",
    name: "Manu Joseph",
    status: "Available",
    location: "Kottayam",
    deliveries: 14,
  },
  {
    initials: "VN",
    name: "Vishnu Nair",
    status: "On Break",
    location: "Thrissur",
    deliveries: 7,
  },
];

function StatusBadge({ status }) {
  const styles = {
    "In Transit": "border-blue-100 bg-blue-50 text-blue-700",
    "Out for Delivery": "border-violet-100 bg-violet-50 text-violet-700",
    Delivered: "border-emerald-100 bg-emerald-50 text-emerald-700",
    Delayed: "border-amber-100 bg-amber-50 text-amber-700",
  };

  const icons = {
    "In Transit": <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />,
    "Out for Delivery": <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />,
    Delivered: <CheckCircle2 size={11} />,
    Delayed: <Clock3 size={11} />,
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
        styles[status] || "border-slate-200 bg-slate-100 text-slate-600"
      }`}
    >
      {icons[status] || null}
      {status}
    </span>
  );
}

function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 className="text-[13px] font-semibold text-gray-900">{title}</h3>

        {subtitle && (
          <p className="mt-1 text-[10px] text-gray-400">{subtitle}</p>
        )}
      </div>

      {action && (
        <button
          type="button"
          className="flex items-center gap-1 text-[10px] font-semibold text-gray-500 transition hover:text-gray-900"
        >
          {action}
          <ChevronRight size={13} />
        </button>
      )}
    </div>
  );
}

export default function Dashboard() {
  const { onMenuClick } = useLayout();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      {/* Shared Header */}
      <Header
        title="Dashboard"
        subtitle="Overview · September 19, 2026"
        searchPlaceholder="Search orders..."
        onMenuClick={onMenuClick}
      />

      <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        {/* Page Heading */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.12em] text-gray-400">
              Operations
            </p>

            <h1 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Good afternoon, Vinayak
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Here's what's happening across your delivery network.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-3.5 py-2.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md"
          >
            <Navigation size={14} />
            Create Dispatch
          </button>
        </div>

        {/* KPI Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {/* Total Orders */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Package size={16} />
              </div>

              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <ArrowUpRight size={12} />
                12.5%
              </span>
            </div>

            <p className="text-[10px] font-medium text-gray-400">
              Total Orders
            </p>

            <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              1,284
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              vs. 1,142 last month
            </p>
          </div>

          {/* Active Deliveries */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Truck size={16} />
              </div>

              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <ArrowUpRight size={12} />
                8.2%
              </span>
            </div>

            <p className="text-[10px] font-medium text-gray-400">
              Active Deliveries
            </p>

            <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              342
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              Currently on the road
            </p>
          </div>

          {/* Delivered */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={16} />
              </div>

              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <ArrowUpRight size={12} />
                5.4%
              </span>
            </div>

            <p className="text-[10px] font-medium text-gray-400">
              Delivered Today
            </p>

            <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              876
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              92% on-time delivery
            </p>
          </div>

          {/* Exceptions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <CircleAlert size={16} />
              </div>

              <span className="text-[10px] font-semibold text-slate-400">
                Today
              </span>
            </div>

            <p className="text-[10px] font-medium text-gray-400">Exceptions</p>

            <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              18
            </p>

            <p className="mt-1 text-[9px] text-gray-400">3 require attention</p>
          </div>

          {/* Fleet */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Truck size={16} />
              </div>

              <span className="text-[10px] font-semibold text-slate-400">
                Fleet
              </span>
            </div>

            <p className="text-[10px] font-medium text-gray-400">
              Fleet Utilization
            </p>

            <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              84%
            </p>

            <p className="mt-1 text-[9px] text-gray-400">
              126 of 150 vehicles active
            </p>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          {/* Live Delivery Map */}
          <div className="xl:col-span-8">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    Live Delivery Network
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Real-time overview of active deliveries
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>

                  <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Delayed
                  </span>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-70 overflow-hidden bg-[#f3f5f6] sm:h-82.5">
                {/* Map grid */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute left-[15%] top-0 h-full w-px bg-gray-200" />
                  <div className="absolute left-[35%] top-0 h-full w-px bg-gray-200" />
                  <div className="absolute left-[55%] top-0 h-full w-px bg-gray-200" />
                  <div className="absolute left-[75%] top-0 h-full w-px bg-gray-200" />

                  <div className="absolute left-0 top-[20%] h-px w-full bg-gray-200" />
                  <div className="absolute left-0 top-[40%] h-px w-full bg-gray-200" />
                  <div className="absolute left-0 top-[60%] h-px w-full bg-gray-200" />
                  <div className="absolute left-0 top-[80%] h-px w-full bg-gray-200" />
                </div>

                {/* Roads */}
                <div className="absolute left-[10%] top-[58%] h-0.5 w-[80%] -rotate-12 bg-white shadow-sm" />
                <div className="absolute left-[25%] top-[15%] h-0.5 w-[65%] rotate-24 bg-white shadow-sm" />
                <div className="absolute left-[42%] top-[5%] h-[90%] w-0.5 rotate-18 bg-white shadow-sm" />

                {/* Route */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 800 330"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M100 250 C180 215, 190 120, 300 150 S430 250, 510 170 S650 80, 720 105"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 7"
                    className="text-blue-400"
                  />
                </svg>

                {/* Map pins */}
                <div className="absolute left-[12%] top-[70%]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-white shadow-md">
                    <Navigation size={12} />
                  </div>
                </div>

                <div className="absolute left-[36%] top-[42%]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white shadow-md">
                    <Truck size={12} />
                  </div>
                </div>

                <div className="absolute left-[62%] top-[51%]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-md">
                    <Truck size={12} />
                  </div>
                </div>

                <div className="absolute left-[82%] top-[28%]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-white shadow-md">
                    <Truck size={12} />
                  </div>
                </div>

                {/* Map labels */}
                <div className="absolute left-[7%] top-[76%] hidden rounded-md border border-gray-200 bg-white/90 px-2 py-1 shadow-sm sm:block">
                  <p className="text-[9px] font-semibold text-gray-700">
                    Kochi Hub
                  </p>
                </div>

                <div className="absolute left-[32%] top-[48%] hidden rounded-md border border-gray-200 bg-white/90 px-2 py-1 shadow-sm sm:block">
                  <p className="text-[9px] font-semibold text-gray-700">
                    Active · KL-07
                  </p>
                </div>

                <div className="absolute right-[6%] top-[34%] hidden rounded-md border border-gray-200 bg-white/90 px-2 py-1 shadow-sm sm:block">
                  <p className="text-[9px] font-semibold text-gray-700">
                    Delayed · KL-01
                  </p>
                </div>

                {/* Map info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-gray-200 bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur sm:left-4 sm:right-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-gray-500" />

                    <span className="text-[9px] font-medium text-gray-600">
                      Kerala Delivery Network
                    </span>
                  </div>

                  <span className="text-[9px] text-gray-400">342 active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exceptions */}
          <div className="xl:col-span-4">
            <div className="h-full rounded-xl border border-gray-200 bg-white p-5">
              <SectionHeader
                title="Exceptions"
                subtitle="Issues that need attention"
                action="View all"
              />

              <div className="space-y-3">
                {exceptions.map((item) => {
                  const Icon = item.icon;

                  const toneStyles = {
                    amber: "bg-amber-50 text-amber-600",
                    red: "bg-red-50 text-red-600",
                    green: "bg-emerald-50 text-emerald-600",
                  };

                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-lg border border-gray-100 p-3 transition hover:bg-gray-50"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          toneStyles[item.tone]
                        }`}
                      >
                        <Icon size={15} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[10px] font-semibold text-gray-800">
                            {item.title}
                          </p>

                          <span className="shrink-0 text-[9px] text-gray-400">
                            {item.time}
                          </span>
                        </div>

                        <p className="mt-1 text-[10px] text-gray-500">
                          {item.description}
                        </p>

                        <p className="mt-1 text-[9px] font-medium text-gray-400">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg border border-gray-200 py-2.5 text-[10px] font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
              >
                Review exceptions
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Orders + Driver Status */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-12">
          {/* Recent Orders */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white xl:col-span-8">
            <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-[13px] font-semibold text-gray-900">
                  Recent Orders
                </h3>

                <p className="mt-1 text-[10px] text-gray-400">
                  Latest activity across your network
                </p>
              </div>

              <button
                type="button"
                className="flex w-fit items-center gap-1 text-[10px] font-semibold text-gray-500 transition hover:text-gray-900"
              >
                View all
                <ChevronRight size={13} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-170">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/70">
                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Order
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Customer
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Destination
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Status
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      ETA
                    </th>

                    <th className="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {shipments.map((shipment) => (
                    <tr
                      key={shipment.id}
                      className="border-b border-gray-100 last:border-0 transition hover:bg-gray-50/70"
                    >
                      <td className="px-5 py-3.5">
                        <p className="text-[10px] font-semibold text-gray-800">
                          {shipment.id}
                        </p>

                        <p className="mt-0.5 text-[9px] text-gray-400">
                          {shipment.vehicle}
                        </p>
                      </td>

                      <td className="px-5 py-3.5">
                        <p className="text-[10px] font-medium text-gray-700">
                          {shipment.customer}
                        </p>
                      </td>

                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                          <MapPin size={11} />
                          {shipment.destination}
                        </div>
                      </td>

                      <td className="px-5 py-3.5">
                        <StatusBadge status={shipment.status} />
                      </td>

                      <td className="px-5 py-3.5">
                        <p className="text-[10px] font-medium text-gray-700">
                          {shipment.eta}
                        </p>
                      </td>

                      <td className="px-5 py-3.5 text-right">
                        <button
                          type="button"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                        >
                          <MoreHorizontal size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Agent Status */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 xl:col-span-4">
            <SectionHeader
              title="Driver Status"
              subtitle="Current delivery workforce"
              action="Manage"
            />

            <div className="space-y-3">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-3 transition hover:bg-gray-50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-600">
                    {agent.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold text-gray-800">
                      {agent.name}
                    </p>

                    <div className="mt-1 flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          agent.status === "Available"
                            ? "bg-emerald-500"
                            : agent.status === "On Break"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                      />

                      <span className="text-[9px] text-gray-400">
                        {agent.status}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] font-semibold text-gray-800">
                      {agent.deliveries}
                    </p>

                    <p className="text-[8px] text-gray-400">deliveries</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5">
          <SectionHeader
            title="Today's Performance"
            subtitle="Delivery operations overview"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* On-time */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400">
                  On-time Delivery
                </span>

                <span className="text-[10px] font-semibold text-emerald-600">
                  +3.2%
                </span>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-gray-900">92%</span>

                <span className="text-[9px] text-gray-400">target 90%</span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[92%] rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Success */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400">
                  Delivery Success
                </span>

                <span className="text-[10px] font-semibold text-emerald-600">
                  +1.8%
                </span>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-gray-900">
                  96.4%
                </span>

                <span className="text-[9px] text-gray-400">target 95%</span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[96%] rounded-full bg-blue-500" />
              </div>
            </div>

            {/* Avg delivery */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400">
                  Avg. Delivery Time
                </span>

                <span className="text-[10px] font-semibold text-emerald-600">
                  -6.4%
                </span>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-gray-900">38m</span>

                <span className="text-[9px] text-gray-400">target 40m</span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[84%] rounded-full bg-violet-500" />
              </div>
            </div>

            {/* Active fleet */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400">
                  Active Fleet
                </span>

                <span className="text-[10px] font-semibold text-emerald-600">
                  +4.1%
                </span>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-gray-900">84%</span>

                <span className="text-[9px] text-gray-400">126 / 150</span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[84%] rounded-full bg-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
