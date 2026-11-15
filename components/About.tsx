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
          I&apos;m a Full Stack Web Developer with a passion for crafting robust
          and efficient backend systems. While adept in both front-end and
          back-end development, my true thrill lies in architecting the core
          functionalities that power a seamless user experience.
          I&apos;m Full Stack Web Developer and a Open Source Contributer and
          Maintainer from Dhanbad, India, working in Software development. I
          enjoy turning complex problems into simple, scalable and stable
          solutions.
        </p>

        <p>
          A self-proclaimed tech enthusiast, I&apos;m constantly invigorated by
          the ever-evolving landscape of the industry. My curiosity extends to
          emerging technologies like Blockchain and Machine Learning, allowing
          me to stay informed and integrate these advancements into my solutions
          when appropriate.
        </p>

        <p>
          Beyond the back-end, I&apos;ve also gained valuable experience in
          UI/UX design. My Projects have garnered positive feedback,
          demonstrating my ability to bridge the gap between technical expertise
          and user-centric design principles.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                Building the future by developing Web Applications using a blend
                of front-end and back-end technologies.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/icon-ai.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Machine Learning (AI/ML)</h4>
              <p className="service-item-text">
                Utilizing Artificial Intelligence (AI) and Machine Learning (ML)
                to create intelligent and adaptive systems.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/icon-block.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Blockchain and Web3</h4>

              <p className="service-item-text">
                Exploring the potential of Blockchain technology to
                revolutionize data security and transparency.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">System Design</h4>

              <p className="service-item-text">
                Architecting scalable and efficient systems that power seamless
                user experiences.
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
