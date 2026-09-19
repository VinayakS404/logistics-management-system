import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LayoutContext } from "../context/LayoutContext";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches
  );

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen((isOpen) => !isOpen);
  };

  return (
    <LayoutContext.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
        <Sidebar
          open={sidebarOpen}
          onClose={closeSidebar}
        />

        <main
          className={`min-h-screen transition-[margin] duration-300 ease-out ${
            sidebarOpen ? "lg:ml-[232px]" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </LayoutContext.Provider>
  );
}
