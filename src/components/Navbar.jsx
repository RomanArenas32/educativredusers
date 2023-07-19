import { useState } from "react";
import logo from "../assets/Logo.png";

export const Navbar = () => {

  const [datos, setDatos] = useState(false);
  console.log(datos)
  const changeVisible = ()=>{
    setDatos(!datos)
  }

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-900 p-4">
      <img src={logo} alt="logo redUsers" className="h-10" />
      <button className="block lg:hidden border border-gray-200 p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:text-white"
      onClick={changeVisible}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {/* Lista de enlaces */}
      <ul className={(datos) ? "hidden" : "lg:flex lg:space-x-4"}>

        <li>
          <a href="/" className="text-white hover:text-gray-300">
            inicio
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-300">
            quienes somos
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300">
            que ofrecemos
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300">
            como llegar
          </a>
        </li>
      </ul>
    </nav>
  );
};
