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

            <span>Bachelor of Technology, Nov 2022 — Jul 2026</span>
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
              Junior Software Engineer - <i>ENTNT</i>
            </h4>

            <span>Nov. 2025 — Present</span>

            <p className="timeline-text">
              <i>
                C#, ASP.NET Core, EF Core, SQL Server, React, Angular, Linux
              </i>
              <br />
              <br />
              <strong>
                Client: Kiwi Ortho — Patient Management Platform
              </strong>
              <br />
              • Backend development for an orthodontic patient management
              platform, integrating Dental Monitoring and Open Dental through
              REST APIs and webhooks.
              <br />
              • Implemented a QR-code-based patient photo capture workflow: staff
              generate a patient-specific QR code, patients capture and upload
              clinical photographs from a mobile web page, and doctors access
              the images from the desktop application.
              <br />
              <br />
              <strong>
                Internal Product — Employee Management System
              </strong>
              <br />
              • Developed a leave management system with rolling 365-day leave
              balance calculations and built employee scheduling functionality.
              <br />
              • Refactored attendance and presence checks to evaluate employee
              presence against each employee&apos;s assigned work schedule.
              <br />
              <br />
              <strong>Client: TMS Shipping</strong>
              <br />
              • Developed a captive portal for vessel internet access, supporting
              user authentication and tracking of network usage.
              <br />
              • Worked on Linux networking, including NAT, packet forwarding, and
              traffic management using iptables/nftables, with DHCP and DNS
              services.
              <br />
              • Built Device Management and Travel Management applications using
              Microsoft Power Apps, Power Automate, and SharePoint.
              <br />
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              AI &amp; Automation Intern - <i>AND Business Consulting</i>
            </h4>

            <span>Aug. 2025 — Oct. 2025</span>

            <p className="timeline-text">
              • Analysed business workflows and collaborated with stakeholders
              to implement AI-driven automation for internal and client
              processes using n8n, LLMs, and AWS.
              <br />
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Developer - <i>Go Studio Production</i>
            </h4>

            <span>Jun. 2025 — Aug. 2025</span>

            <p className="timeline-text">
              • Built and maintained responsive web applications and delivered
              user-facing features with design and backend teams using Next.js,
              Tailwind CSS, and Supabase.
              <br />
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Engineering Intern - <i>Sukoon Unlimited</i>
            </h4>

            <span>Feb. 2025 — Apr. 2025</span>

            <p className="timeline-text">
              • Developed reusable frontend components and admin-portal features
              for a senior-citizen services platform using Next.js and React.
              <br />
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
