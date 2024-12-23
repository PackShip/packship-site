import Link from "next/link";
import { navLinks } from "../../constants";
import Image from "next/image";
import packshipLogo from "../../public/assets/PackShipLogo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="kontainer">
        <div className="w-full row flex justify-between items-center">
          <Link href="/" className="w-1/3 text-3xl text-packship-purple font-bold">
            <figure>
              <Image
                src={packshipLogo}
                alt="Packship logo"
                width={150}
              />
            </figure>
          </Link>
          <div className="hidden md:flex gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                  className={`${link.name === "Try It!" ? "bg-packship-purple text-white hover:bg-purple-700" : "text-white hover:text-packship-purple-lite"} font-semibold px-8 py-4 rounded-full transition`}
                  target={isExternal(link.href) ? "_blank" : "_self"}
                  rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="md:hidden w-1/3 relative flex justify-end items-end">
            <button onClick={handleToggle} className="text-packship-purple-lite">
              <FaBars size={24} />
            </button>
            {isOpen && (
              <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
                <button onClick={closeMenu} className="absolute top-4 right-8 text-packship-purple-lite">
                  <FaTimes size={32} />
                </button>
                <div className="flex flex-col items-center">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`${link.name === "Try It!" && "bg-packship-purple-lite"} w-full text-center text-white font-bold px-8 py-4 rounded-full my-4`}
                      target={isExternal(link.href) ? "_blank" : "_self"}
                      rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
