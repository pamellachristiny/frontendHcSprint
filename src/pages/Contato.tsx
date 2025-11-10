export default function Contato() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Fale Conosco</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Seu nome" className="border p-2 rounded" />
        <input type="email" placeholder="Seu e-mail" className="border p-2 rounded" />
        <textarea placeholder="Sua mensagem" className="border p-2 rounded h-32"></textarea>
        <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
          Enviar
        </button>
      </form>
    </div>
  );
}
