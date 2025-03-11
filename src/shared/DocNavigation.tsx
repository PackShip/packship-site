import React from "react";
import {
  getPreviousPage,
  getNextPage,
  DocNavigationProps,
} from "./docsNavigation";
import PrevPageButton from "./PrevPageButton";
import NextPageButton from "./NextPageButton";

export default function DocNavigation({ currentPath }: DocNavigationProps) {
  const prevPage = getPreviousPage(currentPath);
  const nextPage = getNextPage(currentPath);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="w-full md:w-1/2">
        {prevPage && (
          <PrevPageButton title={prevPage.name} href={prevPage.href} />
        )}
      </div>
      <div className="w-full md:w-1/2">
        {nextPage && (
          <NextPageButton title={nextPage.name} href={nextPage.href} />
        )}
      </div>
    </div>
  );
}
