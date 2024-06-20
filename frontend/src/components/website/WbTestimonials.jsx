import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import testimonial from "../../assets/website/img/testimonial/au-1.png";
import { FaRegStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const WbTestimonials = () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const settingsTop = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const settingsBottom = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    rtl: true,
  };

  return (
    <>
      <section className="bg-offWhite py-110">
        <div className="container">
          <div className="row mb-40 justify-content-center">
            <div className="co-auto">
              <div className="text-center">
                <h2 className="fw-bold section-title">Testimonial</h2>
                <p className="section-desc">
                  Received 4.8/5 Stars in Over 10,000+ Reviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper testimonialsSlider">
          <div className="swiper-wrapper">
            <Slider {...settingsTop}>
              {numbers.map((i) => {
                return (
                  <div className="swiper-slide p-2" key={nanoid()}>
                    <div className="testimonial-card bg-white">
                      <div className="testimonial-content">
                        <div className="d-flex gap-2 align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                          >
                            <path
                              d="M17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0Z"
                              fill="#F7F5F0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.1352 21.6719C18.4288 20.3063 18.0757 18.823 18.0757 17.222C18.0757 15.5975 18.5054 14.2555 19.3647 13.196C20.2241 12.1365 21.5602 11.6068 23.3731 11.6068V13.8317C22.7374 13.8317 22.2724 13.973 21.9781 14.2555C21.6838 14.538 21.5367 15.0795 21.5367 15.88V16.2332H24.1147V21.6719H19.1352ZM11.8246 21.6719C11.1183 20.3063 10.7651 18.823 10.7651 17.222C10.7651 15.5975 11.1948 14.2555 12.0542 13.196C12.9135 12.1365 14.2497 11.6068 16.0626 11.6068V13.8317C15.4269 13.8317 14.9619 13.973 14.6676 14.2555C14.3733 14.538 14.2261 15.0795 14.2261 15.88V16.2332H16.8042V21.6719H11.8246Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="testimonial-title">
                            Very Solid!!
                          </span>
                        </div>
                        <p className="testimonial-feedback">
                          There are many variations of a passages of Lorem Ipsum
                          available, but the as majority have suffered
                          alteration in some form.
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div>
                            <img
                              src={testimonial}
                              className="testimonial-author-img"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="testimonial-author-name fw-semibold">
                              Black Marvin
                            </h4>
                            <p className="testimonial-author-title">
                              Nursing Assistant
                            </p>
                          </div>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FaRegStar size={18} className="mb-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="swiper testimonialsSlider">
          <div className="swiper-wrapper">
            <Slider {...settingsBottom}>
              {numbers.map((i) => {
                return (
                  <div className="swiper-slide p-2" key={nanoid()}>
                    <div className="testimonial-card bg-white">
                      <div className="testimonial-content">
                        <div className="d-flex gap-2 align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                          >
                            <path
                              d="M17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0Z"
                              fill="#F7F5F0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.1352 21.6719C18.4288 20.3063 18.0757 18.823 18.0757 17.222C18.0757 15.5975 18.5054 14.2555 19.3647 13.196C20.2241 12.1365 21.5602 11.6068 23.3731 11.6068V13.8317C22.7374 13.8317 22.2724 13.973 21.9781 14.2555C21.6838 14.538 21.5367 15.0795 21.5367 15.88V16.2332H24.1147V21.6719H19.1352ZM11.8246 21.6719C11.1183 20.3063 10.7651 18.823 10.7651 17.222C10.7651 15.5975 11.1948 14.2555 12.0542 13.196C12.9135 12.1365 14.2497 11.6068 16.0626 11.6068V13.8317C15.4269 13.8317 14.9619 13.973 14.6676 14.2555C14.3733 14.538 14.2261 15.0795 14.2261 15.88V16.2332H16.8042V21.6719H11.8246Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="testimonial-title">
                            Very Solid!!
                          </span>
                        </div>
                        <p className="testimonial-feedback">
                          There are many variations of a passages of Lorem Ipsum
                          available, but the as majority have suffered
                          alteration in some form.
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                          <div>
                            <img
                              src={testimonial}
                              className="testimonial-author-img"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="testimonial-author-name fw-semibold">
                              Black Marvin
                            </h4>
                            <p className="testimonial-author-title">
                              Nursing Assistant
                            </p>
                          </div>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning"
                          />
                          <FaRegStar size={18} className="mb-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default WbTestimonials;
