import logo from "../assets/Logo.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4">
      <img src={logo} alt="logo redUsers" className="h-10" />
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:text-gray-300">
            Inicio
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-300">
            Acerca de
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
