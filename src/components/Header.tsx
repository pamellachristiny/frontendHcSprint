import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Ágata</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-indigo-200">Home</Link></li>
          <li><Link to="/solucao" className="hover:text-indigo-200">Solução</Link></li>
          <li><Link to="/contato" className="hover:text-indigo-200">Contato</Link></li>
          <li><Link to="/integrantes" className="hover:text-indigo-200">Integrantes</Link></li>
        </ul>
      </nav>
    </header>
  );
}
