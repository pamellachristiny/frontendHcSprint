import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Componentes de Página
import Home from "../pages/Home";
import Integrantes from "../pages/Integrantes";
import Solucao from "../pages/Solucao"; 
import Contato from "../pages/Contato"; 
// Certifique-se de ter criado todos esses arquivos na pasta ../pages

// Componente simples para tratar rotas não encontradas
const NotFound = () => (
  <div className="p-10 text-center min-h-screen">
    <h1 className="text-4xl font-bold text-red-600">404</h1>
    <p className="text-lg">Página não encontrada. Verifique o endereço digitado.</p>
  </div>
);


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rota para o Home */}
        <Route path="/" element={<Home />} />
        
        {/* Rota para os Integrantes */}
        <Route path="/integrantes" element={<Integrantes />} />

        {/* Rota para a Solução (Onde você consumirá a API) */}
        <Route path="/solucao" element={<Solucao />} />
        
        {/* Rota para o Contato */}
        <Route path="/contato" element={<Contato />} />

        {/* Rota de fallback para qualquer caminho não definido */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}