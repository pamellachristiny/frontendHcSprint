
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 🛑 ERRO CORRIGIDO: O caminho agora é '../pages/' em vez de './pages/'
import Home from '../pages/Home';
import Solucao from '../pages/Solucao';
import Integrantes from '../pages/Integrantes';
import Sobre from '../pages/Sobre';
import FAQ from '../pages/Faq';
import Contato from '../pages/Contato'; // Presumindo que você tem a página Contato.tsx

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} /> {/* Rota Contato */}
        
        {/* Rota para lidar com caminhos não encontrados (404) */}
        <Route path="*" element={
          <div className="text-center p-20 min-h-screen">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            <p className="text-xl text-gray-700">Página não encontrada. Verifique a URL.</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}