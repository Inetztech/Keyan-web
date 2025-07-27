import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css';
import '../CSS/querry.css';
import A1 from '../aessts/Photos/logo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navcolor p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={A1} alt="logo" className="imgLogo" />
        </Link>
        <button
          className="navbar-toggler s-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered text-success s-0"></i>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active navlist" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlist" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlist" to="/expertise">
                  Expertise
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlistbutton " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
          <ul className="navbar-nav  gap-3">
            <li className="nav-item">
              <Link className="nav-link active navlist" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navlist" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navlist" to="/expertise">
                Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navlistbutton " to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
