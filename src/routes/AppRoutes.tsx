import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Integrantes from "../pages/Integrantes"; // ✅ import default


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Integrantes />} />

      </Routes>
    </Router>
  );
}

