import { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [datos, setDatos] = useState(false);

  const changeVisible = () => {
    setDatos(!datos);
  };

  return (
    <nav className=" items-center  bg-gray-900 p-4">
      <div className="flex flex-row  items-center justify-between w-full top-0">
        <img src={logo} alt="logo redUsers" className="h-10" />
        <button
          className="block lg:hidden border border-gray-200 p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:text-white"
          onClick={changeVisible}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        {/* Lista de enlaces */}
        <ul
          className={
            datos
              ? "flex flex-col gap-9 h-screen justify-center items-center animate-fadeIn"
              : "hidden lg:flex lg:space-x-4 justify-end"
          }
        >
          <Link to="/">
            <a className="text-white hover:text-gray-300">inicio</a>
          </Link>
          <Link to="/somos">
            <a className="text-white hover:text-gray-300">quienes somos</a>
          </Link>
          <Link to="/ofrecemos">
            <a className="text-white hover:text-gray-300">que ofrecemos</a>
          </Link>
          <Link to="/llegar">
            <a className="text-white hover:text-gray-300">como llegar</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
