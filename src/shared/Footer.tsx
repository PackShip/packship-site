import Link from "next/link";
import { footerLinks } from "../../constants";
import Image from "next/image";
import packshipLogo from "../../public/assets/PackShipLogo.svg";

const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-framify-black w-full py-8 sm:py-32 flex justify-start sm:justify-between items-start">
      <div className="kontainer">
        <div className="row flex flex-col sm:flex-row gap-16 sm:gap-0">
          <ul className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-24">
            {footerLinks.map((section, index) => (
              <li key={index} className="flex flex-col">
                <h4 className="text-left text-packship-purple-lite font-semibold mb-4">{section.title}</h4>
                <ul className="text-left flex flex-col gap-2 items-start justify-start">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        className="block hover:underline text-white"
                        href={link.href}
                        target={isExternal(link.href) ? "_blank" : "_self"}
                        rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="text-left w-full *: sm:w-1/4 flex flex-col items-center sm:items-start justify-start">
            <Link
              href="/"
              className="text-3xl"
            >
              <Image
                src={packshipLogo}
                alt="Packship logo"
              /> 
            </Link>
            <span className="text-xs font-medium mt-4 text-white">
              Copyright &copy; {currentYear} Hatem Soliman and the Packship documentation authors.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
