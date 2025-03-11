import Link from "next/link";
import { DonationsLinkProps } from "../../types";
import { useTheme } from "@/context/ThemeContext";

export default function DonationsLink({
  color,
  linkColor,
}: DonationsLinkProps) {
  const { theme } = useTheme();
  const defaultColor =
    theme === "light" ? "text-gray-600" : "text-packship-purple-lite";
  const defaultLinkColor = theme === "light" ? "text-blue-600" : "text-white";

  return (
    <span
      className={`${color ? color : defaultColor} text-sm pt-8 text-center`}
    >
      Built by{" "}
      <Link
        href="https://hatemsoliman.dev"
        target="_blank"
        className={`${linkColor ? linkColor : defaultLinkColor} underline`}
      >
        Hatem Soliman
      </Link>
      . Kindly{" "}
      <Link
        href="https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US"
        target="_blank"
        className={`${linkColor ? linkColor : defaultLinkColor} underline`}
      >
        accepting donations
      </Link>{" "}
      to fund this project
    </span>
  );
}
