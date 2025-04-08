"use client";

import Link from "next/link";
import { navLinks } from "../../constants";
import Image from "next/image";
import packshipLogo from "../../public/assets/PackShipLogo.svg";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import V2Banner from "./V2Banner";

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

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <V2Banner />
      <nav
        className={`fixed top-[32px] left-0 right-0 z-30 transition-all duration-300 ${
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
            <div className="hidden lg:flex gap-4 items-center">
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
              <span className="dark:text-white/80 light:text-gray-700">
                {" "}
                |{" "}
              </span>
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
            <div className="lg:hidden relative flex justify-end items-end gap-2">
              <ThemeToggle />
              <button
                onClick={handleToggle}
                className="text-packship-purple-lite p-2"
                aria-label="Toggle menu"
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col overflow-hidden">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="flex-1">
              <Image
                src={packshipLogo}
                alt="PackShip logo"
                width={150}
                height={40}
                className="h-auto"
              />
            </div>
            <button
              onClick={closeMenu}
              className="text-packship-purple-lite p-2"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Main Navigation Items */}
          <div className="px-6 py-4">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/docs"
                  className="block text-white text-2xl font-semibold hover:text-packship-purple-lite transition-colors"
                  onClick={closeMenu}
                >
                  Guides
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <Link
                  href="/packship-pug"
                  className="text-white text-2xl font-semibold hover:text-packship-purple-lite transition-colors"
                  onClick={closeMenu}
                >
                  PackShip Pug
                </Link>
                <span className="bg-green-500 text-xs text-white px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block text-white text-2xl font-semibold hover:text-packship-purple-lite transition-colors"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
