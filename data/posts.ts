export interface Post {
  href: string;
  category: string;
  date: string;
  title: string;
  text: string;
}

export const posts: Post[] = [
  {
    href: "https://rahul-choudhary.hashnode.dev/the-problem-with-static-site-generation-and-how-isr-solves-it",
    category: "JavaScript",
    date: "Aug 01, 2025",
    title:
      "The Problem with Static Site Generation — and How ISR Solves It",
    text: "A simple question about the limits of Server-Side Rendering (SSR) led me down a deep rabbit hole… and that’s when I discovered something powerful: Incremental Static Regeneration (ISR) I always thought Static Site Generation (SSG) was enough — until I hit the scale problem. “What happens when your blog grows from 100 to 100,000 posts?” Do you rebuild the whole site every time? What about CDN caching? Real-time updates? Turns out, ISR is the scalable answer that combines the best of SSG and SSR. It’s efficient, flexible, and built for performance at scale.",
  },
  {
    href: "https://rahul-choudhary.hashnode.dev/how-to-handle-input-in-javascript-for-coding-interviews",
    category: "JavaScript",
    date: "May 23, 2025",
    title: "How to Handle Input in JavaScript for Coding Interviews",
    text: "When it comes to preparing for data structures and algorithms (DSA) interviews, most resources and platforms showcase input handling in C++ (cin >>) or Python (input()). But what about JavaScript? Its input handling can be confusing for beginners, especially when tackling problems locally or on certain online judges.",
  },
  {
    href: "https://rahul-choudhary.hashnode.dev/fixing-continuous-re-renders-in-react-understanding-passing-by-reference-vs-passing-by-value-and-application-of-spreed-operator",
    category: "Backend",
    date: "Jan 29, 2025",
    title:
      "Fixing Continuous Re-Renders in React: Understanding Passing by Reference vs. Passing by Value and application of spread operator",
    text: "Recently, while working on a React project, I encountered an issue where my component was re-rendering continuously despite implementing a debounce hook(It is just a fancy useEffect hook wraped with some additional logic). This led to unnecessary API calls and performance issues. After debugging, I realized the problem was due to how dependencies were passed in the useDebounce hook. In this post, I'll explain the issue, why it happened, and how I fixed it.",
  },
  {
    href: "https://rahul-choudhary.hashnode.dev/deploying-mern-applications-on-aws-with-a-unified-domain",
    category: "Backend",
    date: "Jan 21, 2025",
    title: "Deploying MERN Applications on AWS with a Unified Domain",
    text: "Deploying a MERN (MongoDB, Express, React, Node.js) stack application on AWS involves hosting the frontend and backend on the same domain while ensuring scalability, security, and performance. This guide outlines the steps to achieve this using an Application Load Balancer (ALB) in AWS.",
  },
  {
    href: "https://rahul-choudhary.hashnode.dev/distribution-of-compute-to-client-system",
    category: "Backend",
    date: "Jan 10, 2025",
    title: "Distribution of Compute to Client System",
    text: "Reducing cost of operation is a major part of software development. And to do this we can start by reducing the bills of cloud services if our web service is deployed on the cloud.",
  },
  {
    href: "https://rahul-choudhary.hashnode.dev/dynamic-filtering-a-game-changer-for-enhanced-user-experience",
    category: "Backend",
    date: "Jan 8, 2025",
    title:
      "Dynamic Filtering: A Game-Changer for Enhanced User Experience",
    text: "Dynamic filtering allows us to offer real-time, adaptive filtering options based on user inputs, preferences, or contextual data. It transforms static datasets into fluid, intuitive interfaces.",
  },
];
