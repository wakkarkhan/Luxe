import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../img/testimonial.jpg";
import img2 from "../../img/testimonial-2.jpg";

import "./style.css";

const Testimonial = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="gauto-testimonial-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="site-heading ">
              <h4 className="text-white">{t("some_words")}</h4>
              <h2>{t("testimonial")}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Slider className="testimonial-slider" {...settings}>
              <div className="slide">
                <div className="single-testimonial">
                  <div className="testimonial-text">
                  <p>{t("testimonials_page.test_01")}</p>
                    <div className="testimonial-meta">
                      {/* <div className="client-image">
                        <img src={img1} alt="testimonial" />
                      </div> */}
                      <div className="client-info">
                        <h3>Michael L</h3>
                        <p>{t("customer")}</p>
                      </div>
                    </div>
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-testimonial">
                  <div className="testimonial-text">
                  <p>{t("testimonials_page.test_02")}</p>
                    <div className="testimonial-meta">
                      {/* <div className="client-image">
                        <img src={img2} alt="testimonial" />
                      </div> */}
                      <div className="client-info">
                        <h3>Thomas S</h3>
                        <p>{t("customer")}</p>
                      </div>
                    </div>
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-testimonial">
                  <div className="testimonial-text">
                  <p>{t("testimonials_page.test_03")}</p>
                    <div className="testimonial-meta">
                      {/* <div className="client-image">
                        <img src={img1} alt="testimonial" />
                      </div> */}
                      <div className="client-info">
                        <h3>Aekawut K</h3>
                        <p>{t("customer")}</p>
                      </div>
                    </div>
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-testimonial">
                  <div className="testimonial-text">
                  <p>{t("testimonials_page.test_04")}</p>
                    <div className="testimonial-meta">
                      {/* <div className="client-image">
                        <img src={img1} alt="testimonial" />
                      </div> */}
                      <div className="client-info">
                        <h3>William A</h3>
                        <p>{t("customer")}</p>
                      </div>
                    </div>
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
