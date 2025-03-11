// Define the sidebar structure (same as in DocsSidebar.tsx)
export const sidebarItems = [
  {
    title: "Quick Start",
    isExpandable: true,
    items: [
      { name: "What is PackShip?", href: "/docs" },
      { name: "Prerequisites", href: "/docs/prerequisites" },
      { name: "Create a Project", href: "/docs/create-project" },
    ],
  },
  {
    title: "Frontend Configuration",
    isExpandable: true,
    items: [
      { name: "Setup", href: "/docs/frontend-setup" },
      { name: "Webpack", href: "/docs/webpack" },
      { name: "Babel", href: "/docs/babel" },
    ],
  },
  {
    title: "Upgrade & Migrate",
    isExpandable: true,
    items: [
      { name: "Version Updates", href: "/docs/version-updates" },
      { name: "Migration Guide", href: "/docs/migration" },
    ],
  },
  {
    title: "Core Concepts",
    isExpandable: true,
    items: [
      { name: "Package Structure", href: "/docs/package-structure" },
      { name: "Dependencies", href: "/docs/dependencies" },
      { name: "Publishing", href: "/docs/publishing" },
    ],
  },
  {
    title: "Security",
    isExpandable: true,
    items: [
      { name: "Best Practices", href: "/docs/security-best-practices" },
      { name: "NPM Authentication", href: "/docs/npm-auth" },
    ],
  },
  {
    title: "CLI Commands",
    isExpandable: true,
    items: [
      { name: "init", href: "/docs/cli-init" },
      { name: "publish", href: "/docs/cli-publish" },
      { name: "Other Commands", href: "/docs/cli-other" },
    ],
  },
];

// Flatten the sidebar structure for easier navigation
const flattenedItems = sidebarItems.reduce((acc, section) => {
  return [...acc, ...section.items];
}, [] as { name: string; href: string }[]);

// Get the index of a page in the flattened structure
const getPageIndex = (currentPath: string) => {
  return flattenedItems.findIndex((item) => item.href === currentPath);
};

// Get the previous page
export const getPreviousPage = (currentPath: string) => {
  const currentIndex = getPageIndex(currentPath);
  if (currentIndex <= 0) return null;
  return flattenedItems[currentIndex - 1];
};

// Get the next page
export const getNextPage = (currentPath: string) => {
  const currentIndex = getPageIndex(currentPath);
  if (currentIndex === -1 || currentIndex === flattenedItems.length - 1) return null;
  return flattenedItems[currentIndex + 1];
};

// Navigation component props type
export interface DocNavigationProps {
  currentPath: string;
} 