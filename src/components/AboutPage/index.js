import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

import img1 from "../../img/about-page.jpeg";
import img2 from "../../img/cars.png";

import "./style.css";

const AboutPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="about-page-area section_70">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about-page-left">
                <h4>{t("about_page.subtitle")}</h4>
                <h3>{t("about_page.title")}</h3>
                <p>
                We adhere to a disciplined system of self-evaluation and development.
                In order to give consumers the greatest possible travel experience, we never stop working to offer them better and more modern services. Additionally, we are dedicated to improving ties among all participants in the service chain, including all colleagues, suppliers, and clients. Customers' feedback is actively encouraged, and we take delight in incorporating it and figuring out how it can make us better.
                

                </p>
                <p>
                We are aware that in order to fully satisfy clients, our team must always put the needs of the customer first. We are committed to the cause and provide service around-the-clock. We look into and purchase brand-new supercars that are unavailable in Thailand.
                "We put in more effort than the others."
                </p>
                <div className="about-page-call">
                  <div className="page-call-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="call-info">
                    <p>{t("need_any_help")}</p>
                    <h4>
                      <a href="tel:12435424">0654245244</a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-page-right">
                <img src={img1} alt="about page" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gauto-about-promo section_70">
        <Container>
          <Row>
            <Col md={12}>
              <div className="about-promo-text">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: t("about_page.proud_title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="about-promo-image">
                <img src={img2} alt="about promo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
