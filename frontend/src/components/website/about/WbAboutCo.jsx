import React from "react";
import { SiTicktick } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import avatar from "../../../assets/website/img/avatar/u-sm-1.png";
import sign from "../../../assets/website/img/about/sign.png";
import aboutImgOne from "../../../assets/website/img/about/img-1.png";
import aboutImgTwo from "../../../assets/website/img/about/img-2.png";
import aboutImgThree from "../../../assets/website/img/about/img-3.png";

const WbAboutCo = () => {
  return (
    <section className="about-company position-relative pt-110 pb-150 bg-offWhite">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="text-left">
              <p className="section-subtitle fw-semibold mb-2">About Company</p>
              <h2 className="section-title fw-bold mb-3">
                Join World's Best Marketplace for Workers
              </h2>
              <p className="about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                molestie mi ut arcu conde consequat erat iaculis. Duis quam
                lorem, bibendum at bibendum ut, auctor a ligula. Alv dolor urna.
                Proin rutrum lobortis vulputate. Suspendisse tincidunt urna et
                odio egestas tum. Class aptent taciti sociosqu ad litora
                torquen. Interdum et malesuada fames ac eu consequat. Nunc
                facilisis porttitor odio eu finibus.
              </p>
              <ul className="about-list py-4 d-flex flex-wrap">
                <li className="d-flex gap-2 align-items-center fst-italic about-list-item py-2">
                  <SiTicktick className="text-success" />
                  Promote your business product
                </li>
                <li className="d-flex gap-2 align-items-center fst-italic about-list-item py-2">
                  <SiTicktick className="text-success" />
                  Best client satisfaction
                </li>
                <li className="d-flex gap-2 align-items-center fst-italic about-list-item py-2">
                  <SiTicktick className="text-success" />
                  Growing your business
                </li>
              </ul>
              <div className="d-flex flex-column flex-md-row gap-4 align-items-md-center mt-40">
                <div>
                  <Link to={`#`} className="w-btn-secondary-xl">
                    Read More
                    <FaArrowRightLong className="ms-1" />
                  </Link>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src={avatar}
                    className="rounded-circle ceo-avatar"
                    alt=""
                  />
                  <img src={sign} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="position-relative about-img-group">
              <li className="position-lg-absolute d-flex flex-column flex-md-row gap-3">
                <img src={aboutImgOne} className="" alt="" />
                <img
                  src={aboutImgTwo}
                  className="d-md-block d-lg-none d-xl-block z-2"
                  alt=""
                />
              </li>
              <li className="position-absolute d-none d-lg-block">
                <img src={aboutImgThree} className="" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WbAboutCo;
