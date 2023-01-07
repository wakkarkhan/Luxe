import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  // FaHeart,
  // FaFacebookF,
  // FaTwitter,
  // FaLinkedinIn,
  // FaSkype,
  FaPaperPlane,
} from "react-icons/fa";

import logo from "../../img/footer-logo.png";
// import img1 from "../../img/post-thumb-3.jpg";
// import img2 from "../../img/post-thumb-2.jpg";
// import img3 from "../../img/post-thumb-1.jpg";

import "./style.css";

const Footer = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="gauto-footer-area">
      <div className="footer-top-area">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="single-footer">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} alt="footer-logo" />
                  </Link>
                </div>
                <p>
                Our mission is to treat each customer with total respect, deliver superior service, and consistently go above and above their expectations. We make sure that renting a supercar is a once-in-a-lifetime experience.
                </p>
               
              </div>
            </Col>
            <Col lg={4}>
              <div className="single-footer quick_links">
                <h3>{t("footer.quick_links")}</h3>
                <ul className="quick-links">
                  <li>
                    <Link to="/" onClick={onClick}>
                      {" "}
                      {t("footer.about_us")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      {t("footer.our_service")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      {t("footer.case_studies")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      {t("footer.contact_us")}
                    </Link>
                  </li>
                </ul>
                <ul className="quick-links">
                  <li>
                    <Link to="/" onClick={onClick}>
                      {t("footer.testimonials")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      {t("footer.privacy")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      {t("footer.latest_news")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="single-footer newsletter_box">
                <h3>{t("footer.newsletter")}</h3>
                <form onSubmit={SubmitHandler}>
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single-footer">
                <h3> {t("footer.head_office")}</h3>
                <div className="footer-address">
                  {/* <h3>{t("footer.head_office")}</h3> */}
                  <p>
                  Life Condominium, 122 Sukhumvit Road, Phra Khanong, Khlong Toei,  <span>Bangkok 10110</span>
                  </p>
                  <ul>
                    <li>{t("footer.phone")}: +1 234 33657 232  </li>
                    <li>{t("footer.email")}: luxecarrenttim@gmail.com</li>
                    <li>{t("footer.office_time")}: 9AM- 4PM</li>
                  </ul>
                </div>
                {/* <ul>
                  <li>
                    <div className="single-footer-post">
                      <div className="footer-post-image">
                        <Link to="/blog-single">
                          <img src={img1} alt="footer post" />
                        </Link>
                      </div>
                      <div className="footer-post-text">
                        <h3>
                          <Link to="/blog-single">
                            Revealed: How to set goals for you and your team
                          </Link>
                        </h3>
                        <p>Posted on: Jan 12, 2019</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-footer-post">
                      <div className="footer-post-image">
                        <Link to="/blog-single">
                          <img src={img2} alt="footer post" />
                        </Link>
                      </div>
                      <div className="footer-post-text">
                        <h3>
                          <Link to="/blog-single">
                            Revealed: How to set goals for you and your team
                          </Link>
                        </h3>
                        <p>Posted on: Jan 12, 2019</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-footer-post">
                      <div className="footer-post-image">
                        <Link to="/blog-single">
                          <img src={img3} alt="footer post" />
                        </Link>
                      </div>
                      <div className="footer-post-text">
                        <h3>
                          <Link to="/blog-single">
                            apartment in the sky love three boys of his own.
                          </Link>
                        </h3>
                        <p>Posted on: Jan 12, 2019</p>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="footer-bottom-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="copyright">
                <p>
                  Design With <FaHeart /> from{" "}
                  <Link to="/" onClick={onClick}>
                    Themescare
                  </Link>
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-social">
                <ul>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaSkype />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </footer>
  );
};

export default Footer;
