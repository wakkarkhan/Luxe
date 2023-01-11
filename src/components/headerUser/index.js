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

const HeaderUser = () => {
  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  // const onClick = (e) => {
  //   e.preventDefault();
  // };

  const { t } = useTranslation();
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const useLinkClickHandler = () =>{
    localStorage.removeItem("id")
    navigate("/login")
  }

  return (
    <Fragment>
      <section className="gauto-header-top-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="header-top-left">
                <p>
                  {t("need_help")} <FaPhoneAlt /> {t("call")}: +321 123 45 978
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
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaGlobe /> {t("language")}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {languages.map(({ code, name, country_code }) => (
                      <Dropdown.Item
                        eventKey={name}
                        key={country_code}
                        to="/"
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code}`}
                        ></span>{" "}
                        {name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
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
                    <h3>Monday to Friday</h3>
                    <p>9:00am - 6:00pm</p>
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
            <Col lg={9}>
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation">
                    <li> 
                      <Link to="/all-bookings">All Bookings</Link>
                    </li>
                    <li>
                      <Link to="/filter-car">Make Bookings</Link>
                    </li>
                    <li>
                      <Link to="/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link>Profile</Link>
                    </li>
                    <li>
                      <Link to="/login">Logout</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              {/* <div className="main-search-right">
                <MobileMenu />
                <div className="header-cart-box">
                  <div className="login dropdown">
                    <Link to="/cart" className="cart-icon" id="dropdownMenu1">
                      <span>2</span>
                    </Link>
                  </div>
                </div>
                <div className="search-box">
                  <form onSubmit={SubmitHandler}>
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default HeaderUser;
