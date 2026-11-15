export type Page = "projects" | "blog" | "experience" | "about" | "contact";

const links: { value: Page; label: string }[] = [
  { value: "projects", label: "Projects" },
  { value: "blog", label: "Blog" },
  { value: "experience", label: "Work Experience" },
  { value: "about", label: "About" },
  { value: "contact", label: "Contact" },
];

interface NavbarProps {
  active: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ active, onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li className="navbar-item" key={link.value}>
            <button
              className={`navbar-link${active === link.value ? " active" : ""}`}
              data-nav-link
              value={link.value}
              onClick={() => {
                onNavigate(link.value);
                window.scrollTo(0, 0);
              }}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
