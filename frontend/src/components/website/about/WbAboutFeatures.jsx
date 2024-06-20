import React from "react";
import featureOne from "../../../assets/website/img/features/1.svg";
import featureTwo from "../../../assets/website/img/features/2.svg";
import featureThree from "../../../assets/website/img/features/3.svg";
import featureFour from "../../../assets/website/img/features/4.svg";
import featureFive from "../../../assets/website/img/features/5.svg";

const WbAboutFeatures = () => {
  return (
    <section className="latest-features bg-offWhite py-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="text-center mb-40">
              <p className="section-subtitle fw-semibold">Best Feature</p>
              <h2 className="section-title fw-bold">Our Latest Features</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-xl col-lg-4 col-md-6">
            <div className="feature-card">
              <img src={featureOne} className="mx-auto d-block" alt="" />
              <h3 className="fw-bold feature-card-title text-center">
                Hourly Rated Jobs
              </h3>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-md-6">
            <div className="feature-card">
              <img src={featureTwo} className="mx-auto d-block" alt="" />
              <h3 className="fw-bold feature-card-title text-center">
                Projects Gig Catalogue
              </h3>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-md-6">
            <div className="feature-card">
              <img src={featureThree} className="mx-auto d-block" alt="" />
              <h3 className="fw-bold feature-card-title text-center">
                Paid Membership
              </h3>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-md-6">
            <div className="feature-card">
              <img src={featureFour} className="mx-auto d-block" alt="" />
              <h3 className="fw-bold feature-card-title text-center">
                Custom Order
              </h3>
            </div>
          </div>
          <div className="col-xl col-lg-4 col-md-6">
            <div className="feature-card">
              <img src={featureFive} className="mx-auto d-block" alt="" />
              <h3 className="fw-bold feature-card-title text-center">
                Live Chat System
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WbAboutFeatures;
