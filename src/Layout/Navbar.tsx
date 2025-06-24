import { LogoNav } from "@/components/LogoNav";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (
        scrollY > 50 ||
        location.pathname === "/artikel" ||
        location.pathname === "/tentangkami" ||
        location.pathname === "/galeri" ||
        location.pathname.startsWith("/artikel/detail/")
      ) {
        setIsDarkBackground(true);
      } else {
        setIsDarkBackground(false);
      }
    };

    // Cek saat pertama kali load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // Tambahkan dependency location.pathname

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-300 ${
        isDarkBackground
          ? "bg-white/80 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="">
        <div className="flex h-20 items-center justify-around">
          {/* Logo */}
          <div className="ml-3 flex items-center">
            <a href="/" className="flex items-center">
              <LogoNav />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors duration-200 ${
                isDarkBackground
                  ? "text-gray-800 hover:text-[#800000]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <Link
              to="/armada"
              className={`text-lg font-medium transition-colors duration-200 ${
                isDarkBackground
                  ? "text-gray-800 hover:text-[#800000]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Armada
            </Link>
            <Link
              to="/artikel"
              className={`text-lg font-medium transition-colors duration-200 ${
                isDarkBackground
                  ? "text-gray-800 hover:text-[#800000]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Artikel
            </Link>
            <Link
              to="/galeri"
              className={`text-lg font-medium transition-colors duration-200 ${
                isDarkBackground
                  ? "text-gray-800 hover:text-[#800000]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Galery
            </Link>
            <Link
              to="/tentangkami"
              className={`text-lg font-medium transition-colors duration-200 ${
                isDarkBackground
                  ? "text-gray-800 hover:text-[#800000]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Tentang Kami
            </Link>
          </div>
          {/* <>.</> */}

          {/* <button
            className={`hidden sm:block rounded-full px-6 py-2 text-lg font-medium transition-all duration-200 ${
              isDarkBackground
                ? "bg-[#800000] text-white hover:bg-[#600000]"
                : "bg-white text-[#800000] hover:bg-gray-100"
            }`}
          >
            Hubungi Kami
          </button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 lg:hidden"
          >
            <svg
              className={`h-6 w-6 ${
                isDarkBackground ? "text-gray-800" : "text-white"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <div className="space-y-1 rounded-lg bg-white/90 p-4 backdrop-blur-md">
            <Link
              to="/"
              className="block rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/armada"
              className="block rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Armada
            </Link>
            <Link
              to="/artikel"
              className="block rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Artikel
            </Link>
            <Link
              to="/galeri"
              className="block rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Galery
            </Link>
            <Link
              to="/tentangkami"
              className="block rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Tentang Kami
            </Link>
            {/* <button className="mt-4 w-full rounded-full bg-[#800000] px-6 py-2 text-white hover:bg-[#600000]">
              Hubungi Kami
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
