import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import Context from "../../Context/Context";

const Navbar = () => {
  const { setTheme, theme } = useContext(Context);
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full md:p-2 flex items-center justify-center">
      <div
        id="nav-container"
        className="w-full rounded-none md:w-3/5 bg-mainBlack dark:text-mainBlack text-white dark:bg-mainWhite py-1 px-3 md:rounded-full flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <img src="/assets/XEN_logo.png" alt="XEN_logo" className="w-12" />
        </div>
        {/* Nav Links */}
        <div>
          <ul className="flex items-center font-semibold font-electrolize justify-center gap-4">
            <li className="group relative overflow-hidden cursor-pointer">
              Home{" "}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mainWhite dark:bg-mainBlack transition-all duration-300 -translate-x-[150%] group-hover:translate-x-0"></span>
            </li>
            <li className="group relative overflow-hidden cursor-pointer">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mainWhite dark:bg-mainBlack  transition-all duration-300 -translate-x-[150%] group-hover:translate-x-0"></span>
            </li>
            <li className="group relative overflow-hidden cursor-pointer">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mainWhite dark:bg-mainBlack transition-all duration-300 -translate-x-[150%] group-hover:translate-x-0"></span>
            </li>
          </ul>
        </div>
        {/* Events */}
        <div className="flex items-center justify-center gap-2">
          <button className="transition-all duration-300" onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button className="bg-mainBlue text-mainBlack dark:text-mainWhite font-semibold font-electrolize p-2 rounded-full">
            Events
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
