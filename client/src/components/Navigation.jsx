import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  const linkStyle = {
    display: 'inline'
  };

  return (
    <ul className="links justify-content-end">
      <li className="link">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          style={linkStyle}
        >
          Portfolio
        </Link>
      </li>
      <li className="link">
        <Link
          to="/Create"
          className={currentPage === '/Create' ? 'nav-link active' : 'nav-link'}
          style={linkStyle}
        >
          Create
        </Link>
      </li>
      <li className="link">
        <Link
          to="/Logout"
          className={currentPage === '/Logout' ? 'nav-link active' : 'nav-link'}
          style={linkStyle}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;