import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavItem {
  id: number;
  name: string;
  link: string;
}

const navItem: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Product",
    link: "#product",
  },
  {
    id: 3,
    name: "Services",
    link: "#services",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full top-8 z-50">
      <div className="bg-white container rounded-full py-5 px-10 flex items-center justify-between shadow-lg">
        <h1 className="font-bold text-3xl">LUPY</h1>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-600 text-2xl focus:outline-none"
          >
            {isOpen ? (
              <FaTimes size="30" color="#286157" />
            ) : (
              <FaBars size="30" color="#286157" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:static top-full left-0 w-full rounded-xl lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0 md:justify-center md:space-x-10">
            {navItem.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={closeMenu}
                  className=" text-gray-500 hover:text-primary transition-all duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="pb-6 lg:hidden flex justify-center w-full">
            <a
              href="#"
              className="bg-primary font-medium text-white px-6 py-2.5 rounded-full hover:bg-green-950 transition-all duration-500 block"
            >
              About us
            </a>
          </button>
        </nav>

        <button className="hidden lg:block">
          <a
            href="#"
            className="bg-primary font-medium text-white px-6 py-2.5 rounded-full hover:bg-green-950 transition-all duration-500"
          >
            About us
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
