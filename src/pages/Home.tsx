import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ 1. Importar useNavigate
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); // ⬅️ 2. Inicializar o hook de navegação

  useEffect(() => {
    // Simula o atraso antes da notificação aparecer (ex: 2 segundos)
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

 
    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 7000);
    

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // 3. Função de Redirecionamento
  const handleStartConsultation = () => {
    // Redireciona o usuário para a rota "/solucao"
    navigate('/solucao');

    setShowNotification(false); 
  };

  return (
    <>
      <Header />

      <main className="relative">
        
        {/* 4. O Componente da Notificação Atualizado */}
        {showNotification && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-2xl bg-white border-l-4 border-green-500 transition-opacity duration-500 ease-in-out">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              🔔 Atenção, Ágata!
            </p>
            <p className="text-green-600 font-bold mb-3">
              Sua consulta começará agora.
            </p>
            
            {/* O NOVO BOTÃO DE AÇÃO */}
            <button
              onClick={handleStartConsultation} // ⬅️ Chama a função de navegação
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Iniciar Teleconsulta
            </button>
          </div>
        )}

        {/* Conteúdo Principal */}
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh] p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <h2 className="text-5xl font-bold mb-4">Bem-vindo(a) ao Ágata</h2>
          <p className="max-w-2xl text-lg">
            O Ágata é uma solução inovadora que visa transformar o acesso à saúde
            para pacientes com desafios motores, cognitivos ou tecnológicos. 
            Uma experiência acessível, inclusiva e guiada por áudio.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}