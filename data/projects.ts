export interface Project {
  title: string;
  category: string;
  categoryKey: string;
  img: string;
  alt: string;
  href: string;
  live: string;
  github: string;
}

// NOTE: cover images are reused placeholders from public/. Drop real
// screenshots into public/ and update the `img` fields to replace them.
export const projects: Project[] = [
  {
    title: "Perpetual Futures Exchange",
    category: "Backend",
    categoryKey: "backend",
    img: "/bal.png",
    alt: "Perpetual Futures Exchange",
    href: "https://github.com/rahul24167/perpetual-futures",
    live: "https://github.com/rahul24167/perpetual-futures",
    github: "https://github.com/rahul24167/perpetual-futures",
  },
  {
    title: "Prediction Market",
    category: "Full Stack",
    categoryKey: "full stack",
    img: "/blogProject.png",
    alt: "Prediction Market",
    href: "https://github.com/rahul24167/pridiction-market",
    live: "https://github.com/rahul24167/pridiction-market",
    github: "https://github.com/rahul24167/pridiction-market",
  },
  {
    title: "Terminal Coding Agent",
    category: "Backend",
    categoryKey: "backend",
    img: "/pricingComp.png",
    alt: "Terminal Coding Agent",
    href: "https://github.com/rahul24167",
    live: "https://github.com/rahul24167",
    github: "https://github.com/rahul24167",
  },
  {
    title: "CreativeQuarter.in",
    category: "Full Stack",
    categoryKey: "full stack",
    img: "/plency.png",
    alt: "CreativeQuarter.in",
    href: "https://www.creativequarter.in/",
    live: "https://www.creativequarter.in/",
    github: "https://github.com/rahul24167",
  },
  {
    title: "Job Board",
    category: "Full Stack",
    categoryKey: "full stack",
    img: "/NitAlumini.png",
    alt: "Job Board",
    href: "https://github.com/rahul24167/job-board",
    live: "https://github.com/rahul24167/job-board",
    github: "https://github.com/rahul24167/job-board",
  },
];
