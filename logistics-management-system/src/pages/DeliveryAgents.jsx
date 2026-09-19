import {
  Truck,
  Map,
  Users,
  BarChart3,
  ArrowUpRight,
  Navigation,
  CircleAlert,
  ChevronRight,
  MoreHorizontal,
  CheckCircle2,
  MapPin,
  Phone,
  UserPlus,
  SlidersHorizontal,
  Route,
} from "lucide-react";

import Header from "../components/Header";

const agents = [
  {
    name: "Arun Kumar",
    initials: "AK",
    phone: "+91 98765 43210",
    vehicle: "KL 07 AB 2451",
    vehicleType: "Van",
    location: "Kochi",
    status: "In Delivery",
    deliveries: 4,
    completed: 38,
    rating: "4.8",
  },
  {
    name: "Rahul S",
    initials: "RS",
    phone: "+91 98472 11892",
    vehicle: "KL 04 CD 7821",
    vehicleType: "Mini Truck",
    location: "Alappuzha",
    status: "In Delivery",
    deliveries: 3,
    completed: 31,
    rating: "4.7",
  },
  {
    name: "Vishnu K",
    initials: "VK",
    phone: "+91 95671 24567",
    vehicle: "KL 01 EF 4567",
    vehicleType: "Van",
    location: "Kochi",
    status: "Available",
    deliveries: 2,
    completed: 42,
    rating: "4.9",
  },
  {
    name: "Anil P",
    initials: "AP",
    phone: "+91 96334 78123",
    vehicle: "KL 08 GH 9234",
    vehicleType: "Van",
    location: "Kochi",
    status: "In Delivery",
    deliveries: 5,
    completed: 36,
    rating: "4.6",
  },
  {
    name: "Suresh M",
    initials: "SM",
    phone: "+91 94471 56231",
    vehicle: "KL 05 JK 6123",
    vehicleType: "Truck",
    location: "Alappuzha",
    status: "Available",
    deliveries: 1,
    completed: 29,
    rating: "4.8",
  },
  {
    name: "Manu R",
    initials: "MR",
    phone: "+91 97462 34581",
    vehicle: "KL 07 XY 3412",
    vehicleType: "Mini Truck",
    location: "Thrissur",
    status: "Offline",
    deliveries: 0,
    completed: 24,
    rating: "4.5",
  },
];

function StatusBadge({ status }) {
  const styles = {
    "In Delivery": "bg-blue-50 text-blue-700 border-blue-100",
    Available: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Offline: "bg-gray-50 text-gray-500 border-gray-100",
  };

  const dotStyles = {
    "In Delivery": "bg-blue-500",
    Available: "bg-emerald-500",
    Offline: "bg-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium ${
        styles[status]
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`}
      />

      {status}
    </span>
  );
}

function StatCard({
  label,
  value,
  description,
  icon: Icon,
  iconClass,
  trend,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">
            {label}
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon size={17} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {trend && (
          <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600">
            <ArrowUpRight size={11} />
            {trend}
          </span>
        )}

        <span className="text-[10px] text-gray-400">
          {description}
        </span>
      </div>
    </div>
  );
}

export default function DeliveryAgents() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      {/* ================= SHARED HEADER ================= */}
      <Header
        title="Drivers"
        subtitle="Manage your delivery workforce"
        searchPlaceholder="Search drivers..."
      />

      {/* ================= CONTENT ================= */}
      <main className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        {/* ================= PAGE HEADING ================= */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-gray-400">
              MANAGEMENT
            </p>

            <h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              Drivers
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Monitor availability, workload and driver performance.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-3.5 py-2.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md"
          >
            <UserPlus size={14} />
            Add driver
          </button>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total drivers"
            value="42"
            description="registered drivers"
            icon={Users}
            iconClass="bg-gray-100 text-gray-700"
          />

          <StatCard
            label="Available"
            value="24"
            description="ready for dispatch"
            icon={CheckCircle2}
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            label="In delivery"
            value="15"
            description="currently active"
            icon={Truck}
            iconClass="bg-blue-50 text-blue-600"
            trend="+6.2%"
          />

          <StatCard
            label="Offline"
            value="3"
            description="currently unavailable"
            icon={CircleAlert}
            iconClass="bg-gray-100 text-gray-500"
          />
        </div>

        {/* ================= AGENT OVERVIEW ================= */}
        <section className="mt-5 rounded-xl border border-gray-200 bg-white">
          {/* Section header */}
          <div className="flex flex-col gap-4 border-b border-gray-100 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gray-900">
                All drivers
              </h3>

              <p className="mt-0.5 text-[11px] text-gray-400">
                Current status and delivery workload
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
              >
                <SlidersHorizontal size={13} />
                Filters
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Status: All
                <ChevronRight size={12} />
              </button>
            </div>
          </div>

          {/* Agent Cards */}
          <div className="grid grid-cols-1 gap-3 p-3 sm:p-4 lg:grid-cols-2 xl:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-700">
                      {agent.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-semibold text-gray-900">
                        {agent.name}
                      </p>

                      <p className="mt-0.5 flex items-center gap-1 truncate text-[9px] text-gray-400">
                        <Phone size={9} />
                        {agent.phone}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="shrink-0 text-gray-300 transition hover:text-gray-700"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Status */}
                <div className="mt-4">
                  <StatusBadge status={agent.status} />
                </div>

                {/* Vehicle */}
                <div className="mt-4 rounded-lg bg-gray-50 p-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <Truck
                        size={13}
                        className="shrink-0 text-gray-500"
                      />

                      <div className="min-w-0">
                        <p className="text-[10px] font-medium text-gray-700">
                          {agent.vehicle}
                        </p>

                        <p className="mt-0.5 text-[9px] text-gray-400">
                          {agent.vehicleType}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] text-gray-400">
                      <MapPin size={10} />
                      {agent.location}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100">
                  <div>
                    <p className="text-[9px] text-gray-400">
                      Active
                    </p>

                    <p className="mt-1 text-[12px] font-semibold text-gray-800">
                      {agent.deliveries}
                    </p>
                  </div>

                  <div className="pl-3 sm:pl-4">
                    <p className="text-[9px] text-gray-400">
                      Completed
                    </p>

                    <p className="mt-1 text-[12px] font-semibold text-gray-800">
                      {agent.completed}
                    </p>
                  </div>

                  <div className="pl-3 sm:pl-4">
                    <p className="text-[9px] text-gray-400">
                      Rating
                    </p>

                    <p className="mt-1 text-[12px] font-semibold text-gray-800">
                      {agent.rating}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[10px] font-medium text-gray-500 transition hover:text-gray-900"
                  >
                    <MapPin size={11} />
                    View location
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-1 text-[10px] font-medium text-gray-500 transition hover:text-gray-900"
                  >
                    View profile
                    <ChevronRight size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t border-gray-100 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="text-[10px] text-gray-400">
              Showing 6 of 42 drivers
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition hover:bg-gray-50"
              >
                ‹
              </button>

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900 text-[10px] font-medium text-white"
              >
                1
              </button>

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-[10px] text-gray-500 transition hover:bg-gray-50"
              >
                2
              </button>

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-[10px] text-gray-500 transition hover:bg-gray-50"
              >
                3
              </button>

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition hover:bg-gray-50"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        {/* ================= PERFORMANCE ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-12">
          {/* Workload */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white xl:col-span-7">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-5">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900">
                  Driver workload
                </h3>

                <p className="mt-0.5 text-[11px] text-gray-400">
                  Current delivery distribution
                </p>
              </div>

              <Route size={16} className="shrink-0 text-gray-400" />
            </div>

            <div className="space-y-5 p-4 sm:p-5">
              {[
                ["Arun Kumar", 80, "4 / 5 deliveries"],
                ["Anil P", 100, "5 / 5 deliveries"],
                ["Rahul S", 60, "3 / 5 deliveries"],
                ["Vishnu K", 40, "2 / 5 deliveries"],
                ["Suresh M", 20, "1 / 5 deliveries"],
              ].map(([name, percentage, text]) => (
                <div key={name}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-medium text-gray-600">
                      {name}
                    </p>

                    <p className="shrink-0 text-[9px] text-gray-400">
                      {text}
                    </p>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${
                        percentage === 100
                          ? "bg-orange-500"
                          : percentage >= 80
                            ? "bg-blue-500"
                            : "bg-emerald-500"
                      }`}
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white xl:col-span-5">
            <div className="border-b border-gray-100 px-4 py-4 sm:px-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Quick actions
              </h3>

              <p className="mt-0.5 text-[11px] text-gray-400">
                Common driver management tasks
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">
              <QuickAction
                icon={UserPlus}
                title="Add driver"
                description="Register a new driver"
              />

              <QuickAction
                icon={Navigation}
                title="Assign delivery"
                description="Open dispatch center"
              />

              <QuickAction
                icon={Map}
                title="Live locations"
                description="Track active drivers"
              />

              <QuickAction
                icon={BarChart3}
                title="Performance"
                description="View driver analytics"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function QuickAction({
  icon: Icon,
  title,
  description,
}) {
  return (
    <button
      type="button"
      className="rounded-lg border border-gray-200 p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm"
    >
      <Icon size={16} className="text-gray-600" />

      <p className="mt-3 text-[10px] font-semibold text-gray-800">
        {title}
      </p>

      <p className="mt-1 text-[9px] text-gray-400">
        {description}
      </p>
    </button>
  );
}