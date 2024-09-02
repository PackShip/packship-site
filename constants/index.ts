import { faEnvelope, faFilePdf, faCode, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faMedium, faSquareXTwitter, faBehance, faUpwork, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { Command } from '../types';

export const navLinks = [
  // { 
  //   name: "Getting Started", 
  //   href: "/getting-started",
  // },
  // { 
  //   name: "GitHub",
  //   href: "https://github.com/CodeNKoffee/react-framify",
  // },
  // { 
  //   name: "Need Help?", 
  //   href: "/contact"
  // },
  { 
    name: "Try It!", 
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
    title: "Docs",
    links: [
      { 
        name: "Develop", 
        href: "/getting-started", 
      },
    ],
  },
  {
    title: "Community",
    links: [
      { 
        name: "Feedback", 
        href: "/contact", 
      },
    ],
  },
  {
    title: "More",
    links: [
      { 
        name: "Purchase", 
        href: "https://github.com/CodeNKoffee/react-framify",
      },
      { 
        name: "Contact", 
        href: "https://www.npmjs.com/package/react-framify",
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
];

export const commands: Command[] = [
  {
    text: "# Initialize Your Project",
    type: "comment",
  },
  {
    text: "npx -y packship init",
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
    text: "npm publish",
    type: "command",
  },
];