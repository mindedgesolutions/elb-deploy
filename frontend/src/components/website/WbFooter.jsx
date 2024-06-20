import React from "react";
import WbSubsFooter from "./WbSubsFooter";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import appStore from "../../assets/website/img/logo/appstore.svg";
import playStore from "../../assets/website/img/logo/play.svg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const WbFooter = () => {
  return (
    <footer className="footer-area">
      <div className="bg-dark-300 pt-110">
        <div className="container">
          <WbSubsFooter />

          <div className="footer-widgets py-60">
            <div className="row justify-content-between row-gap-4">
              <div className="col-md-6 col-xl-3">
                <div className="mb-5">
                  <h3 className="footer-widget-title fw-bold mb-4">
                    Download App
                  </h3>
                  <ul className="footer-info-widget p-0">
                    <li className="d-flex gap-3 align-items-center py-2 footer-info-widget-item">
                      <FaPhoneAlt />
                      +(323) 750-1234
                    </li>
                    <li className="d-flex gap-3 align-items-center py-2 footer-info-widget-item">
                      <IoIosMail size={22} />
                      infoyourortencey@gmail.com
                    </li>
                    <li className="d-flex gap-3 align-items-center py-2 footer-info-widget-item">
                      <IoLocationSharp size={26} />
                      374 A Tower, William Road Blvd <br />, Melbourne 2721, IL,
                      USA
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="footer-widget-title fw-bold mb-4">
                    Download App
                  </h3>
                  <div className="d-flex gap-3">
                    <Link to={`#`}>
                      <img src={playStore} alt="" />
                    </Link>
                    <Link to={`#`}>
                      <img src={appStore} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div>
                  <h3 className="footer-widget-title fw-bold mb-4">
                    Categories
                  </h3>
                  <nav>
                    <ul className="footer-nav-list list-unstyled">
                      <li className="footer-nav-list-item py-1">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Graphics & Design
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Digital Marketing
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Writing & Translation
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Video & Animation
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Music & Audio
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Fiverr Logo Maker
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Programming & Tech
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Photography
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div>
                  <h3 className="footer-widget-title fw-bold mb-4">About</h3>
                  <nav>
                    <ul className="footer-nav-list list-unstyled">
                      <li className="footer-nav-list-item py-1">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Careers
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Press & News
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Pricing Plan
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Terms of Service
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Blogs
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          FAQ's
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div>
                  <h3 className="footer-widget-title fw-bold mb-4">
                    Help & Supports
                  </h3>
                  <nav>
                    <ul className="footer-nav-list list-unstyled">
                      <li className="footer-nav-list-item py-1">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Help & Support
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Trust & Safety
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Selling on Work zones
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Buying on Work zones
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Work zones Guides
                        </Link>
                      </li>
                      <li className="footer-nav-list-item py-2">
                        <Link
                          to={`#`}
                          className="footer-nav-link d-flex gap-2 align-items-center text-decoration-none"
                        >
                          <FaArrowRightLong size={12} />
                          Workspace
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright py-4">
        <div className="container">
          <div className="row row-gap-4 justify-content-between">
            <div className="col-auto">
              <div>
                <p className="text-white">
                  Copyright &copy;{new Date().getFullYear()} All rights reserved{" "}
                  <Link to={`/`} className="text-white">
                    Easy Lending Buddy
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-social d-flex align-items-center gap-4">
                <a
                  href="http://"
                  className="footer-social-link"
                  target="_blank"
                >
                  <FaFacebook size={26} />{" "}
                </a>
                <a
                  href="http://"
                  className="footer-social-link"
                  target="_blank"
                >
                  <FaXTwitter size={24} />{" "}
                </a>
                <a
                  href="http://"
                  className="footer-social-link"
                  target="_blank"
                >
                  <FaInstagramSquare size={26} />{" "}
                </a>
                <a
                  href="http://"
                  className="footer-social-link"
                  target="_blank"
                >
                  <FaLinkedin size={26} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WbFooter;
