import skills from "@/data/skills.json";

interface ExperienceProps {
  active: boolean;
}

export default function Experience({ active }: ExperienceProps) {
  return (
    <article
      className={`Experience${active ? " active" : ""}`}
      data-page="experience"
    >
      <header>
        <h2 className="h2 article-title">Work Experience</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              National Institute of Technology, Srinagar (NIT)
            </h4>

            <span>Bachelor of Technology, 2022 - 2026 (Expected)</span>

            <p className="timeline-text">
              <strong>Relevent Coursework: </strong> Data Structure, Object
              Oriented Programming in Java, Big Data, Blockchain
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Birsa Institute of Technology, Sindri, Dhanbad
            </h4>

            <span>2021 — 2022</span>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Developer - <i>Go Studio Production</i>
            </h4>

            <span>July. 2025 — Present</span>

            <p className="timeline-text">
              • Build and maintained responsive web applications using Next.js
              and TailwindCSS from scratch improving overall user experience
              and performance by 25 percent.
              <br />
              • Facilitated bi-weekly meetings between designers and backend
              developers, which decreased design-related bugs by 15 percent and
              accelerated the development cycle of senior citizen-focused
              applications.
              <br />
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Developer - <i>Sukoon Unlimited</i>
            </h4>

            <span>Feb. 2025 — April. 2025</span>

            <p className="timeline-text">
              • Reduced page load time by 10 percent through updated design
              standards and best practices. <br />
              • Optimized an admin portal used by 3+ internal teams to manage
              20+ service records and user profiles, reducing manual workload
              by 30 percent and improving data retrieval speed.
              <br />
              • Implemented 15+ reusable components and established a scalable
              component-based architecture, reducing code duplication by 40
              percent and accelerating development speed.
              <br />
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Web Developer - <i>Soven Developers</i>
            </h4>

            <span>Aug. 2024 — Sep. 2024</span>

            <p className="timeline-text">
              • Built interactive quiz functionality for a web application
              utilized by 2 million individuals; collected user feedback leading
              to identification and resolution of key usability issues. <br />
              • Redesigned and developed a modern, user-friendly front-end
              application, increasing user engagement by 30 percent and reducing
              page load time by 10 percent through updated design standards and
              best practices. <br />
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill) => (
            <button
              key={skill.title}
              type="button"
              className="skill-button"
              dangerouslySetInnerHTML={{
                __html: `${skill.svg} ${skill.title}`,
              }}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}
