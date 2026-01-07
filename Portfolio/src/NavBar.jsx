import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbarItems">
        <a className="navItem" href="#aboutme">
          About Me
        </a>
        <a className="navItem" href="#skills">
          Skills
        </a>
        <a className="navItem" href="#experience">
          Experience
        </a>
        <a className="navItem" href="#projects">
          Projects
        </a>

        <a className="navItem" href="#education">
          Education
        </a>
      </div>
    </nav>
  );
}
