import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  window.onscroll = function () {
    const scrollUp = document.querySelector(".navbarHide");
    if (window.scrollY > 560) {
      scrollUp.classList.add("-top-32");
    } else {
      scrollUp.classList.remove("-top-32");
    }
  };

  return (
    <header
      className={`${
        toggle ? "backdrop-blur-md" : "bg-white"
      } w-full duration-300 ease-in-out fixed z-10 navbarHide`}
    >
      <nav
        className={`${
          toggle ? "h-screen" : "h-[100px]"
        } flex duration-300 ease-in-out justify-between items-center gap-x-4 
          max-w-screen-lg mx-auto max-xl:mx-8`}
      >
        <a
          className={`${
            toggle ? "hidden" : "block"
          } max-md:absolute max-md:-top-6 max-md:left-4 font-semibold flex`}
          href=""
        >
          <img src={Logo} width="150px" alt="" />
        </a>
        <ul
          className={`${
            toggle ? "max-md:block" : "max-md:hidden"
          } flex gap-8 duration-300 ease-in-out max-md:left-0 max-md:absolute 
            max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center`}
        >
          <li className="">
            <a
              href=""
              className="font-semibold hover:text-neutral-950 duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-semibold hover:text-neutral-950 duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="font-semibold hover:text-neutral-950 duration-300"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-semibold hover:text-neutral-950 duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          onClick={handleToggle}
          className="text-2xl cursor-pointer duration-300 text-neutral-800
                  hover:text-neutral-950 absolute top-9 right-8 hidden max-md:block"
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
