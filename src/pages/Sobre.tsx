
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-screen max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-8 text-indigo-700 text-center border-b-4 border-purple-300 pb-3">
          Sobre o Projeto Ágata
        </h1>
        
        <section className="mb-10 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Nossa Missão</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nossa missão é **democratizar o acesso à saúde digital**. Acreditamos que todos têm o direito de realizar uma teleconsulta de forma autônoma e segura, independentemente de suas habilidades motoras ou nível de familiaridade com a tecnologia. O Ágata existe para ser a **voz da inclusão** no atendimento médico remoto.
          </p>
        </section>

        <section className="mb-10 p-6 bg-gray-50 rounded-xl shadow-lg border-l-4 border-indigo-500">
          <h2 className="text-3xl font-bold mb-4 text-purple-600"> O Conceito Ágata</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            O nome "Ágata" remete a um mineral conhecido por sua beleza e por ser um condutor de energia. Em nosso projeto, a Ágata é a **pedra fundamental da conexão** entre paciente e médico.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Usamos tecnologia de **processamento de linguagem natural (NLP)** para transformar comandos de voz simples em ações complexas, como agendar, cancelar e iniciar consultas, garantindo uma experiência intuitiva e acessível.
          </p>
        </section>

        <section className="p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-purple-600"> Pilares Tecnológicos</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>
              **Acessibilidade Universal:** Design focado em grandes contrastes e navegação simplificada.
            </li>
            <li>
              **Interação por Voz:** A principal forma de navegação é por comandos de voz e respostas audíveis.
            </li>
            <li>
              **API Integrada:** Conexão segura com o sistema de Back-end (Java/Render) para gestão em tempo real de agendamentos e dados de pacientes.
            </li>
          </ul>
        </section>

      </div>
      <Footer />
    </>
  );
}