import { LogoNav } from "@/components/LogoNav";
import "react";
import { useEffect, useState } from "react";
// import Logo from "../assets/Logo.png";

export const Navbar = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Misalnya, ubah jadi putih setelah scroll 300px
      if (scrollY > 600) {
        setIsDarkBackground(true);
      } else {
        setIsDarkBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar fixed z-[9999] bg-transparent  shadow-sm  lg:px-40 `}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-1 menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost">
          <LogoNav></LogoNav>
        </a>
      </div>
      <div
        className={`navbar-center hidden ${
          isDarkBackground ? "text-black" : "text-white"
        } lg:flex`}
      >
        <ul className="menu menu-horizontal gap-5 px-1 tracking-widest lg:text-lg">
          <li>
            <a>Home </a>
          </li>
          <li>
            <a>Layanan</a>
          </li>
          <li>
            <a>Artikel</a>
          </li>
          <li>
            <a>Tentang Kami</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};
