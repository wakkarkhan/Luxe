import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCar,
  FaCogs,
  FaTachometerAlt,
  FaAngleDoubleRight,
} from "react-icons/fa";
// import {
//   DatePickerComponent,
//   TimePickerComponent,
// } from "@syncfusion/ej2-react-calendars";

import img2 from "../../img/nissan-offer.png";
import img3 from "../../img/audi-offer.png";
import img4 from "../../img/bmw-offer.png";
import img5 from "../../img/toyota-offer-2.png";
import img6 from "../../img/marcedes-offer.png";

import "./style.css";

const CarList = () => {
  const { t } = useTranslation();

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//   };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-car-listing section_70">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="car-listing-right">
              <div className="car-grid-list">
                <Row>
                  <Col md={4}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                          <img src={img2} alt="offer 1" />
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>Nissan 370Z</h3>
                        </Link>
                        <h4>
                          $75.00<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:2017
                          </li>
                          <li>
                            <FaCogs />
                            {t("automatic")}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            20kmpl
                          </li>
                        </ul>
                        <div className="offer-action">
                          <Link to="/car-booking" className="offer-btn-1">
                            {t("rent_car")}
                          </Link>
                          <Link to="/car-booking" className="offer-btn-2">
                            {t("details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                          <img src={img3} alt="offer 1" />
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>Audi Q3</h3>
                        </Link>
                        <h4>
                          $45.00<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:2017
                          </li>
                          <li>
                            <FaCogs />
                            {t("automatic")}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            20kmpl
                          </li>
                        </ul>
                        <div className="offer-action">
                          <Link to="/car-booking" className="offer-btn-1">
                            {t("rent_car")}
                          </Link>
                          <Link to="/car-booking" className="offer-btn-2">
                            {t("details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                          <img src={img4} alt="offer 1" />
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>BMW X3</h3>
                        </Link>
                        <h4>
                          $50.00<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:2017
                          </li>
                          <li>
                            <FaCogs />
                            {t("automatic")}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            20kmpl
                          </li>
                        </ul>
                        <div className="offer-action">
                          <Link to="/car-booking" className="offer-btn-1">
                            {t("rent_car")}
                          </Link>
                          <Link to="/car-booking" className="offer-btn-2">
                            {t("details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  
                  <Col md={4}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                          <img src={img5} alt="offer 1" />
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>Toyota Camry</h3>
                        </Link>
                        <h4>
                          $55.00<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:2017
                          </li>
                          <li>
                            <FaCogs />
                            {t("automatic")}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            20kmpl
                          </li>
                        </ul>
                        <div className="offer-action">
                          <Link to="/car-booking" className="offer-btn-1">
                            {t("rent_car")}
                          </Link>
                          <Link to="/car-booking" className="offer-btn-2">
                            {t("details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                          <img src={img6} alt="offer 1" />
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>marcedes S-class</h3>
                        </Link>
                        <h4>
                          $50.00<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:2017
                          </li>
                          <li>
                            <FaCogs />
                            {t("automatic")}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            20kmpl
                          </li>
                        </ul>
                        <div className="offer-action">
                          <Link to="/car-booking" className="offer-btn-1">
                            {t("rent_car")}
                          </Link>
                          <Link to="/car-booking" className="offer-btn-2">
                            {t("details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                          <img src={img2} alt="offer 1" />
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>Audi Q3</h3>
                        </Link>
                        <h4>
                          $45.00<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:2017
                          </li>
                          <li>
                            <FaCogs />
                            {t("automatic")}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            20kmpl
                          </li>
                        </ul>
                        <div className="offer-action">
                          <Link to="/car-booking" className="offer-btn-1">
                            {t("rent_car")}
                          </Link>
                          <Link to="/car-booking" className="offer-btn-2">
                            {t("details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="pagination-box-row">
                <p>Page 1 of 6</p>
                <ul className="pagination">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaAngleDoubleRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarList;
