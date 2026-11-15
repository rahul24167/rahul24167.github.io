interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <aside className={`sidebar${open ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/my-avatar.png"
            alt="Rahul Kumar Choudhary"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Rahul Kumar Choudhary">
            Rahul Kumar
            <br />
            Choudhary
          </h1>

          <p className="title">Junior Software Engineer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={onToggle}>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:rahul24167@gmail.com"
                target="_blank"
                className="contact-link"
              >
                rahul24167@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+917488662772" className="contact-link">
                +91 7488 662 772
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="document-text-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Blogs</p>

              <a
                href="https://rahul-choudhary.hashnode.dev"
                target="_blank"
                className="contact-link"
              >
                rahul-choudhary.hashnode.dev
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="document-text-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Resume</p>

              <a
                href="https://drive.google.com/file/d/1s1MN_Ox8HZmZKWD2ZsfEw1ahgrK3d2ZM/view"
                target="_blank"
                className="contact-link"
              >
                Download Resume
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>New Delhi, Delhi, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/rahul-x-tech/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://x.com/rahul10xtwt"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/rahul24167/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      <span className="updated-date">Updated on 15 November 2026</span>
    </aside>
  );
}
