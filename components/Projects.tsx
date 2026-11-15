"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { GithubIcon } from "./GithubIcon";

const filters = ["All", "Backend", "Frontend", "Full Stack"];

interface ProjectsProps {
  active: boolean;
}

export default function Projects({ active }: ProjectsProps) {
  const [filter, setFilter] = useState("all");
  const [selectValue, setSelectValue] = useState("Select category");
  const [selectOpen, setSelectOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const openLink = (link: string) => {
    window.open(link)?.focus();
  };

  const handleFilterClick = (value: string) => {
    setFilter(value.toLowerCase());
    setSelectValue(value);
    setActiveFilter(value);
  };

  const handleSelectItem = (value: string) => {
    setFilter(value.toLowerCase());
    setSelectValue(value);
    setSelectOpen(false);
  };

  return (
    <article
      className={`portfolio${active ? " active" : ""}`}
      data-page="projects"
    >
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {filters.map((value) => (
            <li className="filter-item" key={value}>
              <button
                className={activeFilter === value ? "active" : undefined}
                data-filter-btn
                onClick={() => handleFilterClick(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select${selectOpen ? " active" : ""}`}
            data-select
            onClick={() => setSelectOpen((open) => !open)}
          >
            <div className="select-value" data-selecct-value>
              {selectValue}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {filters.map((value) => (
              <li className="select-item" key={value}>
                <button
                  data-select-item
                  onClick={() => handleSelectItem(value)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((project) => {
            const visible =
              filter === "all" || filter === project.categoryKey;
            return (
              <li
                key={project.title}
                className={`project-item${visible ? " active" : ""}`}
                data-filter-item
                data-category={project.categoryKey}
              >
                <div className="content-card info-box">
                  <button
                    className="skill-button"
                    data-code-btn
                    data-link={project.github}
                    onClick={() => openLink(project.github)}
                  >
                    <GithubIcon />
                    Github
                  </button>
                </div>
                <a href={project.href} target="_blank">
                  <figure className="project-img">
                    <div
                      className="project-item-icon-box"
                      data-project-btn
                      data-link={project.live}
                      onClick={(e) => {
                        e.preventDefault();
                        openLink(project.live);
                      }}
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src={project.img}
                      alt={project.alt}
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
