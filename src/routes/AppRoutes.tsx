import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ⚠️ IMPORTAR OS NOVOS COMPONENTES
import Home from "../pages/Home";
import Integrantes from "../pages/Integrantes";
import Solucao from "../pages/Solucao"; // Certifique-se de criar este arquivo
import Contato from "../pages/Contato"; // Certifique-se de criar este arquivo


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rota existente para Home */}
        <Route path="/" element={<Home />} />
        
        {/* Rota existente para Integrantes */}
        <Route path="/integrantes" element={<Integrantes />} />

        {/* 🌟 NOVAS ROTAS ADICIONADAS */}
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>
    </Router>
  );
}