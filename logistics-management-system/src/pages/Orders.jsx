import {
  Package,
  Truck,
  Navigation,
  Bell,
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  CircleAlert,
  XCircle,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import { useLayout } from "../context/LayoutContext";

/*
const orders = [
  {
    id: "LD-28491",
    customer: "Rahul Menon",
    route: "Kochi → Bangalore",
    driver: "Arun Kumar",
    vehicleNumber: "KL 07 AB 2451",
    date: "Sep 19, 2026",
    time: "10:42 AM",
    status: "In Transit",
    amount: "₹2,840",
  },
  {
    id: "LD-28490",
    customer: "Anjali S",
    route: "Alappuzha → Chennai",
    driver: "Rahul S",
    vehicleNumber: "KL 04 CD 7821",
    date: "Sep 19, 2026",
    time: "09:18 AM",
    status: "Delivered",
    amount: "₹1,920",
  },
  {
    id: "LD-28489",
    customer: "Vishnu Krishnan",
    route: "Trivandrum → Calicut",
    driver: "Vishnu K",
    vehicleNumber: "KL 01 EF 4567",
    date: "Sep 19, 2026",
    time: "08:54 AM",
    status: "Delayed",
    amount: "₹3,120",
  },
  {
    id: "LD-28488",
    customer: "Nikhil Thomas",
    route: "Kochi → Coimbatore",
    driver: "Anil P",
    vehicleNumber: "KL 08 GH 9234",
    date: "Sep 19, 2026",
    time: "08:21 AM",
    status: "In Transit",
    amount: "₹2,450",
  },
  {
    id: "LD-28487",
    customer: "Meera Joseph",
    route: "Kottayam → Bangalore",
    driver: "Suresh M",
    vehicleNumber: "KL 05 JK 6123",
    date: "Sep 19, 2026",
    time: "07:46 AM",
    status: "Pending",
    amount: "₹1,680",
  },
  {
    id: "LD-28486",
    customer: "Adarsh P",
    route: "Kochi → Hyderabad",
    driver: "Unassigned",
    vehicleNumber: "Unassigned",
    date: "Sep 18, 2026",
    time: "06:32 PM",
    status: "Pending",
    amount: "₹3,640",
  },
  {
    id: "LD-28485",
    customer: "Akhil Raj",
    route: "Thrissur → Chennai",
    driver: "Rahul S",
    vehicleNumber: "KL 04 CD 7821",
    date: "Sep 18, 2026",
    time: "05:17 PM",
    status: "Delivered",
    amount: "₹2,190",
  },
  {
    id: "LD-28484",
    customer: "Fathima N",
    route: "Kollam → Bangalore",
    driver: "Arun Kumar",
    vehicleNumber: "KL 07 AB 2451",
    date: "Sep 18, 2026",
    time: "04:42 PM",
    status: "Cancelled",
    amount: "₹1,890",
  },
];
*/
function StatusBadge({ status }) {
  const styles = {
    "In Transit": "bg-blue-50 text-blue-700 border-blue-100",
    Delivered: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Delayed: "bg-orange-50 text-orange-700 border-orange-100",
    Pending: "bg-yellow-50 text-yellow-700 border-yellow-100",
    Cancelled: "bg-red-50 text-red-600 border-red-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-medium ${
        styles[status] || "border-gray-100 bg-gray-50 text-gray-600"
      }`}
    >
      {status === "Delivered" && <CheckCircle2 size={12} />}

      {status === "In Transit" && (
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
      )}

      {status === "Delayed" && <CircleAlert size={12} />}

      {status === "Pending" && <Clock3 size={12} />}

      {status === "Cancelled" && <XCircle size={12} />}

      {status}
    </span>
  );
}

function StatCard({ label, value, description, icon: Icon, iconClass, trend }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition duration-200 hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
            {label}
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon size={17} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {trend && (
          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
            <ArrowUpRight size={12} />
            {trend}
          </span>
        )}

        <span className="text-[11px] text-gray-400">{description}</span>
      </div>
    </div>
  );
}

export default function Orders() {
  const { sidebarOpen, toggleSidebar } = useLayout();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await fetch("http://localhost:8000/api/test/orders");
      const data = await response.json();

      setOrders(data);
    };

    fetchDrivers();
  }, []);

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
            <h2 className="text-[15px] font-semibold text-gray-900">Orders</h2>

            <p className="mt-0.5 text-[11px] text-gray-400">
              Operations · September 19, 2026
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
              placeholder="Search orders..."
              className="h-9 w-57.5 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-gray-300 focus:bg-white"
            />
          </div>

          {/* Notification */}

          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
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
              OPERATIONS CENTER
            </p>

            <h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
              Order management
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Monitor, assign and manage all delivery orders
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-3.5 py-2.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md"
          >
            <Plus size={14} />
            Create order
          </button>
        </div>

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
          <StatCard
            label="Total Orders"
            value="247"
            description="today"
            trend="+12.4%"
            icon={Package}
            iconClass="bg-gray-100 text-gray-700"
          />

          <StatCard
            label="Pending"
            value="18"
            description="awaiting dispatch"
            icon={Clock3}
            iconClass="bg-yellow-50 text-yellow-600"
          />

          <StatCard
            label="In Transit"
            value="89"
            description="currently moving"
            icon={Truck}
            iconClass="bg-blue-50 text-blue-600"
          />

          <StatCard
            label="Delivered"
            value="128"
            description="completed today"
            trend="+8.1%"
            icon={CheckCircle2}
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            label="Exceptions"
            value="12"
            description="need attention"
            icon={CircleAlert}
            iconClass="bg-orange-50 text-orange-600"
          />
        </div>

        {/* ================= ORDER TABLE ================= */}

        <section className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white">
          {/* Table Header */}

          <div className="border-b border-gray-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  All orders
                </h3>

                <p className="mt-0.5 text-[11px] text-gray-400">
                  247 orders found
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[11px] font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  <Filter size={13} />
                  Filter
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[11px] font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  <Download size={13} />
                  Export
                </button>
              </div>
            </div>

            {/* Filter tabs */}

            <div className="mt-5 flex items-center gap-5">
              {[
                ["All orders", "247"],
                ["Pending", "18"],
                ["In Transit", "89"],
                ["Delivered", "128"],
                ["Exceptions", "12"],
              ].map(([label, count], index) => (
                <button
                  type="button"
                  key={label}
                  className={`relative pb-3 text-[11px] font-medium transition ${
                    index === 0
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {label}

                  <span
                    className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] ${
                      index === 0
                        ? "bg-gray-100 text-gray-700"
                        : "bg-gray-50 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>

                  {index === 0 && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gray-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}

          <div className="overflow-x-auto">
            <table className="w-full min-w-237.5">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Order
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Customer
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Route
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Driver
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Vehicle number
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Status
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Date
                  </th>

                  <th className="px-5 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Amount
                  </th>

                  <th className="w-10" />
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="group cursor-pointer transition hover:bg-gray-50/70"
                  >
                    {/* Order */}

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition group-hover:bg-gray-900 group-hover:text-white">
                          <Package size={14} />
                        </div>

                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">
                            {order.id}
                          </p>

                          <p className="mt-0.5 text-[9px] text-gray-400">
                            Standard delivery
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Customer */}

                    <td className="px-5 py-4">
                      <p className="text-[11px] font-medium text-gray-700">
                        {order.customer}
                      </p>

                      <p className="mt-0.5 text-[9px] text-gray-400">
                        Customer
                      </p>
                    </td>

                    {/* Route */}

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-gray-400" />

                        <span className="text-[11px] text-gray-600">
                          {`${order.origin} to ${order.destinatioin}`}
                        </span>
                      </div>
                    </td>

                    {/* Driver */}

                    <td className="px-5 py-4">
                      {order.driver === "Unassigned" ? (
                        <span className="text-[10px] font-medium text-orange-600">
                          Unassigned
                        </span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-[9px] font-semibold text-gray-600">
                            {order.driver
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}
                          </div>

                          <span className="text-[11px] text-gray-600">
                            {order.driver}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Vehicle number */}

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Truck
                          size={13}
                          className={
                            order.vehicleNumber === "Unassigned"
                              ? "text-orange-600"
                              : "text-gray-400"
                          }
                        />
                        <span
                          className={`text-[10px] font-medium ${
                            order.vehicleNumber === "Unassigned"
                              ? "text-orange-600"
                              : "text-gray-600"
                          }`}
                        >
                          {order.vehicleNumber}
                        </span>
                      </div>
                    </td>

                    {/* Status */}

                    <td className="px-5 py-4">
                      <StatusBadge status={order.status} />
                    </td>

                    {/* Date */}

                    <td className="px-5 py-4">
                      <p className="text-[10px] font-medium text-gray-600">
                        {order.date}
                      </p>

                      <p className="mt-0.5 text-[9px] text-gray-400">
                        {order.time}
                      </p>
                    </td>

                    {/* Amount */}

                    <td className="px-5 py-4 text-right">
                      <span className="text-[11px] font-semibold text-gray-800">
                        {`₹ ${order.value}`}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-4">
                      <button
                        type="button"
                        className="rounded-md p-1 text-gray-300 transition hover:bg-gray-100 hover:text-gray-600"
                      >
                        <MoreHorizontal size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}

          <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3.5">
            <p className="text-[10px] text-gray-400">
              Showing <span className="font-medium text-gray-600">1–8</span> of{" "}
              <span className="font-medium text-gray-600">247</span> orders
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
              >
                <ChevronLeft size={13} />
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

              <span className="px-1 text-[10px] text-gray-400">...</span>

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM INFO ================= */}

        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
          {/* Delivery Progress */}

          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Delivery progress
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-400">
                  Today's order completion
                </p>
              </div>

              <span className="text-sm font-semibold text-gray-900">72%</span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gray-900 transition-all duration-700"
                style={{ width: "72%" }}
              />
            </div>

            <div className="mt-3 flex justify-between text-[10px] text-gray-400">
              <span>128 delivered</span>
              <span>177 planned</span>
            </div>
          </section>

          {/* Dispatch Queue */}

          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Dispatch queue
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-400">
                  Orders waiting for assignment
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                <Navigation size={15} />
              </div>
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-2xl font-semibold tracking-tight text-gray-900">
                18
              </span>

              <span className="mb-1 text-[10px] text-gray-400">
                orders pending
              </span>
            </div>

            <button
              type="button"
              className="mt-4 flex items-center gap-1 text-[10px] font-medium text-gray-600 transition hover:text-gray-900"
            >
              Open dispatch queue
              <ArrowUpRight size={12} />
            </button>
          </section>

          {/* Exceptions */}

          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Order exceptions
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-400">
                  Orders requiring attention
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <CircleAlert size={15} />
              </div>
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-2xl font-semibold tracking-tight text-gray-900">
                12
              </span>

              <span className="mb-1 text-[10px] text-gray-400">
                active exceptions
              </span>
            </div>

            <button
              type="button"
              className="mt-4 flex items-center gap-1 text-[10px] font-medium text-gray-600 transition hover:text-gray-900"
            >
              Review exceptions
              <ArrowUpRight size={12} />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
