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
    "Out for Delivery": (
      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
    ),
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

const kpiCards = [
  {
    title: "Total Orders",
    value: "1,284",
    description: "vs. 1,142 last month",
    trend: "12.5%",
    icon: Package,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    trendColor: "text-emerald-600",
  },
  {
    title: "Active Deliveries",
    value: "342",
    description: "Currently on the road",
    trend: "8.2%",
    icon: Truck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    trendColor: "text-emerald-600",
  },
  {
    title: "Delivered Today",
    value: "876",
    description: "92% on-time delivery",
    trend: "5.4%",
    icon: CheckCircle2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    trendColor: "text-emerald-600",
  },
  {
    title: "Exceptions",
    value: "18",
    description: "3 require attention",
    label: "Today",
    icon: CircleAlert,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    trendColor: "text-slate-400",
  },
  {
    title: "Fleet Utilization",
    value: "84%",
    description: "126 of 150 vehicles active",
    label: "Fleet",
    icon: Truck,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    trendColor: "text-slate-400",
  },
];

const performanceMetrics = [
  {
    title: "On-time Delivery",
    value: "92%",
    change: "+3.2%",
    target: "target 90%",
    progress: "92%",
    progressColor: "bg-success",
  },
  {
    title: "Delivery Success",
    value: "96.4%",
    change: "+1.8%",
    target: "target 95%",
    progress: "96%",
    progressColor: "bg-info",
  },
  {
    title: "Avg. Delivery Time",
    value: "38m",
    change: "-6.4%",
    target: "target 40m",
    progress: "84%",
    progressColor: "bg-violet",
  },
  {
    title: "Active Fleet",
    value: "84%",
    change: "+4.1%",
    target: "126 / 150",
    progress: "84%",
    progressColor: "bg-warning",
  },
];

function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 className="text-[13px] font-semibold text-foreground">{title}</h3>

        {subtitle && <p className="mt-1 text-[10px] text-muted">{subtitle}</p>}
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
    <div className="min-h-screen bg-page text-foreground">
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
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.12em] text-secondary">
              Operations
            </p>

            <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Good afternoon, Vinayak
            </h1>

            <p className="mt-1 text-[11px] text-secondary">
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
        {/* KPI Cards (Key Performance Indicator)*/}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {kpiCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-card border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
                  >
                    <Icon size={16} />
                  </div>

                  {card.trend ? (
                    <span
                      className={`flex items-center gap-1 text-[10px] font-semibold ${card.trendColor}`}
                    >
                      <ArrowUpRight size={12} />
                      {card.trend}
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-muted">
                      {card.label}
                    </span>
                  )}
                </div>

                <p className="text-[10px] font-medium text-muted">
                  {card.title}
                </p>

                <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                  {card.value}
                </p>

                <p className="mt-1 text-[9px] text-muted">{card.description}</p>
              </div>
            );
          })}
        </div>
        {/* Main Live delivery and Exceptions Grid (2) */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          {/* Live Delivery Map */}
          <div className="xl:col-span-8">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
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
            <div className="h-full rounded-xl border border-border bg-card p-5">
              <SectionHeader
                title="Exceptions"
                subtitle="Issues that need attention"
                action="View all"
              />

              <div className="space-y-3">
                {exceptions.map((item) => {
                  const Icon = item.icon;

                  const toneStyles = {
                    amber: "bg-warning-bg text-warning",
                    red: "bg-danger-bg text-danger",
                    green: "bg-success-bg text-success",
                  };

                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-lg border border-border p-3 transition hover:bg-hover"
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
                          <p className="text-[10px] font-semibold text-foreground">
                            {item.title}
                          </p>

                          <span className="shrink-0 text-[9px] text-muted">
                            {item.time}
                          </span>
                        </div>

                        <p className="mt-1 text-[10px] text-secondary">
                          {item.description}
                        </p>

                        <p className="mt-1 text-[9px] font-medium text-muted">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg border border-border py-2.5 text-[10px] font-semibold text-secondary transition hover:bg-hover hover:text-foreground"
              >
                Review exceptions
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
        {/* Recent Orders + Driver Status */}
        <div className="overflow-hidden rounded-xl border border-border bg-card xl:col-span-8">
          {/* Section Header */}
          <div className="border-b border-border px-5 py-4">
            <SectionHeader
              title="Recent Orders"
              subtitle="Latest activity across your network"
              action="View all"
            />
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-170">
              <thead>
                <tr className="border-b border-border bg-hover/70">
                  <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-muted">
                    Order
                  </th>
                  <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-muted">
                    Customer
                  </th>
                  <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-muted">
                    Destination
                  </th>
                  <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-muted">
                    Status
                  </th>
                  <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-muted">
                    ETA
                  </th>
                  <th className="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-wide text-muted">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {shipments.map((shipment) => (
                  <tr
                    key={shipment.id}
                    className="border-b border-border last:border-0 transition hover:bg-hover"
                  >
                    <td className="px-5 py-3.5">
                      <p className="text-[10px] font-semibold text-foreground">
                        {shipment.id}
                      </p>
                      <p className="mt-0.5 text-[9px] text-muted">
                        {shipment.vehicle}
                      </p>
                    </td>

                    <td className="px-5 py-3.5">
                      <p className="text-[10px] font-medium text-secondary">
                        {shipment.customer}
                      </p>
                    </td>

                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-secondary">
                        <MapPin size={11} />
                        {shipment.destination}
                      </div>
                    </td>

                    <td className="px-5 py-3.5">
                      <StatusBadge status={shipment.status} />
                    </td>

                    <td className="px-5 py-3.5">
                      <p className="text-[10px] font-medium text-secondary">
                        {shipment.eta}
                      </p>
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <button
                        type="button"
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted transition hover:bg-hover hover:text-foreground"
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

        {/* Performance */}
        <div className="mt-5 rounded-xl border border-border bg-card p-5">
          <SectionHeader
            title="Today's Performance"
            subtitle="Delivery operations overview"
          />
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.title} className="rounded-lg bg-hover p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-muted">
                    {metric.title}
                  </span>
                  <span className="text-[10px] font-semibold text-success">
                    {metric.change}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-semibold text-foreground">
                    {metric.value}
                  </span>
                  <span className="text-[9px] text-muted">{metric.target}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-elevated">
                  <div
                    className={`h-full rounded-full ${metric.progressColor}`}
                    style={{ width: metric.progress }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
