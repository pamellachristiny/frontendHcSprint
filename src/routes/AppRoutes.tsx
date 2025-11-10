import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Solucao from "../pages/Solucao";
import Contato from "../pages/Contato";
import Integrantes from "../pages/Integrantes";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/integrantes" element={<Integrantes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
