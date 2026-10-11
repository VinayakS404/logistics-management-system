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
import SectionHeader from "../components/SectionHeader";

const apiUrl = import.meta.env.VITE_API_URL;

function StatusBadge({ status }) {
  const styles = {
    "In Transit": "bg-info-bg text-info border-info-border",
    Delivered: "bg-success-bg text-success border-success-border",
    Delayed: "bg-warning-bg text-warning border-warning-border",
    Pending: "bg-warning-bg text-warning border-warning-border",
    Cancelled: "bg-danger-bg text-danger border-danger-border",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-medium ${
        styles[status] || "border-border bg-hover text-secondary"
      }`}
    >
      {status === "Delivered" && <CheckCircle2 size={12} />}
      {status === "In Transit" && (
        <span className="h-1.5 w-1.5 rounded-full bg-info" />
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
    <div className="rounded-xl border border-border bg-card p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
            {label}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
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
          <span className="flex items-center gap-1 text-[11px] font-medium text-success">
            <ArrowUpRight size={12} />
            {trend}
          </span>
        )}
        <span className="text-[11px] text-muted">{description}</span>
      </div>
    </div>
  );
}

export default function Orders() {
  const { sidebarOpen, toggleSidebar } = useLayout();
  const [orders, setOrders] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [limit] = useState(8);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
    pageSize: 8,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [statusCounts, setStatusCounts] = useState({
    all: 0,
    pending: 0,
    inTransit: 0,
    delivered: 0,
    exceptions: 0,
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const queryStatus = selectedStatus === "all" ? "" : selectedStatus;
        const response = await fetch(
          `${apiUrl}/api/test/orders?status=${encodeURIComponent(
            queryStatus,
          )}&page=${pageNum}&limit=${limit}&search=${encodeURIComponent(
            searchTerm,
          )}`,
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Server error (${response.status}):`, errorText);
          return;
        }

        const res = await response.json();
        setOrders(res.data || []);
        setStatusCounts(res.statusCounts);
        if (res.pagination) {
          setPagination(res.pagination);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [pageNum, limit, selectedStatus, searchTerm]);

  const totalItems = pagination.totalItems || orders.length;
  const firstElementNum =
    totalItems === 0
      ? 0
      : (pagination.currentPage - 1) * pagination.pageSize + 1;

  const lastElementNum = Math.min(
    pagination.currentPage * pagination.pageSize,
    totalItems,
  );

  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Dynamic status tab counters based on API data or pagination fallback
  const filterTabs = [
    {
      label: "All orders",
      key: "all",
      count: `${statusCounts.all}`,
    },
    {
      label: "Pending",
      key: "Pending",
      count: `${statusCounts.pending}`,
    },
    {
      label: "In Transit",
      key: "In Transit",
      count: `${statusCounts.inTransit}`,
    },
    {
      label: "Delivered",
      key: "Delivered",
      count: `${statusCounts.delivered}`,
    },
    {
      label: "Exceptions",
      key: "Exceptions",
      count: `${statusCounts.exceptions}`,
    },
  ];

  const deliveryPercentage =
    statusCounts.all > 0
      ? (statusCounts.delivered / statusCounts.all) * 100
      : 0;

  return (
    <div className="min-h-screen bg-page text-foreground">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-border bg-card/95 px-3 backdrop-blur sm:px-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-strong text-secondary shadow-sm transition hover:bg-hover hover:text-foreground"
            aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="min-w-0">
            <h2 className="text-[15px] font-semibold text-foreground">
              Orders
            </h2>
            <p className="mt-0.5 text-[11px] text-muted">
              Operations · {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPageNum(1);
              }}
              placeholder="Search orders..."
              className="h-9 w-57.5 rounded-lg border border-border bg-hover pl-9 pr-3 text-xs text-foreground outline-none transition placeholder:text-muted focus:border-border-strong focus:bg-card"
            />
          </div>

          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-secondary transition hover:bg-hover hover:text-foreground"
          >
            <Bell size={16} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-danger" />
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-card">
            VS
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="px-8 py-7">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-medium text-muted">
              OPERATIONS CENTER
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              Order management
            </h1>
            <p className="mt-1 text-[11px] text-muted">
              Monitor, assign and manage all delivery orders
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-brand px-3.5 py-2.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-brand-hover hover:shadow-md"
          >
            <Plus size={14} />
            Create order
          </button>
        </div>
        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
          <StatCard
            label="Total Orders"
            value={statusCounts.all}
            description="today"
            trend="+12.4%"
            icon={Package}
            iconClass="bg-elevated text-secondary"
          />
          <StatCard
            label="Pending"
            value={statusCounts.pending}
            description="awaiting dispatch"
            icon={Clock3}
            iconClass="bg-warning-bg text-warning"
          />
          <StatCard
            label="In Transit"
            value={statusCounts.inTransit}
            description="currently moving"
            icon={Truck}
            iconClass="bg-info-bg text-info"
          />
          <StatCard
            label="Delivered"
            value={statusCounts.delivered}
            description="completed today"
            trend="+8.1%"
            icon={CheckCircle2}
            iconClass="bg-success-bg text-success"
          />
          <StatCard
            label="Exceptions"
            value={statusCounts.exceptions}
            description="need attention"
            icon={CircleAlert}
            iconClass="bg-danger-bg text-danger"
          />
        </div>
        {/* ================= ORDER TABLE ================= */}
        <section className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <SectionHeader
                  title={
                    selectedStatus === "all"
                      ? "All orders"
                      : `${selectedStatus} orders`
                  }
                  subtitle={`${totalItems} ${
                    totalItems === 1 ? "order" : "orders"
                  } found`}
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-[11px] font-medium text-secondary transition hover:bg-hover hover:text-foreground"
                >
                  <Filter size={13} />
                  Filter
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-[11px] font-medium text-secondary transition hover:bg-hover hover:text-foreground"
                >
                  <Download size={13} />
                  Export
                </button>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="mt-5 flex items-center gap-5 overflow-x-auto">
              {filterTabs.map(({ label, key, count }) => {
                const isActive = selectedStatus === key;

                return (
                  <button
                    type="button"
                    key={key}
                    onClick={() => {
                      setSelectedStatus(key);
                      setPageNum(1);
                    }}
                    className={`relative whitespace-nowrap pb-3 text-[11px] font-medium transition ${
                      isActive
                        ? "font-semibold text-foreground"
                        : "text-muted hover:text-secondary"
                    }`}
                  >
                    {label}
                    <span
                      className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] ${
                        isActive && "text-foreground"
                      }`}
                    >
                      {count}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px]">
              <thead>
                <tr className="border-b border-border bg-hover/70">
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Order
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Customer
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Route
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Driver
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Vehicle number
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Status
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Date
                  </th>
                  <th className="px-5 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Amount
                  </th>
                  <th className="w-10" />
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {orders.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-5 py-10 text-center text-xs text-muted"
                    >
                      No orders found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr
                      key={order.id}
                      className="group cursor-pointer transition hover:bg-hover/70"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-elevated text-secondary transition group-hover:bg-brand group-hover:text-white">
                            <Package size={14} />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-foreground">
                              {order.id}
                            </p>
                            <p className="mt-0.5 text-[9px] text-muted">
                              Standard delivery
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-[11px] font-medium text-secondary">
                          {order.customer}
                        </p>
                        <p className="mt-0.5 text-[9px] text-muted">Customer</p>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={12} className="text-muted" />
                          <span className="text-[11px] text-secondary">
                            {`${order.origin} to ${order.destination}`}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        {order.driver === "Unassigned" ? (
                          <span className="text-[10px] font-medium text-warning">
                            Unassigned
                          </span>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-elevated text-[9px] font-semibold text-secondary">
                              {order.driver
                                ?.split(" ")
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <span className="text-[11px] text-secondary">
                              {order.driver}
                            </span>
                          </div>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Truck
                            size={13}
                            className={
                              order.vehicleNumber === "Unassigned"
                                ? "text-warning"
                                : "text-muted"
                            }
                          />
                          <span
                            className={`text-[10px] font-medium ${
                              order.vehicleNumber === "Unassigned"
                                ? "text-warning"
                                : "text-secondary"
                            }`}
                          >
                            {order.vehicleNumber}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={order.status} />
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-[10px] font-medium text-secondary">
                          {order.date}
                        </p>
                        <p className="mt-0.5 text-[9px] text-muted">
                          {order.time}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <span className="text-[11px] font-semibold text-foreground">
                          {`₹ ${order.value}`}
                        </span>
                      </td>

                      <td className="px-4">
                        <button
                          type="button"
                          className="rounded-md p-1 text-muted transition hover:bg-hover hover:text-foreground"
                        >
                          <MoreHorizontal size={15} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border px-5 py-3.5">
            <p className="text-[10px] text-muted">
              Showing{" "}
              <span className="font-medium text-secondary">
                {firstElementNum}-{lastElementNum}
              </span>{" "}
              of{" "}
              <span className="font-medium text-secondary">{totalItems}</span>{" "}
              orders
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={!pagination?.hasPrevPage}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-secondary transition hover:bg-hover hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                onClick={() => setPageNum((prev) => Math.max(1, prev - 1))}
              >
                <ChevronLeft size={13} />
              </button>

              {Array.from(
                { length: pagination?.totalPages || 1 },
                (_, i) => i + 1,
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setPageNum(page)}
                  className={`flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-medium transition ${
                    pageNum === page
                      ? "bg-brand text-white"
                      : "border border-border text-secondary hover:bg-hover hover:text-foreground"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                disabled={!pagination?.hasNextPage}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-secondary transition hover:bg-hover hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                onClick={() =>
                  setPageNum((prev) =>
                    prev < (pagination?.totalPages || 1) ? prev + 1 : prev,
                  )
                }
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM INFO ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
          <section className="rounded-xl border border-border bg-card p-5">
            <SectionHeader
              title="Delivery progress"
              subtitle="Today's order completion"
            />

            <div className="flex justify-end">
              <span className="text-sm font-semibold text-foreground">
                {deliveryPercentage.toFixed(1)}%
              </span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-elevated">
              <div
                className="h-full rounded-full bg-brand transition-all duration-700"
                style={{ width: `${deliveryPercentage}%` }}
              />
            </div>

            <div className="mt-3 flex justify-between text-[10px] text-muted">
              <span>{statusCounts.delivered} delivered</span>
              <span>{statusCounts.all} planned</span>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-start justify-between">
              <SectionHeader
                title="Dispatch queue"
                subtitle="Orders waiting for assignment"
              />

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warning-bg text-warning">
                <Navigation size={15} />
              </div>
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {statusCounts.pending}
              </span>
              <span className="mb-1 text-[10px] text-muted">
                orders pending
              </span>
            </div>

            <button
              type="button"
              className="mt-4 flex items-center gap-1 text-[10px] font-medium text-secondary transition hover:text-foreground"
            >
              Open dispatch queue
              <ArrowUpRight size={12} />
            </button>
          </section>

          <section className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-start justify-between">
              <SectionHeader
                title="Order exceptions"
                subtitle="Orders requiring attention"
              />

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-danger-bg text-danger">
                <CircleAlert size={15} />
              </div>
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {statusCounts.exceptions}
              </span>
              <span className="mb-1 text-[10px] text-muted">
                active exceptions
              </span>
            </div>

            <button
              type="button"
              className="mt-4 flex items-center gap-1 text-[10px] font-medium text-secondary transition hover:text-foreground"
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
