import { socials } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SocialsProps } from "../../types";

export default function Socials({ isMobile }: SocialsProps) {
  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <Link
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-wizard-white hover:text-wizard-gold"
          >
            <FontAwesomeIcon 
              icon={social.icon}
              size={isMobile ? "2x" : "lg"}
            />
          </Link>
        </li>
      ))}
    </>
  )
};
