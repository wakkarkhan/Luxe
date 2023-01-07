import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

import "./style.css";

const Help = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-call-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="call-box">
              <div className="call-box-inner">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t("partner_location_text", {
                      partner_count: "<span>150</span>",
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></h2>
                <p>
                We adhere to a disciplined system of self-evaluation and development.
                In order to give consumers the greatest possible travel experience, we never stop working to offer them better and more modern services. Additionally, we are dedicated to improving ties among all participants in the service chain, including all colleagues, suppliers, and clients.
                <br />
                "We put in more effort than the others."
                </p>
                <div className="call-number">
                  <div className="call-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="call-text">
                    <p>{t("need_any_help")}</p>
                    <h4>
                      <a href="tel:4315292093">(065) 424 5244</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Help;
