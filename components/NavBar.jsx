import Link from "next/link";
import navBarStyles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${navBarStyles.nav}`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <ul className={navBarStyles.ul}>
            <li className={navBarStyles.li}>
              <Link className={`navbar-brand`} href="/">
                HOME
              </Link>
            </li>
            <li className={navBarStyles.li}>
              <Link
                className={`nav-item nav-link`}
                aria-current="page"
                href="/events"
              >
                EVENTS
              </Link>
            </li>
            <li className={navBarStyles.li}>
              <Link
                className={`nav-item nav-link`}
                aria-current="page"
                href="/competitors"
              >
                COMPETITORS
              </Link>
            </li>
            <li className={navBarStyles.li}>
              <Link
                className={`nav-item nav-link`}
                aria-current="page"
                href="/academies"
              >
                ACADEMIES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
