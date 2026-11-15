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

export const projects: Project[] = [
  {
    title: "Plency",
    category: "Full Stack",
    categoryKey: "full stack",
    img: "/plency.png",
    alt: "Plency Agency",
    href: "https://plency.com/",
    live: "https://plency.com/",
    github: "https://github.com/rahul24167/plency",
  },
  {
    title: "Bal-Workout Planner",
    category: "Backend",
    categoryKey: "backend",
    img: "/bal.png",
    alt: "Bal-Workout Planner",
    href: "https://bal-rho.vercel.app/",
    live: "https://bal-rho.vercel.app/",
    github: "https://github.com/rahul24167/bal",
  },
  {
    title: "NIT Srinagar Alumini Portal",
    category: "Full Stack",
    categoryKey: "full stack",
    img: "/NitAlumini.png",
    alt: "NIT-Srinagar-Alumini",
    href: "https://nit-alumini.vercel.app/",
    live: "https://nit-alumini.vercel.app/",
    github: "https://github.com/rahul24167/NIT-Alumini",
  },
  {
    title: "Your Blog",
    category: "Backend",
    categoryKey: "backend",
    img: "/blogProject.png",
    alt: "Your Blog",
    href: "https://medium-beige-iota.vercel.app/",
    live: "https://medium-beige-iota.vercel.app/",
    github: "https://github.com/rahul24167/medium-",
  },
  {
    title: "interactive Pricing Component",
    category: "Frontend",
    categoryKey: "frontend",
    img: "/pricingComp.png",
    alt: "interactive-pricing-component",
    href: "#",
    live: "https://interactive-pricing-component-azure.vercel.app/",
    github: "https://github.com/rahul24167/interactive-pricing-component",
  },
];
