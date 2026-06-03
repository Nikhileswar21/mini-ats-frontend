import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import AddCandidate from "./pages/AddCandidate";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/add" element={<AddCandidate />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}