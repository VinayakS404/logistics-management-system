import {
  Truck,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  MapPin,
  Fuel,
  Wrench,
  CircleCheck,
  CircleAlert,
  Clock3,
  ChevronRight,
  Gauge,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";
import { useLayout } from "../context/LayoutContext";

const vehicles = [
  {
    id: "VH-001",
    number: "KL 07 AB 2451",
    type: "Delivery Van",
    model: "Tata Ace",
    agent: "Arun Kumar",
    location: "Kochi",
    status: "On Route",
    deliveries: 4,
    fuel: 72,
    mileage: "18.4 km/l",
    service: "12 days",
  },
  {
    id: "VH-002",
    number: "KL 04 CD 7821",
    type: "Mini Truck",
    model: "Ashok Leyland",
    agent: "Rahul S",
    location: "Alappuzha",
    status: "On Route",
    deliveries: 3,
    fuel: 58,
    mileage: "14.2 km/l",
    service: "28 days",
  },
  {
    id: "VH-003",
    number: "KL 01 EF 4567",
    type: "Delivery Van",
    model: "Maruti Suzuki",
    agent: "Vishnu K",
    location: "Kochi",
    status: "Available",
    deliveries: 2,
    fuel: 86,
    mileage: "19.1 km/l",
    service: "45 days",
  },
  {
    id: "VH-004",
    number: "KL 08 GH 9234",
    type: "Delivery Van",
    model: "Tata Ace",
    agent: "Anil P",
    location: "Kochi",
    status: "On Route",
    deliveries: 5,
    fuel: 41,
    mileage: "17.8 km/l",
    service: "8 days",
  },
  {
    id: "VH-005",
    number: "KL 05 JK 6123",
    type: "Truck",
    model: "Tata 407",
    agent: "Suresh M",
    location: "Alappuzha",
    status: "Available",
    deliveries: 1,
    fuel: 63,
    mileage: "12.6 km/l",
    service: "19 days",
  },
  {
    id: "VH-006",
    number: "KL 07 XY 3412",
    type: "Mini Truck",
    model: "Mahindra Bolero",
    agent: "Manu R",
    location: "Thrissur",
    status: "Maintenance",
    deliveries: 0,
    fuel: 34,
    mileage: "13.8 km/l",
    service: "Today",
  },
];

const statusConfig = {
  "On Route": {
    className: "bg-blue-50 text-blue-700 border-blue-100",
    dot: "bg-blue-500",
  },

  Available: {
    className: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-500",
  },

  Maintenance: {
    className: "bg-orange-50 text-orange-700 border-orange-100",
    dot: "bg-orange-500",
  },
};

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  iconClass,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">
            {label}
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
            {value}
          </p>

          <p className="mt-1 text-[10px] text-gray-400">
            {detail}
          </p>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon size={17} strokeWidth={1.9} />
        </div>
      </div>
    </div>
  );
}

function VehicleCard({ vehicle }) {
  const status = statusConfig[vehicle.status];

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
            <Truck size={19} strokeWidth={1.8} />
          </div>

          <div>
            <p className="text-[11px] font-semibold text-gray-900">
              {vehicle.number}
            </p>

            <p className="mt-0.5 text-[9px] text-gray-400">
              {vehicle.model} · {vehicle.type}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg p-1.5 text-gray-300 transition hover:bg-gray-50 hover:text-gray-700"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Status */}
      <div className="mt-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium ${status.className}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
          />

          {vehicle.status}
        </span>
      </div>

      {/* Driver / Location */}
      <div className="mt-4 space-y-2.5 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400">
            Assigned driver
          </span>

          <span className="text-[10px] font-medium text-gray-700">
            {vehicle.agent}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <MapPin size={11} />
            Location
          </span>

          <span className="text-[10px] font-medium text-gray-700">
            {vehicle.location}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400">
            Active deliveries
          </span>

          <span className="text-[10px] font-semibold text-gray-800">
            {vehicle.deliveries}
          </span>
        </div>
      </div>

      {/* Fuel */}
      <div className="mt-4 border-t border-gray-100 pt-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <Fuel size={11} />
            Fuel level
          </span>

          <span className="text-[10px] font-semibold text-gray-700">
            {vehicle.fuel}%
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              vehicle.fuel > 60
                ? "bg-emerald-500"
                : vehicle.fuel > 35
                  ? "bg-orange-400"
                  : "bg-red-400"
            }`}
            style={{ width: `${vehicle.fuel}%` }}
          />
        </div>
      </div>

      {/* Bottom stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-gray-50 px-3 py-2">
          <p className="text-[9px] text-gray-400">
            Mileage
          </p>

          <p className="mt-0.5 text-[10px] font-semibold text-gray-700">
            {vehicle.mileage}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 px-3 py-2">
          <p className="text-[9px] text-gray-400">
            Next service
          </p>

          <p
            className={`mt-0.5 text-[10px] font-semibold ${
              vehicle.service === "Today"
                ? "text-orange-600"
                : "text-gray-700"
            }`}
          >
            {vehicle.service}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
        >
          View details
        </button>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700"
        >
          <MapPin size={13} />
        </button>
      </div>
    </div>
  );
}

export default function Fleet() {
  const { sidebarOpen, toggleSidebar } = useLayout();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-gray-200 bg-white/95 px-3 backdrop-blur sm:px-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-300 text-gray-600 shadow-sm transition hover:bg-gray-100 hover:text-gray-900"
            aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="min-w-0">
          <h2 className="text-[15px] font-semibold text-gray-900">
            Fleet
          </h2>

          <p className="mt-0.5 text-[11px] text-gray-400">
            Manage your delivery vehicles
          </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search vehicles..."
              className="h-9 w-57.5 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-gray-300 focus:bg-white"
            />
          </div>

          {/* Notification */}
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50"
          >
            <Bell size={16} />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>

          {/* Profile */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white">
            VS
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="px-8 py-7">
        {/* Page heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-medium text-gray-400">
              MANAGEMENT
            </p>

            <h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              Fleet overview
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Monitor vehicle status, fuel levels and maintenance schedules.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-3.5 py-2.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md"
          >
            <Plus size={14} />
            Add vehicle
          </button>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard
            icon={Truck}
            label="Total vehicles"
            value="36"
            detail="Fleet vehicles"
            iconClass="bg-gray-100 text-gray-700"
          />

          <StatCard
            icon={CircleCheck}
            label="Available"
            value="14"
            detail="Ready for dispatch"
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            icon={Gauge}
            label="On route"
            value="17"
            detail="Currently delivering"
            iconClass="bg-blue-50 text-blue-600"
          />

          <StatCard
            icon={Wrench}
            label="Maintenance"
            value="5"
            detail="Needs attention"
            iconClass="bg-orange-50 text-orange-600"
          />
        </div>

        {/* ================= FLEET HEALTH ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
          {/* Utilization */}
          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Fleet utilization
                </h3>

                <p className="mt-0.5 text-[11px] text-gray-400">
                  Vehicle usage across today's operations
                </p>
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-[10px] font-medium text-gray-500 transition hover:text-gray-900"
              >
                View analytics
                <ChevronRight size={13} />
              </button>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Overall utilization */}
                <div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-gray-900">
                        82%
                      </p>

                      <p className="mt-1 text-[10px] text-gray-400">
                        Overall utilization
                      </p>
                    </div>

                    <span className="text-[10px] font-semibold text-emerald-600">
                      +6.4%
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 rounded-full bg-gray-100">
                    <div className="h-full w-[82%] rounded-full bg-gray-800" />
                  </div>
                </div>

                {/* On route */}
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-gray-900">
                    17
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Vehicles on route
                  </p>

                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 flex-1 rounded-full ${
                          index < 7
                            ? "bg-blue-500"
                            : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Average usage */}
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-gray-900">
                    4.7h
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Avg. daily usage
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-500">
                    <Clock3 size={12} />
                    <span>Across active vehicles</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance */}
          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="flex items-start justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Maintenance
                </h3>

                <p className="mt-0.5 text-[11px] text-gray-400">
                  Upcoming vehicle service
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-2 text-orange-600">
                <Wrench size={17} />
              </div>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between rounded-lg bg-orange-50/60 px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <CircleAlert
                    size={15}
                    className="text-orange-500"
                  />

                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      KL 07 XY 3412
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Service due today
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={14}
                  className="text-gray-400"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <CalendarDays
                    size={15}
                    className="text-gray-400"
                  />

                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      KL 08 GH 9234
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Service in 8 days
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={14}
                  className="text-gray-400"
                />
              </div>
            </div>
          </section>
        </div>

        {/* ================= VEHICLE LIST ================= */}
        <section className="mt-5 rounded-xl border border-gray-200 bg-white">
          <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                All vehicles
              </h3>

              <p className="mt-0.5 text-[11px] text-gray-400">
                36 vehicles registered in your fleet
              </p>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-1 overflow-x-auto rounded-lg bg-gray-100 p-1">
              <button
                type="button"
                className="whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-[10px] font-semibold text-gray-800 shadow-sm"
              >
                All
              </button>

              <button
                type="button"
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-medium text-gray-500 transition hover:text-gray-800"
              >
                On Route
              </button>

              <button
                type="button"
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-medium text-gray-500 transition hover:text-gray-800"
              >
                Available
              </button>

              <button
                type="button"
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-medium text-gray-500 transition hover:text-gray-800"
              >
                Maintenance
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 xl:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}
          </div>
        </section>

        {/* ================= BOTTOM INFO ================= */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Fuel efficiency */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Fuel size={16} className="text-gray-500" />

              <p className="text-xs font-semibold text-gray-800">
                Fuel efficiency
              </p>
            </div>

            <p className="mt-3 text-xl font-semibold tracking-tight text-gray-900">
              16.8 km/l
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Average across active fleet
            </p>
          </div>

          {/* Distance */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-gray-500" />

              <p className="text-xs font-semibold text-gray-800">
                Distance covered
              </p>
            </div>

            <p className="mt-3 text-xl font-semibold tracking-tight text-gray-900">
              2,486 km
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Total distance today
            </p>
          </div>

          {/* Availability */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <CircleCheck size={16} className="text-gray-500" />

              <p className="text-xs font-semibold text-gray-800">
                Fleet availability
              </p>
            </div>

            <p className="mt-3 text-xl font-semibold tracking-tight text-gray-900">
              88%
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Vehicles ready for operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}