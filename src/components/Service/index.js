import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../img/rental_tourist.png";
import img2 from "../../img/rental_organizations.jpg";
import img3 from "../../img/rental_embassy.png";
import img4 from "../../img/rental_wedding.png";
import img5 from "../../img/private_tour_guide.png";
import img6 from "../../img/guest.png";

import "./style.css";

const Service = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
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
    <section className="gauto-service-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="site-heading">
              <h4>{t("see_our")}</h4>
              <h2>{t("latest_service")}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Slider className="service-slider" {...settings}>
              <div className="slide">
                <div className="single-service">
                  <span className="service-number">01 </span>
                  <div className="service-icon">
                    <img src={img1} alt="city trasport" />
                  </div>
                  <div className="service-text">
                    <Link>
                    <h3>{t("rental_tourist")}</h3>
                    </Link>
                    <p>{t("services_page.service_01")}</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-service">
                  <span className="service-number">02 </span>
                  <div className="service-icon">
                    <img src={img2} alt="airport trasport" />
                  </div>
                  <div className="service-text">
                    <Link>
                    <h3>{t("rental_organizations")}</h3>
                    </Link>
                    <p>{t("services_page.service_02")}</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-service">
                  <span className="service-number">03 </span>
                  <div className="service-icon">
                    <img src={img3} alt="hospital trasport" />
                  </div>
                  <div className="service-text">
                    <Link>
                    <h3>{t("rental_embassy")}</h3>
                    </Link>
                    <p>{t("services_page.service_03")}</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-service">
                  <span className="service-number">04 </span>
                  <div className="service-icon">
                    <img src={img4} alt="wedding trasport" />
                  </div>
                  <div className="service-text">
                    <Link>
                    <h3>{t("rental_wedding")}</h3>
                    </Link>
                    <p>{t("services_page.service_04")}</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-service">
                  <span className="service-number">05 </span>
                  <div className="service-icon">
                    <img src={img5} alt="wedding trasport" />
                  </div>
                  <div className="service-text">
                    <Link>
                    <h3>{t("private_tour_guide")}</h3>
                    </Link>
                    <p>{t("services_page.service_05")}</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="single-service">
                  <span className="service-number">06 </span>
                  <div className="service-icon">
                    <img src={img6} alt="wedding trasport" />
                  </div>
                  <div className="service-text">
                    <Link>
                    <h3> {t("guest")}</h3>
                    </Link>
                    <p>{t("services_page.service_06")}</p>
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

export default Service;
