import {
  Package,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Clock3,
  CircleCheck,
  CircleAlert,
  Timer,
  Route,
  Fuel,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import Header from "../components/Header";

const deliveryData = [
  { day: "Mon", delivered: 310, delayed: 24 },
  { day: "Tue", delivered: 348, delayed: 31 },
  { day: "Wed", delivered: 332, delayed: 18 },
  { day: "Thu", delivered: 389, delayed: 27 },
  { day: "Fri", delivered: 421, delayed: 22 },
  { day: "Sat", delivered: 376, delayed: 34 },
  { day: "Sun", delivered: 298, delayed: 16 },
];

const zones = [
  {
    name: "Kochi",
    orders: 486,
    percentage: 82,
    growth: "+12.4%",
  },
  {
    name: "Alappuzha",
    orders: 318,
    percentage: 61,
    growth: "+8.7%",
  },
  {
    name: "Thrissur",
    orders: 274,
    percentage: 53,
    growth: "+5.2%",
  },
  {
    name: "Kottayam",
    orders: 221,
    percentage: 43,
    growth: "+3.8%",
  },
];

const agentPerformance = [
  {
    name: "Vishnu K",
    initials: "VK",
    deliveries: 42,
    success: 98,
    rating: 4.9,
  },
  {
    name: "Arun Kumar",
    initials: "AK",
    deliveries: 38,
    success: 96,
    rating: 4.8,
  },
  {
    name: "Rahul S",
    initials: "RS",
    deliveries: 31,
    success: 95,
    rating: 4.7,
  },
  {
    name: "Suresh M",
    initials: "SM",
    deliveries: 29,
    success: 94,
    rating: 4.8,
  },
];

function StatCard({
  icon: Icon,
  label,
  value,
  change,
  description,
  positive = true,
  iconClass,
}) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">
            {label}
          </p>

          <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="text-2xl font-semibold tracking-tight text-gray-900">
              {value}
            </p>

            <span
              className={`flex items-center gap-0.5 text-[10px] font-semibold ${
                positive ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {positive ? (
                <TrendingUp size={11} />
              ) : (
                <TrendingDown size={11} />
              )}

              {change}
            </span>
          </div>

          <p className="mt-1 text-[10px] text-gray-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon size={17} strokeWidth={1.9} />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, description, action }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-0.5 text-[11px] text-gray-400">
          {description}
        </p>
      </div>

      {action}
    </div>
  );
}

export default function Analytics() {
  const maxDelivered = Math.max(
    ...deliveryData.map((item) => item.delivered)
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      {/* ================= SHARED HEADER ================= */}
      <Header
        title="Analytics"
        subtitle="Track operational performance and delivery insights"
        searchPlaceholder="Search..."
      />

      {/* ================= CONTENT ================= */}
      <main className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        {/* ================= PAGE HEADING ================= */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-gray-400">
              INSIGHTS
            </p>

            <h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              Operational analytics
            </h1>

            <p className="mt-1 max-w-2xl text-[11px] text-gray-400">
              Understand delivery performance and identify operational trends.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[11px] font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Last 7 days
            <ChevronDown size={14} />
          </button>
        </div>

        {/* ================= KPI CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={Package}
            label="Total orders"
            value="2,486"
            change="+12.8%"
            description="Compared with previous period"
            iconClass="bg-gray-100 text-gray-700"
          />

          <StatCard
            icon={CircleCheck}
            label="Delivery success"
            value="96.4%"
            change="+2.1%"
            description="Successful deliveries"
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            icon={Timer}
            label="Avg. delivery time"
            value="42m"
            change="-8.4%"
            description="Average time per delivery"
            iconClass="bg-blue-50 text-blue-600"
          />

          <StatCard
            icon={CircleAlert}
            label="Delayed orders"
            value="124"
            change="-14.6%"
            description="Orders past expected time"
            positive={true}
            iconClass="bg-orange-50 text-orange-600"
          />
        </div>

        {/* ================= MAIN CHARTS ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
          {/* Delivery Performance */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <SectionHeader
              title="Delivery performance"
              description="Completed and delayed deliveries over the last 7 days"
              action={
                <button
                  type="button"
                  className="flex w-fit items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1.5 text-[10px] font-medium text-gray-500 transition hover:bg-gray-50"
                >
                  Weekly
                  <ChevronDown size={12} />
                </button>
              }
            />

            {/* Legend */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gray-800" />
                <span className="text-[10px] text-gray-500">
                  Delivered
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span className="text-[10px] text-gray-500">
                  Delayed
                </span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="mt-5 overflow-x-auto pb-2">
              <div className="flex h-57.5 min-w-125 gap-4">
                {/* Y Axis */}
                <div className="flex w-7 shrink-0 flex-col justify-between pb-5 pt-1 text-[9px] text-gray-400">
                  <span>450</span>
                  <span>300</span>
                  <span>150</span>
                  <span>0</span>
                </div>

                {/* Bars */}
                <div className="relative flex flex-1 items-end justify-between gap-3 border-b border-gray-200">
                  <div className="pointer-events-none absolute inset-x-0 top-0 border-t border-dashed border-gray-100" />
                  <div className="pointer-events-none absolute inset-x-0 top-1/3 border-t border-dashed border-gray-100" />
                  <div className="pointer-events-none absolute inset-x-0 top-2/3 border-t border-dashed border-gray-100" />

                  {deliveryData.map((item) => {
                    const deliveredHeight =
                      (item.delivered / maxDelivered) * 100;

                    const delayedHeight =
                      (item.delayed / maxDelivered) * 100;

                    return (
                      <div
                        key={item.day}
                        className="group relative flex h-full flex-1 items-end justify-center gap-1"
                      >
                        <div
                          className="relative w-5 rounded-t-md bg-gray-800 transition-all duration-500 group-hover:bg-gray-700"
                          style={{
                            height: `${deliveredHeight}%`,
                          }}
                        >
                          <div className="absolute -top-6 left-1/2 hidden -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-[9px] text-white group-hover:block">
                            {item.delivered}
                          </div>
                        </div>

                        <div
                          className="w-3 rounded-t-md bg-orange-400 transition-all duration-500 group-hover:bg-orange-500"
                          style={{
                            height: `${delayedHeight}%`,
                          }}
                        />

                        <span className="absolute -bottom-5 text-[9px] text-gray-400">
                          {item.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Breakdown */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <SectionHeader
              title="Delivery breakdown"
              description="Current order status distribution"
            />

            <div className="mt-6 flex items-center justify-center">
              <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#111827_0deg_248deg,#3b82f6_248deg_300deg,#f59e0b_300deg_326deg,#e5e7eb_326deg_360deg)]">
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-2xl font-semibold tracking-tight text-gray-900">
                    2,486
                  </span>

                  <span className="text-[9px] text-gray-400">
                    Total orders
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Delivered", "68.9%", "bg-gray-800"],
                ["In transit", "14.4%", "bg-blue-500"],
                ["Delayed", "7.2%", "bg-orange-400"],
                ["Pending", "9.5%", "bg-gray-200"],
              ].map(([label, value, color]) => (
                <div
                  key={label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${color}`}
                    />

                    <span className="text-[11px] text-gray-500">
                      {label}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-gray-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ================= SECONDARY ANALYTICS ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {/* Average Delivery Time */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <SectionHeader
              title="Average delivery time"
              description="Average completion time by day"
            />

            <div className="mt-5 flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight text-gray-900">
                42m
              </span>

              <span className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <TrendingDown size={11} />
                8.4%
              </span>
            </div>

            <div className="relative mt-6 h-32 min-w-0">
              <div className="absolute inset-x-0 top-0 border-t border-dashed border-gray-100" />
              <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-100" />
              <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-gray-100" />

              <svg
                viewBox="0 0 700 130"
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="areaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#111827"
                      stopOpacity="0.12"
                    />

                    <stop
                      offset="100%"
                      stopColor="#111827"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 90 C70 82 85 72 145 78 C205 84 225 52 290 60 C355 68 375 42 430 48 C485 54 510 30 560 38 C610 46 640 22 700 28 L700 130 L0 130 Z"
                  fill="url(#areaGradient)"
                />

                <path
                  d="M0 90 C70 82 85 72 145 78 C205 84 225 52 290 60 C355 68 375 42 430 48 C485 54 510 30 560 38 C610 46 640 22 700 28"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-2 flex justify-between text-[9px] text-gray-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </section>

          {/* Operational Metrics */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <SectionHeader
              title="Operational metrics"
              description="Key efficiency indicators"
            />

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <MetricCard
                icon={Route}
                label="Avg. route distance"
                value="18.6 km"
                change="↓ 4.2% from last week"
              />

              <MetricCard
                icon={Fuel}
                label="Fleet efficiency"
                value="16.8 km/l"
                change="↑ 2.7% from last week"
              />

              <MetricCard
                icon={Clock3}
                label="Avg. stop time"
                value="7.4 min"
                change="↓ 6.1% from last week"
              />

              <MetricCard
                icon={CircleCheck}
                label="On-time rate"
                value="94.8%"
                change="↑ 3.6% from last week"
              />
            </div>
          </section>
        </div>

        {/* ================= BOTTOM ANALYTICS ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_1.3fr]">
          {/* Top Zones */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <SectionHeader
              title="Top delivery zones"
              description="Orders handled by service area"
            />

            <div className="mt-5 space-y-4">
              {zones.map((zone, index) => (
                <div key={zone.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-[9px] font-bold text-gray-500">
                        {index + 1}
                      </span>

                      <span className="truncate text-xs font-semibold text-gray-700">
                        {zone.name}
                      </span>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <span className="text-[10px] font-semibold text-gray-800">
                        {zone.orders}
                      </span>

                      <span className="text-[9px] font-medium text-emerald-600">
                        {zone.growth}
                      </span>
                    </div>
                  </div>

                  <div className="h-1.5 rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gray-800 transition-all duration-700"
                      style={{
                        width: `${zone.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-[10px] font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-800"
            >
              View all zones
              <ArrowUpRight size={12} />
            </button>
          </section>

          {/* Driver Performance */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <SectionHeader
              title="Driver performance"
              description="Delivery performance across your workforce"
              action={
                <button
                  type="button"
                  className="flex w-fit items-center gap-1 text-[10px] font-medium text-gray-500 transition hover:text-gray-900"
                >
                  View drivers
                  <ArrowUpRight size={12} />
                </button>
              }
            />

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-140 border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    <th className="pb-3 text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                      Driver
                    </th>

                    <th className="pb-3 text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                      Deliveries
                    </th>

                    <th className="pb-3 text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                      Success
                    </th>

                    <th className="pb-3 text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                      Rating
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {agentPerformance.map((agent) => (
                    <tr
                      key={agent.name}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[9px] font-bold text-gray-600">
                            {agent.initials}
                          </div>

                          <span className="text-xs font-medium text-gray-700">
                            {agent.name}
                          </span>
                        </div>
                      </td>

                      <td className="py-3 text-xs font-semibold text-gray-700">
                        {agent.deliveries}
                      </td>

                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 rounded-full bg-gray-100">
                            <div
                              className="h-full rounded-full bg-emerald-500"
                              style={{
                                width: `${agent.success}%`,
                              }}
                            />
                          </div>

                          <span className="text-[10px] font-semibold text-gray-600">
                            {agent.success}%
                          </span>
                        </div>
                      </td>

                      <td className="py-3">
                        <span className="rounded-md bg-gray-50 px-2 py-1 text-[10px] font-semibold text-gray-700">
                          ★ {agent.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* ================= INSIGHT BANNER ================= */}
        <div className="mt-5 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex min-w-0 items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-50 p-2.5 text-blue-600">
              <BarChart3 size={17} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-800">
                Operations are trending positively
              </p>

              <p className="mt-0.5 text-[10px] text-gray-400">
                Delivery time and delayed orders have both decreased this
                week.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex w-fit shrink-0 items-center gap-1.5 text-[10px] font-semibold text-gray-600 transition hover:text-gray-900"
          >
            Detailed report
            <ArrowUpRight size={12} />
          </button>
        </div>
      </main>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, change }) {
  return (
    <div className="rounded-lg bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100">
      <div className="flex items-center gap-2">
        <Icon size={15} className="text-gray-500" />

        <span className="text-[10px] text-gray-400">
          {label}
        </span>
      </div>

      <p className="mt-3 text-xl font-semibold text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-emerald-600">
        {change}
      </p>
    </div>
  );
}