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
                <p>{t("about_page.about_details_01")}</p>
                <p>{t("about_page.about_details_02")}
                 <br />"{t("about_page.about_details_03")}"</p>
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
