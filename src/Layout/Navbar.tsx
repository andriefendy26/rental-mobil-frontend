import { LogoNav } from "@/components/LogoNav";
import "react";
import Logo from "../assets/Logo.png";

export const Navbar = () => {
  return (
    <div className="navbar fixed left-0 top-0 z-50 w-full bg-black/50 shadow-sm backdrop-blur-md ">
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
              <a>Home</a>
            </li>
            <li>
              <a>Layanan</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Tentang</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:hidden ">
          <img className="w-28" src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-5 px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Layanan</a>
          </li>
          <LogoNav></LogoNav>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Tentang</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};
