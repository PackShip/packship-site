import { faEnvelope, faFilePdf, faCode, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faMedium, faSquareXTwitter, faBehance, faUpwork, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { Command } from '../types';

export const navLinks = [
  {
    name: "Guides",
    href: "/docs",
  },
  {
    name: "PackShip Pug",
    href: "/packship-pug",
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Get Started",
    href: "#start-packshipping"
  },
];

export const brands = [
  {
    title: "Ecaller",
    img: "/assets/EcallerBlack.svg",
  },
  {
    title: "QMaster",
    img: "/assets/QMasterBlack.svg",
  },
];

export const footerLinks = [
  {
    title: "Project",
    links: [
      {
        name: "Get Started",
        href: "#start-packshipping",
      },
      {
        name: "Documentation",
        href: "/docs",
      },
      {
        name: "PackShip Pug",
        href: "/packship-pug",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Announcements",
        href: "/announcements",
      },
      {
        name: "GitHub",
        href: "https://github.com/CodeNKoffee/packship",
      },
      {
        name: "Report an Issue",
        href: "https://github.com/CodeNKoffee/packship/issues/new",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Discord",
        href: "https://discord.gg/5REXGVyRgV",
      },
      {
        name: "GitHub",
        href: "https://github.com/CodeNKoffee/packship",
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/packship-npm/",
      },
      {
        name: "Whop",
        href: "https://whop.com/packship",
      },
      {
        name: "X (formerly Twitter)",
        href: "https://x.com/h4temsoliman",
      },
      {
        name: "Contribute",
        href: "https://github.com/CodeNKoffee/packship/blob/master/CONTRIBUTING.md",
      },
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Sponsor",
        href: "/sponsor-packship",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Open Source License",
        href: "https://github.com/CodeNKoffee/packship/blob/master/LICENSE.md",
      },
      {
        name: "Code of Conduct",
        href: "https://github.com/CodeNKoffee/packship/blob/master/CODE_OF_CONDUCT.md",
      },
      {
        name: "Contributing Guidelines",
        href: "https://github.com/CodeNKoffee/packship/blob/master/CONTRIBUTING.md",
      },
    ],
  },
  {
    title: "By the Maker of PackShip",
    links: [
      {
        name: "React Framify",
        href: "https://react-framify.hatemsoliman.dev/",
      },
      {
        name: "GitHub Edge",
        href: "https://github-edge.hatemsoliman.dev/",
      },
      {
        name: "Memento",
        href: "https://memento-game.firebaseapp.com/",
      },
      {
        name: "LayerLeap",
        href: "https://layerleap.hatemsoliman.dev/",
      },
      {
        name: "Quantum Fly",
        href: "https://quantumfly.hatemsoliman.dev/",
      },
      {
        name: "Polar Paradise",
        href: "https://polarparadise.hatemsoliman.dev/",
      },
      {
        name: "Splanda Media",
        href: "https://linkedin.com/company/splanda-media/",
      },
      {
        name: "Tawabiry",
        href: "https://linkedin.com/company/tawabiry/",
      },
    ],
  },
];

export const socials = [
  {
    name: "Portfolio",
    link: "https://hatemsoliman.dev",
    icon: faFaceSmile,  // Use the imported icon object
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/h4temsoliman/",
    icon: faLinkedinIn,  // Use the imported icon object
  },
  {
    name: "GitHub",
    link: "https://github.com/codenkoffee",
    icon: faGithub,  // Use the imported icon object
  },
  {
    name: "Email",
    link: "mailto:hatemthedev@gmail.com",
    icon: faEnvelope,  // Use the imported icon object
  },
  {
    name: "Paypal",
    link: "https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US",
    icon: faPaypal,  // Use the imported icon object
  },
];

export const features = [
  {
    title: "Automated Setup",
  },
  {
    title: "Efficient Workflow",
  },
  {
    title: "User-Friendly CLI",
  },
  {
    title: "Secure Publishing",
  },
  {
    title: "Minimal Overhead",
  },
  {
    title: "Cross-Platform Support",
  },
];

export const painPoints = [
  {
    title: "Manual Project Setup",
    hours: "4 hrs",
    description: "configuring package structure",
    creatorExperience: "6 months"
  },
  {
    title: "Inefficient Development Cycles",
    hours: "6 hrs",
    description: "managing build and release processes",
    creatorExperience: "2 days"
  },
  {
    title: "Complex Command-Line Tools",
    hours: "4 hrs",
    description: "learning and debugging CLI commands",
    creatorExperience: "1 week"
  },
  {
    title: "Publishing Security Risks",
    hours: "2 hrs",
    description: "ensuring secure package distribution",
    creatorExperience: "15 minutes*"
  },
  {
    title: "Development Overhead",
    hours: "3 hrs",
    description: "dealing with unnecessary dependencies",
    creatorExperience: "4 hrs"
  },
  {
    title: "Platform Compatibility Issues",
    hours: "2 hrs",
    description: "fixing cross-platform bugs",
    creatorExperience: "24 hours"
  },
];

export const commands: Command[] = [
  {
    text: "# Initialize Your Project",
    type: "comment",
  },
  {
    text: "packship init",
    type: "command",
  },
  {
    text: "# Customize Your Package",
    type: "comment",
  },
  {
    text: "cd my-package",
    type: "command",
  },
  {
    text: "// Add your changes here",
    type: "code",
  },
  {
    text: "# Automate Your Workflow",
    type: "comment",
  },
  {
    text: "packship publish",
    type: "command",
  },
];

export const tweetUrls = [
  "https://x.com/Saas_Dude/status/1837062465793757214",
  "https://x.com/pravanjanHQ/status/1837072828174323912",
  "https://x.com/philipp_parzer/status/1837093286114218118",
  "https://x.com/philipp_parzer/status/1837100846649135341",
  "https://x.com/crptwtf/status/1837109244476231822",
  "https://x.com/andrecasaldev/status/1837171793351598239",
];

// Job Types
export interface JobListing {
  id: string;
  title: string;
  type: string;
  location: string;
  category: string;
  summary: string;
  responsibilities: string[];
}

export interface JobDetails {
  aboutTeam: string;
  aboutYou: string[];
  benefits: string[];
  howToApply: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "software-engineer-metrics-telemetry",
    title: "Software Engineer, Metrics & Telemetry",
    type: "Open Source Contributor",
    location: "Remote - Worldwide",
    category: "Engineering",
    summary: "Help us shape how we understand PackShip's growth. You'll work with Umami, PostHog, and custom telemetry to design scalable, privacy-aware insights across CLI usage, installs, and feature adoption.",
    responsibilities: [
      "Improve real-time metrics and dashboarding.",
      "Collaborate with the CLI team to embed insights directly into dev tooling.",
      "Design systems to help guide product development and release cadence."
    ],
  },
  {
    id: "software-engineer-cli-development",
    title: "Software Engineer, CLI Development (Node.js/TypeScript)",
    type: "Open Source Contributor",
    location: "Remote - Worldwide",
    category: "Engineering",
    summary: "Our CLI is the core of PackShip. You'll help us architect new features like prebuilt templates, remote deployment logic, and bundling automations.",
    responsibilities: [
      "Work with modern TypeScript, Node.js, and the monorepo ecosystem.",
      "Define the developer workflows of the future.",
      "Contribute to our open-source roadmap and collaborate on DX principles."
    ],
  },
  {
    id: "technical-writer-documentation",
    title: "Technical Writer & Documentation Engineer",
    type: "Volunteer (Immediate)",
    location: "Remote - Worldwide",
    category: "Documentation",
    summary: "We believe docs are part of the product. You'll own the docs experience — from onboarding guides and usage tutorials to contribution guides and API references.",
    responsibilities: [
      "Work closely with engineering to document new features.",
      "Craft engaging tutorials and write for real-world use cases.",
      "Improve our docs site experience, structure, and accessibility."
    ],
  },
  {
    id: "frontend-engineer-web",
    title: "Frontend Engineer, Web & Docs Site",
    type: "Volunteer (Immediate)",
    location: "Remote - Worldwide",
    category: "Engineering",
    summary: "Help us build a sleek and developer-focused PackShip web experience.",
    responsibilities: [
      "Own and maintain the PackShip.dev site.",
      "Help design and implement our documentation system (likely with MDX or custom CMS).",
      "Contribute to UI/UX that makes our tools more discoverable and intuitive."
    ],
  },
];

export const jobDetails: JobDetails = {
  aboutTeam: "We're a small and fast-moving group of developers and builders with deep roots in open source, DX, and developer communities. PackShip began as a weekend project and has evolved into a full-fledged devtool adopted across several ecosystems. Our mission is simple: make package publishing super simple, and empower every developer to ship confidently. We build in public, value async-first workflows, and care deeply about quality, simplicity, and performance.",

  aboutYou: [
    "Enjoy building tools for developers and have experience in open-source ecosystems.",
    "Care about clean, maintainable code (especially in TypeScript/Node).",
    "Have an eye for developer experience — from docs to error messages to logs.",
    "Are excited by small teams, fast iteration, and ownership.",
    "Value clear communication and async workflows.",
    "Experience with CLIs, telemetry, bundlers, or technical writing is a huge plus — but we value curiosity and initiative even more."
  ],

  benefits: [
    "💻 Remote-first, async-friendly collaboration (work from anywhere)",
    "🧭 Ownership over your work and roadmap input",
    "📚 Open-source portfolio you can proudly showcase",
    "💬 Community recognition across our developer and builder network",
    "🛠️ Paid opportunities for contributors who help shape key product pillars",
    "⚡ Early access to future PackShip products and internal tools"
  ],

  howToApply: [
    "Apply on our careers page OR send us a message on LinkedIn",
    "A short intro",
    "What role(s) you're interested in",
    "A link to your GitHub, website, or anything you're proud of"
  ]
};