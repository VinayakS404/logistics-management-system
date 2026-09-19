import {
  LayoutDashboard,
  Package,
  Truck,
  Map,
  Users,
  BarChart3,
  Settings,
  Navigation,
  MoreHorizontal,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navSections = [
  {
    title: "OPERATIONS",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
        end: true,
      },
      {
        name: "Orders",
        icon: Package,
        path: "/orders",
      },
      {
        name: "Live Tracking",
        icon: Map,
        path: "/tracking",
        live: true,
      },
      {
        name: "Dispatch",
        icon: Navigation,
        path: "/dispatch",
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        name: "Drivers",
        icon: Users,
        path: "/agents",
      },
      {
        name: "Fleet",
        icon: Truck,
        path: "/fleet",
      },
    ],
  },
  {
    title: "INSIGHTS",
    items: [
      {
        name: "Analytics",
        icon: BarChart3,
        path: "/analytics",
      },
    ],
  },
];

const getNavLinkClassName = ({ isActive }) =>
  `flex w-full items-center justify-between rounded-xl px-3 py-2.5 ${
    isActive ? "bg-black text-white" : "text-slate-500 hover:bg-slate-50"
  }`;

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-58 flex-col
          border-r border-slate-200 bg-white/95
          shadow-[0_0_0_1px_rgba(148,163,184,0.08),12px_0_32px_rgba(15,23,42,0.05)]
          backdrop-blur-sm transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <NavLink
          to="/"
          className="flex h-18 items-center border-b border-slate-200 px-5 transition hover:bg-slate-50"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white shadow-sm shadow-slate-300">
              <Truck size={18} strokeWidth={2.2} />
            </div>

            <div>
              <h1 className="text-[15px] font-semibold tracking-tight text-slate-900">
                LogiTrack
              </h1>

              <p className="text-[10px] text-slate-400">
                Logistics Platform
              </p>
            </div>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6">
          {navSections.map((section) => (
            <div key={section.title} className="mb-7">
              <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.12em] text-gray-400">
                {section.title}
              </p>

              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.end}
                    className={getNavLinkClassName}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">
                          <Icon size={16} strokeWidth={1.9} />
                          <span className="text-[12px] font-medium">
                            {item.name}
                          </span>
                        </span>

                        {item.live && (
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive ? "bg-white" : "bg-emerald-500"
                            }`}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 p-3">
          <NavLink to="/settings" className={getNavLinkClassName}>
            <span className="flex items-center gap-3">
              <Settings size={16} strokeWidth={1.9} />
              <span className="text-[12px] font-medium">
                Settings
              </span>
            </span>
          </NavLink>

          <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-semibold text-blue-700">
              VS
            </div>

            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-slate-800">
                Vinayak S
              </p>

              <p className="text-[10px] text-slate-400">
                Administrator
              </p>
            </div>

            <MoreHorizontal
              size={15}
              className="ml-auto text-slate-400"
            />
          </div>
        </div>
      </aside>
    </>
  );
}