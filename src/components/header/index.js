import React, { Fragment, useContext } from "react";
import { Link, useNavigate, useLinkClickHandler } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaSignInAlt,
  FaUserAlt,
  // FaSearch,
  FaGlobe,
} from "react-icons/fa";
// import MobileMenu from "../../components/MobileMenu";

import Logo from "../../img/logo.png";
import globe from "../../img/globe.png";
import clock from "../../img/clock.png";
import "flag-icon-css/css/flag-icons.min.css";
import "./style.css";
import UserContext from '../../context'

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pt",
    name: "Português",
    country_code: "pt",
  },
];

const Header = () => {
  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  const onClick = (e) => {
    e.preventDefault();
  };

  const { t } = useTranslation();
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const useLinkClickHandler = () =>{
    localStorage.removeItem("id")
    navigate("/login")
    window.location.reload()
  }
  const goToDashboard = () => {
    navigate("/user-bookings")
  }

  return (
    <Fragment>
      <section className="gauto-header-top-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="header-top-left">
                <p>
                  {t("need_help")} <FaPhoneAlt /><a className="text-white" href="tel:+32112345978"> {t("call")}: +065 424 5244</a>
                </p>
              </div>
            </Col>
            <Col md={6}>
            { !user && 
              <div className="header-top-right">
                <Link to="/login">
                  <FaSignInAlt />
                  {t("login")}
                </Link>
                <Link to="/register">
                  <FaUserAlt />
                  {t("register")}
                </Link>
               
              </div>
              }
              { user &&
                <div className="header-top-right">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FaUserAlt /> You are loggedin
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {/* {languages.map(({ code, name, country_code }) => ( */}
                        <Dropdown.Item
                          eventKey='bookings'
                          key='bookings'
                          onClick={goToDashboard}
                        >
                          Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item
                          eventKey='logout'
                          key='logout'
                          onClick={useLinkClickHandler}
                        >
                          Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              }
            </Col>
          </Row>
        </Container>
      </section>
      <header className="gauto-main-header-area">
        <Container>
          <Row>
            <Col md={3}>
              <div className="site-logo">
                <a href="/">
                  <img src={Logo} alt="gauto" />
                </a>
              </div>
            </Col>
            <Col lg={6} sm={9}>
              <div className="header-promo">
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={globe} alt="globe" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Thailand</h3>
                    <p>{t("bangkok_city")}</p>
                  </div>
                </div>
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={clock} alt="clock" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Monday to Sunday</h3>
                    <p>24/7 Service</p>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-lg-3">
              <div className="header-action">
                <Link to="/contact">
                  <FaPhoneAlt /> {t("request_call")}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </header>
      <section className="gauto-mainmenu-area">
        <Container>
          <Row>
          <Col lg={12}>
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation" className="text-center">
                   
                    <li>
                      <Link to="/">{t("header-navigation.home")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("header-navigation.about")}</Link>
                    </li>
                    <li>
                      <Link to="/services">{t("header-navigation.service")}</Link>
                    </li>
                    <li>
                      <Link to="/cars">{t("header-navigation.cars")}</Link>
                    </li>
                    <li>
                      <Link to="/gallery">
                        {t("header-navigation.gallery")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        {t("header-navigation.contact")}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Header;
