import Link from "next/link";
import { navLinks } from "../../constants"; 
import Image from "next/image";
import packshipLogo from "../../public/assets/packship-red-logo.svg"

const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function Navigation() {
  return (
    <nav>
      <div className="kontainer">
        <div className="row flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl text-packship-red font-bold"
          >
            <Image 
              src={packshipLogo}
              alt="Packship logo"
            />
          </Link>
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="bg-packship-red text-white font-bold px-8 py-4 rounded-full"
                  target={isExternal(link.href) ? "_blank" : "_self"}
                  rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}