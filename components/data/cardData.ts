// components/data/cardData.ts

export const cardData = [
  {
    title: "Modern Todo App",
    description: "Full Stack Project",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    footerText1: "HTML, CSS and JavaScript",
    footerText2: "Modern Todo App",
    footerButtonText: "Live Demo",
    liveUrl: "https://shri1918.github.io/modern-todolist/",
    // projectImages: [
    //   "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   "https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    // ],
  },
  {
    title: "Analog-Clock App",
    description: "Web Application",
    imageUrl:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    footerText1: "HTML, CSS",
    footerText2: "Analog-Clock",
    footerButtonText: "Live Demo",
    liveUrl: "https://shri1918.github.io/Analog-Clock/",
  },
  {
    title: "ERP Dashboard",
    description: "Frontend Development",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    footerText1: "Next.js,TypeScript, TailwindCSS",
    footerText2: "Real-time ERP Dashboard",
    footerButtonText: "Live Demo",
    liveUrl: "https://erpdashboard-r2fja5m2q-shri1918s-projects.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Frontend Development",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    footerText1: "Next.js, HeroUI",
    footerText2: "Modern and responsive design",
    footerButtonText: "View Site",
  },
  {
    title: "Markdown Previewer",
    description: "Full Stack Project",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    footerImage: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    footerText1: "Next.js, MongoDB",
    footerText2: "Dynamic content management",
    footerButtonText: "Live Demo",
    liveUrl: "https://markdown-previewer-gamma-lilac.vercel.app/",
  },
  {
    title: "Music Drum Player",
    description: "Full Stack Project",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    footerImage: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    footerText1: "React.js, MongoDB",
    footerText2: "Music Drum Player",
    footerButtonText: "Live Demo",
    liveUrl: "https://dream-music-jazawuc0y-shri1918s-projects.vercel.app",
  },
];

export interface CardType {
  title: string;
  description: string;
  imageUrl: string;
  footerText1?: string;
  footerText2?: string;
  footerButtonText?: string;
  footerImage?: string;
  liveUrl?: string;
  projectImages?: string[];
}

// Skills Data with Ratings
export const skills = [
  {
    name: "React.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    rating: 4,
  },
  {
    name: "Next.js",
    lightSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    darkSrc:
      "https://i.pinimg.com/736x/f2/74/d6/f274d61e1f436113340400deb618a512.jpg",
    rating: 4,
  },
  {
    name: "JavaScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    rating: 4,
  },
  {
    name: "Node.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    rating: 4,
  },
  {
    name: "MongoDB",
    src: "https://www.svgrepo.com/show/331488/mongodb.svg",
    rating: 3,
  },
  {
    name: "Python",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    rating: 4,
  },
  {
    name: "Angular",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    rating: 3,
  },
  {
    name: "Vue.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    rating: 3,
  },
  {
    name: "HTML & CSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    rating: 5,
  },
  {
    name: "TypeScript",
    src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    rating: 3,
  },
  {
    name: "Electron.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg",
    rating: 3,
  },
  {
    name: "Google Apps Script",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg",
    rating: 2,
  },
];
