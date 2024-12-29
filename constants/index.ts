import { faEnvelope, faFilePdf, faCode, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faMedium, faSquareXTwitter, faBehance, faUpwork, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { Command } from '../types';

export const navLinks = [
  { 
    name: "Documentation", 
    href: "/docs",
  },
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
    title: "Links",
    links: [
      { 
        name: "Purchase", 
        href: "#start-packshipping",
      },
      { 
        name: "Develop", 
        href: "/docs", 
      },
      { 
        name: "Contact", 
        href: "mailto:packshipcli@gmail.com",
      },
      { 
        name: "Fund Me", 
        href: "https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { 
        name: "Terms of Services", 
        href: "/terms-of-services", 
      },
      { 
        name: "Privacy Notice", 
        href: "/privacy-notice", 
      },
      { 
        name: "Refund Policy", 
        href: "/refund-policy", 
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
        href: "https://splandamedia.com/",
      },
      { 
        name: "QMaster", 
        href: "https://linkedin.com/company/qmasterapp/",
      },
    ],
  }
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
    link: "mailto:packshipcli@gmail.com",
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