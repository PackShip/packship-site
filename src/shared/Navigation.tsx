import Link from "next/link";
import { navLinks } from "../../constants";
import Image from "next/image";
import packshipLogo from "../../public/assets/PackShipLogo.svg";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled
          ? "py-0 dark:bg-black/60 light:bg-white/60 backdrop-blur-sm"
          : "py-1 bg-transparent"
      }`}
    >
      <div className="kontainer">
        <div className="w-full row flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <figure>
              <Image
                src={packshipLogo}
                alt="PackShip logo"
                width={150}
                height={40}
                className="h-auto"
              />
            </figure>
          </Link>
          <div className="hidden md:flex gap-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                  className={`${
                    link.name === "Get Started"
                      ? "bg-packship-purple-lite text-black hover:bg-packship-purple-lite/90 dark:text-black light:text-black"
                      : "dark:text-white/80 light:text-gray-700 hover:text-packship-purple-lite"
                  } font-medium px-4 py-2 rounded-md transition-all relative`}
                  target={isExternal(link.href) ? "_blank" : "_self"}
                  rel={
                    isExternal(link.href) ? "noopener noreferrer" : undefined
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <span className="dark:text-white/80 light:text-gray-700"> | </span>
            <li>
              <a
                href="https://github.com/CodeNKoffee/packship"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white/80 light:text-gray-700 hover:text-packship-purple-lite transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </div>
          <div className="md:hidden relative flex justify-end items-end gap-2">
            <ThemeToggle />
            <button
              onClick={handleToggle}
              className="text-packship-purple-lite p-2"
            >
              <FaBars size={24} />
            </button>
            {isOpen && (
              <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 dark:bg-black/95 light:bg-white/95 flex flex-col items-center justify-center z-50">
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-8 text-packship-purple-lite"
                >
                  <FaTimes size={32} />
                </button>
                <div className="flex flex-col items-center gap-6">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`${
                        link.name === "Get Started"
                          ? "bg-packship-purple-lite text-black"
                          : "dark:text-white light:text-gray-900"
                      } font-medium px-6 py-3 rounded-md relative`}
                      target={isExternal(link.href) ? "_blank" : "_self"}
                      rel={
                        isExternal(link.href)
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <a
                    href="https://github.com/CodeNKoffee/packship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-white light:text-gray-900 mt-4"
                    onClick={closeMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
