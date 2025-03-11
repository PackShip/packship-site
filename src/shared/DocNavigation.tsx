import React from "react";
import {
  getPreviousPage,
  getNextPage,
  isFirstPage,
  isLastPage,
  DocNavigationProps,
} from "./docsNavigation";
import PrevPageButton from "./PrevPageButton";
import NextPageButton from "./NextPageButton";

export default function DocNavigation({ currentPath }: DocNavigationProps) {
  const prevPage = getPreviousPage(currentPath);
  const nextPage = getNextPage(currentPath);

  // If there's only one button (first or last page), it should occupy full width
  const singleButton = isFirstPage(currentPath) || isLastPage(currentPath);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {prevPage && (
        <div className={`w-full ${!singleButton ? "md:w-1/2" : ""}`}>
          <PrevPageButton title={prevPage.name} href={prevPage.href} />
        </div>
      )}
      {nextPage && (
        <div className={`w-full ${!singleButton ? "md:w-1/2" : ""}`}>
          <NextPageButton title={nextPage.name} href={nextPage.href} />
        </div>
      )}
    </div>
  );
}
