import Link from "next/link";
import { DonationsLinkProps } from "../../types";

export default function DonationsLink({ color, linkColor }: DonationsLinkProps) {
  return (
    <span className={`${color ? color : `text-packship-purple-lite`} text-sm pt-8 text-center`}>
      Built by <Link href="https://hatemsoliman.dev" target="_blank" className={`${linkColor ? linkColor : `text-blue-600`} underline`}>Hatem Soliman</Link>. Kindly <Link href="https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US" target="_blank" className={`${linkColor ? linkColor : `text-blue-600`} underline`}>accepting donations</Link> to fund this project
    </span>
  );
};
