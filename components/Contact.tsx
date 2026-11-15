const xLogoSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  id="Layer_1"
  width="5rem"
  height="5rem"
  viewBox="0 0 24 24"
  style="enable-background: new 0 0 24 24"
  class="x"
  xml:space="preserve"
>
  <path
    d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"
  />
</svg>`;

interface ContactProps {
  active: boolean;
}

export default function Contact({ active }: ContactProps) {
  return (
    <article
      className={`contact${active ? " active" : ""}`}
      data-page="contact"
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Connect With Me</h3>

        <ul className="social-list">
          <li className="social-item" style={{ height: "5rem", width: "5rem" }}>
            <a
              href="https://www.linkedin.com/in/rahul-x-tech/"
              className="social-link"
            >
              <ion-icon
                name="logo-linkedin"
                style={{ height: "5rem", width: "5rem" }}
              ></ion-icon>
            </a>
          </li>

          <li className="social-item" style={{ height: "5rem", width: "5rem" }}>
            <a
              href="https://x.com/RahulCh24880330"
              className="social-link"
              dangerouslySetInnerHTML={{ __html: xLogoSvg }}
            />
          </li>

          <li className="social-item" style={{ height: "5rem", width: "5rem" }}>
            <a href="https://github.com/rahul24167/" className="social-link">
              <ion-icon
                name="logo-github"
                style={{ height: "5rem", width: "5rem" }}
              ></ion-icon>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
