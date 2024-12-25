import Link from "next/link";
import { footerLinks } from "../../constants";
import Image from "next/image";
import packshipLogo from "../../public/assets/PackShipLogo.svg";

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-framify-black w-full py-8 md:py-32 flex justify-start md:justify-between items-start">
      <div className="kontainer">
        <div className="row flex flex-col md:flex-row-reverse gap-16 md:gap-0 md:items-start">
          <ul className="w-full md:w-1/2 flex flex-col md:flex-row gap-8 md:gap-24">
            {footerLinks.map((section, index) => (
              <li key={index} className="flex flex-col">
                <h4 className="text-left text-packship-purple-lite font-semibold mb-4">{section.title}</h4>
                <ul className="text-left flex flex-col gap-2 items-start justify-start">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                        className="block hover:underline text-white"
                        target={isExternal(link.href) ? "_blank" : "_self"}
                        rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="text-left w-full *: md:w-1/4 flex flex-col items-center md:items-start justify-start">
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
