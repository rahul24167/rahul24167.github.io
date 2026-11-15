interface AboutProps {
  active: boolean;
}

export default function About({ active }: AboutProps) {
  return (
    <article className={`about${active ? " active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&apos;m a Junior Software Engineer at ENTNT and a B.Tech student at
          NIT Srinagar. I build backend systems with C#, ASP.NET Core, and
          Node.js — integrating third-party platforms through REST APIs and
          webhooks, from orthodontic patient management to vessel internet
          portals running on Linux networking.
        </p>

        <p>
          My sweet spot is the core logic that powers a product: decoupled
          services connected through Redis Streams, order-book matching engines,
          real-time updates over WebSockets, and data persisted cleanly through
          Prisma and Entity Framework Core.
        </p>

        <p>
          I also work across the stack with React, Angular, and Next.js, and I
          automate business workflows with n8n and LLMs — including running
          local models through Ollama. I enjoy turning complex problems into
          simple, scalable, and stable solutions.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/icon-dev.svg"
                alt="Backend development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend development</h4>

              <p className="service-item-text">
                C#, ASP.NET Core, and Node.js APIs with EF Core, REST, and
                webhook integrations to third-party platforms.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/icon-ai.svg" alt="AI and automation icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">AI &amp; automation</h4>
              <p className="service-item-text">
                n8n workflows, LLM-powered automation, and local models through
                Ollama for business and coding tasks.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/icon-block.svg" alt="System design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">System design</h4>

              <p className="service-item-text">
                Decoupled services over Redis Streams, order-book engines, and
                real-time WebSocket updates.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend development</h4>

              <p className="service-item-text">
                React, Angular, and Next.js interfaces, from admin portals to
                e-commerce storefronts.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time dateTime="2021-06-14">14 Feb, 2024</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
