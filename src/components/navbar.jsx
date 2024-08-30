import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navp">
        <div className="container-fluid nav-color">
          <Link
            className="nav-link active"
            aria-current="page"
            href="#"
            to="/home"
          >
            <img
              src="image/logopizza.png"
              className="navbar-brand img-logo"
              alt="logo.."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item navo">
                <Link
                  className="nav-link active style-nav"
                  aria-current="page"
                  href="#"
                  to="/home"
                >
                  <span id="nav-tag">Home</span>
                </Link>
              </li>
              <li className="nav-item navo ">
                <Link
                  className="nav-link active style-nav"
                  aria-current="page"
                  href="#"
                  to="/about"
                >
                  <span id="nav-tag">About</span>
                </Link>
              </li>
              <li className="nav-item navo">
                <Link
                  className="nav-link active style-nav"
                  aria-current="page"
                  href="#"
                  to="/allitems"
                >
                  <span id="nav-tag">Display All Items</span>
                </Link>
              </li>
              <li className="nav-item navo">
                <Link
                  className="nav-link active style-nav"
                  aria-current="page"
                  href="#"
                  to="/addnewitem"
                >
                  <span id="nav-tag"> Add New Items</span>
                </Link>
              </li>
              <li className="nav-item navo">
                <Link
                  className="nav-link active style-nav"
                  aria-current="page"
                  href="#"
                  to="/updateitems"
                >
                  <span id="nav-tag">Update Items</span>
                </Link>
              </li>
              <li className="nav-item navo">
                <Link
                  className="nav-link active style-nav"
                  aria-current="page"
                  href="#"
                  to="/deleteitem"
                >
                  <span id="nav-tag">Delete Items</span>
                </Link>
              </li>
              <li className="nav-item navo-contact">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
