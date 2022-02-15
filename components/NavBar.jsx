import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/events">EVENTS</Link>
        </li>
        <li>
          <Link href="/competitors">COMPETITORS</Link>
        </li>
        <li>
          <Link href="/academies">ACADEMIES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
