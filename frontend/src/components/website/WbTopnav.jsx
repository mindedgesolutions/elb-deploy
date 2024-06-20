import React, { useState } from "react";
import { Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaUser } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import WbFilterModal from "./WbFilterModal";

const WbTopnav = () => {
  const [hover, setHover] = useState(false);

  const chevronStyle = {
    transition: "transform 0.1s ease-in-out",
    transform: hover ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <>
      <header className="header-primary">
        <div className="container">
          <nav className="navbar navbar-expand-xl justify-content-between">
            <WbLogoSvg />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="d-block d-xl-none">
                  <div className="logo">
                    <WbLogoSvg />
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/about`}>
                    About Us
                  </Link>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Link className="nav-link" to={`#`}>
                    Pages
                    <IoChevronDown style={chevronStyle} />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={`#`} className="dropdown-item">
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`#`} className="dropdown-item">
                        <span>Service Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`#`} className="dropdown-item">
                        <span>Job Post</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`#`} className="dropdown-item">
                        <span>Job Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`#`} className="dropdown-item">
                        <span>Seller Dashboard</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`#`}>
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-4 mt-4">
                <div className="d-flex d-lg-none">
                  <a href="signin.html" className="header-btn">
                    <FaUser size={14} style={{ borderRadius: "50%" }} />
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-right d-flex align-items-center gap-4">
              <div className="align-items-center d-none d-lg-flex">
                <a href="signin.html" className="w-btn-secondary-lg">
                  <FaUser size={14} style={{ borderRadius: "50%" }} />
                  Login
                </a>
              </div>
              <button
                className="navbar-toggler d-block d-xl-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <WbFilterModal />
    </>
  );
};

export default WbTopnav;
