import React from "react";
import LogoMJI from "../../assets/LogoMJI.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Beranda",
    link: "#home",
  },
  {
    id: 2,
    name: "Tentang Kami",
    link: "#tentangkami",
  },
  {
    id: 3,
    name: "Produk",
    link: "#produk",
  },
  {
    id: 4,
    name: "Testimonial",
    link: "#testimonial",
  },
];

const Navbar = () => {
  const scrollToSection = (event, selector) => {
    event.preventDefault(); // Mencegah perilaku default link
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 w-full z-50">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={LogoMJI} alt="LogoMJI" className="w-24" />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      onClick={(event) => scrollToSection(event, menu.link)}
                      className="inline-block py-4 px-4 transition-colors duration-300 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
