import Link from "next/link";
import { footerLinks } from "../../constants";
import Image from "next/image";
import packshipLogo from "../../public/assets/PackShipLogo.svg";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 mt-16">
      <div className="kontainer">
        <div className="row flex flex-col gap-8">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src={packshipLogo}
                  alt="Packship logo"
                  width={144}
                  height={144}
                />
              </Link>
              <p className="text-white/60 text-sm max-w-md text-center md:text-left">
                An open-source tool that automates the NPM package lifecycle,
                from setup to publishing, so you can focus on writing great
                code.
              </p>
            </div>

            <div className="flex gap-8 flex-wrap justify-center md:justify-start">
              {footerLinks.map((section, index) => (
                <div key={index} className="min-w-32">
                  <h4 className="text-packship-purple-lite font-medium text-sm mb-3">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={
                            isAnchorLink(link.href)
                              ? `/${link.href}`
                              : link.href
                          }
                          className="text-white/70 hover:text-packship-purple-lite text-sm transition-colors"
                          target={isExternal(link.href) ? "_blank" : "_self"}
                          rel={
                            isExternal(link.href)
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <div className="text-white/60 text-sm">
              &copy; {currentYear} Packship. Released under the MIT License.
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/packship/packship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-packship-purple-lite transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/packshipcli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-packship-purple-lite transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://discord.gg/packship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-packship-purple-lite transition-colors"
                aria-label="Discord"
              >
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
