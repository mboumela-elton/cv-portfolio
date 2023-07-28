import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className="py-5 py-md-4 my-1 my-md-5">
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={
          theme === 'light'
            ? { backgroundColor: '#F0F0F0', color: '#212529' }
            : { backgroundColor: '#1E1E1E', color: '#F1F1F1' }
        }
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-uppercase fw-bold"
            style={
              theme === 'light'
                ? { color: '#212529', pointerEvents: 'none' }
                : { color: '#6C757D', pointerEvents: 'none' }
            }
          >
            <span
              className="bg-gradient p-1 rounded-3 text-light "
              style={{ backgroundColor: '#7E74F1' }}
            >
              M.
            </span>
            SEL
          </Link>
          <button
            className="navbar-toggler my-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={
              theme === 'light'
                ? { color: '#212529', backgroundColor: 'transparent' }
                : { backgroundColor: 'transparent', color: '#F1F1F1' }
            }
          >
            <span
              className="bi bi-list"
              style={
                theme === 'light'
                  ? { color: '#212529', backgroundColor: 'transparent' }
                  : { backgroundColor: 'transparent', color: '#F1F1F1' }
              }
            ></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-light">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  Expertises
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  contact
                </Link>
              </li>
              <li className="nav-item d-md-none" onClick={() => toggleTheme()}>
                {theme === 'light' ? (
                  <button className="bi bi-brightness-high border-0"></button>
                ) : (
                  <button
                    className="bi-moon-stars border-0"
                    style={
                      theme === 'light'
                        ? { color: '#212529', backgroundColor: 'transparent' }
                        : { backgroundColor: 'transparent', color: '#F1F1F1' }
                    }
                  ></button>
                )}
              </li>
            </ul>
          </div>
          <div className="d-none d-md-block" onClick={() => toggleTheme()}>
            {theme === 'light' ? (
              <button
                className="bi bi-brightness-high border-0"
                style={{ backgroundColor: 'transparent' }}
              ></button>
            ) : (
              <button
                style={
                  theme === 'light'
                    ? { color: '#212529', backgroundColor: 'transparent' }
                    : { backgroundColor: 'transparent', color: '#F1F1F1' }
                }
                className="bi-moon-stars border-0"
              ></button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
