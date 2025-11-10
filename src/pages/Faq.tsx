
import Header from '../components/Header';
import Footer from '../components/Footer';

// Estrutura de dados para as perguntas
const perguntas = [
  {
    pergunta: "O que torna o Ágata diferente de outras plataformas de teleconsulta?",
    resposta: "O Ágata prioriza a **navegação por voz**. Enquanto outras exigem cliques e digitação, o Ágata permite que o paciente realize todo o processo (do agendamento à entrada na sala) apenas seguindo e respondendo a comandos de áudio simples."
  },
  {
    pergunta: "Para quem o Ágata é recomendado?",
    resposta: "É ideal para idosos, pacientes com limitações motoras, pessoas com deficiência visual e qualquer usuário que tenha dificuldade ou baixa confiança em usar interfaces digitais complexas."
  },
  {
    pergunta: "Preciso de algum software especial para usar o Ágata?",
    resposta: "Não. O Ágata funciona diretamente no navegador, mas requer um dispositivo com microfone e acesso à internet estável."
  },
  {
    pergunta: "Como faço para agendar uma consulta por voz?",
    resposta: "O sistema te guiará. Basta dizer comandos como: **\"Ágata, quero agendar uma consulta\"**. O sistema irá perguntar a especialidade e o melhor horário disponível, guiando você a cada etapa."
  },
  {
    pergunta: "Meus dados de saúde estão seguros?",
    resposta: "Sim. Todos os dados são criptografados e gerenciados pelo nosso Back-end robusto (desenvolvido em Java), seguindo as melhores práticas de segurança de dados e privacidade (LGPD)."
  },
];

export default function FAQ() {
  // Você pode adicionar um estado para controlar a abertura/fechamento das respostas (accordion) se quiser
  // Por simplicidade, faremos um design de lista simples.
  
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-screen max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-10 text-indigo-700 text-center border-b-4 border-purple-300 pb-3">
          Perguntas Frequentes (FAQ)
        </h1>
        
        <div className="space-y-6">
          {perguntas.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {item.pergunta}
              </h2>
              <p className="text-gray-600">
                {item.resposta}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}