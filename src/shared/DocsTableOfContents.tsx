// "use client";

// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// interface TocItem {
//   id: string;
//   text: string;
//   level: number;
// }

// export default function DocsTableOfContents() {
//   const [headings, setHeadings] = useState<TocItem[]>([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     // Reset headings when pathname changes
//     setHeadings([]);

//     // Find all h2 and h3 elements in the main content
//     const elements = document.querySelectorAll("main h2, main h3");

//     const items: TocItem[] = [];

//     elements.forEach((el) => {
//       // Generate an ID if the element doesn't have one
//       if (!el.id) {
//         el.id =
//           el.textContent
//             ?.toLowerCase()
//             .replace(/\s+/g, "-")
//             .replace(/[^\w-]/g, "") || "";
//       }

//       items.push({
//         id: el.id,
//         text: el.textContent || "",
//         level: el.tagName === "H2" ? 2 : 3,
//       });
//     });

//     setHeadings(items);
//   }, [pathname]);

//   if (headings.length === 0) {
//     return null;
//   }

//   return (
//     <div className="hidden lg:block w-[250px] ml-8 flex-shrink-0 sticky top-24 self-start z-[1]">
//       <div className="text-sm text-white/60 dark:text-white/60 light:text-gray-500 mb-2">
//         On this page
//       </div>
//       {/* <nav className="border-l border-white/10 pl-4">
//         <ul className="space-y-2">
//           {headings.map((heading) => (
//             <li
//               key={heading.id}
//               className={`${heading.level === 3 ? "ml-4" : ""}`}
//             >
//               <a
//                 href={`#${heading.id}`}
//                 className={`block py-1 text-sm hover:text-packship-purple-lite transition-colors ${
//                   heading.level === 2
//                     ? "text-white/80 dark:text-white/80 light:text-gray-700"
//                     : "text-white/60 dark:text-white/60 light:text-gray-600"
//                 }`}
//               >
//                 {heading.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav> */}
//     </div>
//   );
// }
