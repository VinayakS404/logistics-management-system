import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Dispatch from "./pages/Dispatch";
import CreateDispatch from "./pages/CreateDispatch";
import DeliveryAgents from "./pages/DeliveryAgents";
import Fleet from "./pages/Fleet";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/dispatch" element={<Dispatch />} />
          <Route path="/dispatch/create" element={<CreateDispatch />} />
          <Route path="/agents" element={<DeliveryAgents />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}