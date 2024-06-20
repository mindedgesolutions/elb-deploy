import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ctaImg from "../../../assets/website/img/cta/cta-img.png";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const WbAboutCta = () => {
  return (
    <section className="cta-area py-110 pb-110">
      <div className="container">
        <div className="bg-darkGreen cta-area-bg">
          <div className="row align-items-center">
            <div className="col-12 col-xl-7">
              <div className="cta-content">
                <p className="cta-subtitle fw-bold mb-2">Explore New Life</p>
                <h2 className="section-title-light fw-bold mb-4">
                  Don't just find. Be found put your CV in front of great
                  employers
                </h2>
                <p className="section-desc-light mb-40">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words.
                </p>
                <Link to={`#`} className="cta-btn-link">
                  Job Post Now
                  <FaArrowRightLong />
                </Link>
              </div>
              <div className="cta-counter mt-5">
                <div className="cta-counter-item">
                  <h3 className="cta-counter-title fw-bold">
                    <span className="counter">
                      <CountUp end={950} enableScrollSpy />
                    </span>
                    <span>M+</span>
                  </h3>
                  <p className="cta-counter-desc fw-bold">Total Freelancers</p>
                </div>
                <div className="cta-counter-item">
                  <h3 className="cta-counter-title fw-bold">
                    <span className="counter">
                      <CountUp end={32} enableScrollSpy />
                    </span>
                    <span>M+</span>
                  </h3>
                  <p className="cta-counter-desc fw-bold">Total Freelancers</p>
                </div>
                <div className="cta-counter-item">
                  <h3 className="cta-counter-title fw-bold">
                    <span className="counter">
                      <CountUp end={120} enableScrollSpy />
                    </span>
                    <span>M+</span>
                  </h3>
                  <p className="cta-counter-desc fw-bold">Total Freelancers</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-5 mt-5 mt-xl-0">
              <div className="cta-img">
                <img src={ctaImg} className="img-fluid w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WbAboutCta;
