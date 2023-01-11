import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../img/rental_tourist.png";
import img2 from "../../img/rental_organizations.jpg";
import img3 from "../../img/rental_embassy.png";
import img4 from "../../img/rental_wedding.png";
import img5 from "../../img/private_tour_guide.png";
import img6 from "../../img/guest.png";

import "./style.css";

const ServiceList = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-service-area service-page-area section_70">
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
          <Col md={4}>
            <div className="single-service">
              <span className="service-number">01 </span>
              <div className="service-icon">
                <img src={img1} alt="city trasport" />
              </div>
              <div className="service-text">
                <Link>
                  <h3>{t("rental_tourist")}</h3>
                </Link>
                <p>
                LUXE offers the perfect car rental solution for tourists coming to experience all that our beautiful city has to offer. We have a wide selection of vehicles to choose from, so you can find the perfect one to suit your needs and budget. Our friendly and professional staff will be happy to help you with any queries you may have....
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service">
              <span className="service-number">02 </span>
              <div className="service-icon">
                <img src={img2} alt="airport trasport" />
              </div>
              <div className="service-text">
                <Link>
                  <h3>{t("rental_organizations")}</h3>
                </Link>
                <p>
                Luxe is the perfect way to make a statement at your next corporate event or big day. We offer a wide selection of top-of-the-line luxury cars for rent, so you can choose the perfect vehicle to match your style. Whether you're in need of a sleek and stylish sedan for a business trip, or a spacious SUV for a family vacation, we have the perfect car for you....
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service">
              <span className="service-number">03 </span>
              <div className="service-icon">
                <img src={img3} alt="hospital trasport" />
              </div>
              <div className="service-text">
                <Link>
                  <h3>{t("rental_embassy")}</h3>
                </Link>
                <p>
                LUXE is a premium car rental service that offers luxury vehicles for rent to embassies and other high-profile organizations. We understand that our clients require the utmost in professionalism  and we are committed to providing an exceptional level of service. LUXE provides premium services such as chauffeur services.....
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service">
              <span className="service-number">04 </span>
              <div className="service-icon">
                <img src={img4} alt="wedding trasport" />
              </div>
              <div className="service-text">
                <Link>
                  <h3>{t("rental_wedding")}</h3>
                </Link>
                <p>
                LUXE provide affordable, high-quality wedding car rental vehicles to help you enjoy your special day in style and elegance. Our high-quality vehicles can comfortably and conveniently transport your guests, family and friends, or wedding party throughout your special day.......
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service">
              <span className="service-number">05 </span>
              <div className="service-icon">
                <img src={img5} alt="wedding trasport" />
              </div>
              <div className="service-text">
                <Link>
                  <h3>{t("private_tour_guide")}</h3>
                </Link>
                <p>
                LUXE has the perfect car for any event, with a large range of the latest models from the leading brands. LUXE has you covered whether you're attending a black-tie event or just want to enjoy a dinner date in style. And with our private driver and private tour guide , you can be confident.....
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service">
              <span className="service-number">06 </span>
              <div className="service-icon">
                <img src={img6} alt="wedding trasport" />
              </div>
              <div className="service-text">
                <Link>
                  <h3> {t("guest")}</h3>
                </Link>
                <p>
                LUXE is the perfect car rental service for important guests of the country or public organizations. We offer a wide range of luxury cars to choose from, so you can find the perfect one to match your needs and budget. Our team of professional drivers are experienced and knowledgeable, so you can...
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceList;
