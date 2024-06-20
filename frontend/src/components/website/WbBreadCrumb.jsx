import React from "react";
import breadCrumbBg from "../../assets/website/img/breadcrumb-bg.png";
import { Link, useLocation } from "react-router-dom";

const ucFirst = (value) => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const WbBreadCrumb = () => {
  const { pathname } = useLocation();
  const current = pathname.split("/")[1];

  return (
    <section
      className="w-breadcrumb-area"
      style={{
        background: `url(${breadCrumbBg}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="position-relative z-2">
              <h2 className="section-title-light mb-2">{ucFirst(current)}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb w-breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {ucFirst(current)}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WbBreadCrumb;
