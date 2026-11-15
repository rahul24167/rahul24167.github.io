"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar, { type Page } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [page, setPage] = useState<Page>("projects");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main>
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((o) => !o)} />

      <div className="main-content">
        <Navbar active={page} onNavigate={setPage} />

        <Projects active={page === "projects"} />
        <Blog active={page === "blog"} />
        <Experience active={page === "experience"} />
        <About active={page === "about"} />
        <Contact active={page === "contact"} />
      </div>
    </main>
  );
}
