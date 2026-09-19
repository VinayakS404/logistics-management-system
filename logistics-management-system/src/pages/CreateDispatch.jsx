import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Package,
  RotateCcw,
  Truck,
  UserRound,
  Clock3,
  FileText,
} from "lucide-react";
import Header from "../components/Header";

const orders = [
  {
    id: "ORD-10486",
    customer: "Adarsh P",
    route: "Kochi → Bangalore",
    packages: 3,
    value: "₹3,640",
  },
  {
    id: "ORD-10485",
    customer: "Akhil Raj",
    route: "Kochi → Bangalore",
    packages: 4,
    value: "₹2,190",
  },
  {
    id: "ORD-10484",
    customer: "Fathima N",
    route: "Kollam → Chennai",
    packages: 2,
    value: "₹1,890",
  },
  {
    id: "ORD-10483",
    customer: "Meera Joseph",
    route: "Kottayam → Bangalore",
    packages: 5,
    value: "₹2,840",
  },
];

const drivers = [
  {
    name: "Vishnu K",
    initials: "VK",
    vehicle: "KL 01 EF 4567",
    location: "Kochi",
    capacity: "14/20 packages",
  },
  {
    name: "Suresh M",
    initials: "SM",
    vehicle: "KL 05 JK 6123",
    location: "Alappuzha",
    capacity: "11/15 packages",
  },
  {
    name: "Arun Kumar",
    initials: "AK",
    vehicle: "KL 02 AB 7834",
    location: "Kottayam",
    capacity: "17/25 packages",
  },
];

function SummaryCard({ icon: Icon, label, value, detail, iconClass }) {
  return (
    <div className="min-w-[200px] flex-1 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold text-gray-500">{label}</p>
          <p className="mt-1.5 text-xl font-semibold tracking-tight text-gray-900">
            {value}
          </p>
          <p className="mt-0.5 text-[10px] text-gray-500">{detail}</p>
        </div>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon size={16} />
        </span>
      </div>
    </div>
  );
}

export default function CreateDispatch() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [driverName, setDriverName] = useState("");
  const [departure, setDeparture] = useState("");
  const [notes, setNotes] = useState("");

  const selectedOrder = orders.find((order) => order.id === orderId);
  const selectedDriver = drivers.find((driver) => driver.name === driverName);
  const ready = selectedOrder && selectedDriver;

  const reset = () => {
    setOrderId("");
    setDriverName("");
    setDeparture("");
    setNotes("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        {/* Page heading */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate("/dispatch")}
            className="mb-3 flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 transition hover:text-gray-900"
          >
            <ArrowLeft size={15} />
            Dispatch center
          </button>

          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">
            OPERATIONS
          </p>

          <h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
            Create dispatch
          </h1>

          <p className="mt-1 text-[11px] text-gray-500">
            Assign an order to an available driver and prepare the route.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mb-6 flex gap-4 overflow-x-auto pb-1">
          <SummaryCard
            icon={Package}
            label="Unassigned orders"
            value="24"
            detail="Waiting for assignment"
            iconClass="bg-orange-50 text-orange-600"
          />

          <SummaryCard
            icon={UserRound}
            label="Available drivers"
            value="8"
            detail="Ready to take a route"
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <SummaryCard
            icon={CheckCircle2}
            label="Ready for dispatch"
            value="17"
            detail="Routes prepared today"
            iconClass="bg-blue-50 text-blue-600"
          />
        </div>

        {/* Order + Driver selection */}
        <div className="grid gap-5 xl:grid-cols-2">
          {/* Select order */}
          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Package size={15} />
                </span>

                <div>
                  <h2 className="text-[13px] font-semibold text-gray-900">
                    Select an order
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Choose an unassigned order.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5">
              <select
                value={orderId}
                onChange={(event) => setOrderId(event.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-800 outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-100"
              >
                <option value="">Select an unassigned order</option>
                {orders.map((order) => (
                  <option key={order.id} value={order.id}>
                    {order.id} · {order.customer} · {order.route}
                  </option>
                ))}
              </select>

              {selectedOrder ? (
                <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3.5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-gray-500">
                      <Package size={15} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="text-[11px] font-semibold text-gray-900">
                          {selectedOrder.id}
                        </p>

                        <span className="text-[10px] text-gray-400">
                          {selectedOrder.customer}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] text-gray-500">
                        {selectedOrder.route}
                      </p>

                      <div className="mt-2 flex gap-4 text-[10px] text-gray-500">
                        <span>{selectedOrder.packages} packages</span>
                        <span>{selectedOrder.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-5 text-center">
                  <Package size={18} className="mx-auto text-gray-300" />
                  <p className="mt-2 text-[10px] text-gray-500">
                    Select an order to view its details.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Select driver */}
          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Truck size={15} />
                </span>

                <div>
                  <h2 className="text-[13px] font-semibold text-gray-900">
                    Select a driver
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Choose an available driver and vehicle.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5">
              <select
                value={driverName}
                onChange={(event) => setDriverName(event.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 bg-white px-5 text-base font-medium text-gray-800 outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-100"
              >
                <option value="">Select an available driver</option>
                {drivers.map((driver) => (
                  <option key={driver.name} value={driver.name}>
                    {driver.name} · {driver.vehicle}
                  </option>
                ))}
              </select>

              {selectedDriver ? (
                <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-semibold text-white">
                      {selectedDriver.initials}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-gray-900">
                        {selectedDriver.name}
                      </p>

                      <p className="mt-1 flex items-center gap-1.5 text-[10px] text-gray-500">
                        <Truck size={11} />
                        {selectedDriver.vehicle}
                        <span className="text-gray-300">·</span>
                        {selectedDriver.location}
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-600">
                      Available
                    </span>
                  </div>

                  <div className="mt-3 border-t border-gray-200 pt-2.5">
                    <p className="text-[10px] text-gray-500">
                      Vehicle capacity
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-gray-800">
                      {selectedDriver.capacity}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-5 text-center">
                  <Truck size={18} className="mx-auto text-gray-300" />
                  <p className="mt-2 text-[10px] text-gray-500">
                    Select a driver to view vehicle details.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Dispatch details */}
        <section className="mt-5 rounded-xl border p-5 border-gray-200 bg-white">
          <div className="border-b border-gray-100 pb-5 ">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Clock3 size={15} />
              </span>

              <div>
                <h2 className="text-[13px] font-semibold text-gray-900">
                  Dispatch details
                </h2>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Set the departure time and add optional instructions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-6 sm:grid-cols-2 ">
            {/* Departure */}
            <div className="flex flex-col gap-1.5 ">
              <label
                htmlFor="departure-input"
                className="text-sm font-medium text-gray-700 "
              >
                Departure time
              </label>
              <div className="relative flex items-center">
                <Clock3
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                />
                <input
                  id="departure-input"
                  type="time"
                  value={departure}
                  onChange={(event) => setDeparture(event.target.value)}
                  className="h-14 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-base font-medium text-gray-800 outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-100 [&::-webkit-calendar-picker-indicator]:bg-transparent [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="notes-input"
                className="text-sm font-medium text-gray-700"
              >
                Notes
              </label>
              <div className="relative flex items-center">
                <FileText
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                />
                <input
                  id="notes-input"
                  type="text"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Optional delivery instructions"
                  className="h-14 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-base font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-gray-700 focus:ring-2 focus:ring-gray-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Assignment preview */}
        <section className="mt-5 rounded-xl border border-gray-200 bg-white">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                Assignment preview
              </p>

              <h2 className="mt-1.5 text-[13px] font-semibold text-gray-900">
                {ready
                  ? `${selectedOrder.id} → ${selectedDriver.name}`
                  : "Select an order and driver"}
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                {ready
                  ? `${selectedOrder.route} · ${selectedDriver.vehicle}`
                  : "Your assignment will appear here before confirmation."}
              </p>
            </div>

            <div className="flex w-full gap-2.5 sm:w-auto">
              <button
                type="button"
                onClick={reset}
                className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-4 text-[10px] font-semibold text-gray-600 transition hover:bg-gray-50 sm:flex-none"
              >
                <RotateCcw size={13} />
                Reset
              </button>

              <button
                type="button"
                disabled={!ready}
                className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-900 px-5 text-[10px] font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none"
              >
                <CheckCircle2 size={14} />
                Accept dispatch
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
