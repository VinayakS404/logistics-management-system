import { createContext, useContext } from "react";

export const LayoutContext = createContext(null);

export function LayoutProvider({ children, onMenuClick }) {
  return (
    <LayoutContext.Provider value={{ onMenuClick }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}