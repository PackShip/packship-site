import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface NextPageButtonProps {
  title: string;
  href: string;
}

export default function NextPageButton({ title, href }: NextPageButtonProps) {
  return (
    <Link
      href={href}
      className="mt-12 flex flex-col items-end w-full border border-white/10 dark:border-white/10 light:border-gray-200 rounded-lg p-6 bg-black/10 hover:bg-black/20 transition-colors group"
    >
      <div className="text-sm text-white/60 dark:text-white/60 light:text-gray-500 mb-2">
        Next
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl font-medium text-packship-purple-lite">
          {title}
        </span>
        <FaArrowRight className="text-packship-purple-lite group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
