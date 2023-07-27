import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-5 py-md-4 my-2 my-md-5">
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand text-uppercase fw-bold">
            <span
              className="bg-gradient p-1 rounded-3 text-light "
              style={{ backgroundColor: '#7E74F1' }}
            >
              M.
            </span>
            SEL
          </Link>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Expertises
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-brand text-uppercase fw-bold align-items-left">
            <button className="btn bi bi-moon"></button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
