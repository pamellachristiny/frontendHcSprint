// src/pages/Integrantes.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Estrutura de dados para os integrantes
const integrantes = [
  {
    nome: "Felipe Ribeiro Salles de Camargo",
    ra: "565224",
    turma: "1TDSPY",
    github: "https://github.com/FelipeRibeiroSalles",
    linkedin: "https://www.linkedin.com/in/felipe-ribeiro-2ba819303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    nome: "Pamella Christiny Chaves Brito",
    ra: "565206",
    turma: "1TDSPY",
    github: "https://github.com/pamellachristiny",
    linkedin: "https://www.linkedin.com/in/pamella-christiny",
  },
];

// Componente Card para Reutilização
interface MembroProps {
  nome: string;
  ra: string;
  turma: string;
  github: string;
  linkedin: string;
}

const MembroCard: React.FC<MembroProps> = ({ nome, ra, turma, github, linkedin }) => (
  <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-indigo-600 transform hover:scale-[1.02] transition duration-300">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">{nome}</h2>
    
    <div className="space-y-2 text-lg text-gray-700">
      <p><strong>R.A.:</strong> {ra}</p>
      <p><strong>Turma:</strong> {turma}</p>
    </div>
    
    <div className="mt-6 border-t pt-4 flex flex-col space-y-3">
      
      {/* Link GitHub */}
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center transition duration-200"
      >
        <span className="mr-2">🔗</span> GitHub
      </a>
      
      {/* Link LinkedIn */}
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center transition duration-200"
      >
        <span className="mr-2">💼</span> LinkedIn
      </a>
    </div>
  </div>
);

export default function Integrantes() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-screen max-w-5xl">
        <h1 className="text-5xl font-extrabold mb-12 text-indigo-700 text-center border-b-4 border-purple-300 pb-3">
        Nossos Integrantes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrantes.map((membro) => (
            <MembroCard 
              key={membro.ra}
              nome={membro.nome}
              ra={membro.ra}
              turma={membro.turma}
              github={membro.github}
              linkedin={membro.linkedin}
            />
          ))}
        </div>
        
      </div>
      <Footer />
    </>
  );
}