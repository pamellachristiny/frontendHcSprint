
import { NavLink } from 'react-router-dom'; 

const links = [
  { to: '/', label: 'Home' },
  { to: '/solucao', label: 'Solução' },
  { to: '/integrantes', label: 'Integrantes' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
  { to: '/faq', label: 'FAQ' },         
];

export default function Header() {
  // Classes para estilo: ajustei para garantir a visibilidade
  const baseClasses = "text-white font-medium hover:text-purple-300 transition duration-200 px-3 py-2 rounded-md";
  const activeClasses = baseClasses + " bg-indigo-700 font-bold"; 

  return (
    <header className="bg-indigo-600 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Nome do Projeto */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white tracking-wider">
              Ágata
            </NavLink>
          </div>
          
          {/* Links de Navegação */}
          {/* Removi as classes 'hidden md:block' para que o menu SEMPRE apareça */}
          <nav>
            <div className="flex items-baseline space-x-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => 
                    isActive ? activeClasses : baseClasses
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
          
        </div>
      </div>
    </header>
  );
}