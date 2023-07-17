import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Logo.png';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-gray-900 p-4 fixed bottom-0 w-full">
      <img src={logo} alt="logo redUsers" className="h-10" />
      <ul className="flex space-x-4">
        <li>
          <a href="https://github.com/tu-usuario-github" className="text-white hover:text-gray-300">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tu-perfil-linkedin" className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tu-perfil-instagram" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
