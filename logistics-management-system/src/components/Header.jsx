import {
  Menu,
  X,
  Truck,
  Search,
  Bell,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";

export default function Header({
  title,
  subtitle,
  searchPlaceholder = "Search...",
}) {
  const { sidebarOpen, toggleSidebar } = useLayout();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white/95 px-3 backdrop-blur-sm sm:h-17 sm:px-5 lg:h-18 lg:px-8">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        {/* Navigation menu */}
        <button
          type="button"
          onClick={toggleSidebar}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
          aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile brand */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 lg:hidden"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white shadow-sm shadow-slate-300">
            <Truck size={15} strokeWidth={2.2} />
          </div>

          <span className="text-[13px] font-semibold tracking-tight text-slate-900">
            LogiTrack
          </span>
        </NavLink>

        <div className="mx-2 h-5 w-px bg-slate-200 lg:hidden" />

        {/* Page title */}
        <div className="min-w-0">
          <h1 className="truncate text-[13px] font-semibold text-slate-900 sm:text-[14px] lg:text-[15px]">
            {title}
          </h1>

          <p className="hidden text-[9px] text-slate-400 sm:block lg:text-[10px]">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex shrink-0 items-center gap-2.5 sm:gap-4">
        {/* Search */}
        <div className="relative hidden lg:block">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder={searchPlaceholder}
            className="h-9 w-57.5 rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
        >
          <Bell size={16} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white shadow-sm shadow-slate-200">
          VS
        </div>
      </div>
    </header>
  );
}