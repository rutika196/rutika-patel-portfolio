import logo from "../assets/Rp_logo_gray600.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rutika-patel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600 transition duration-300" />
        </a>
        <a
          href="https://github.com/rutika196"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-700 transition duration-300" />
        </a>
      </div>
    </nav>
  );
};
