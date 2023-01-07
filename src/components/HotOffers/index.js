import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { FaCar, FaCogs, FaTachometerAlt } from "react-icons/fa";

import img1 from "../../img/offer-toyota.png";
import img2 from "../../img/nissan-offer.png";
import img3 from "../../img/audi-offer.png";
import img4 from "../../img/bmw-offer.png";
import img5 from "../../img/toyota-offer-2.png";
import img6 from "../../img/marcedes-offer.png";

import "./style.css";

const HotOffers = () => {
  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);
  const handleClick = () =>{
    alert();
  }

  useEffect(()=>{
    
    const fetchData = async ()=>{
    const result = await fetch('https://hiso.software-compilers.com/api/getCategories');
    const jsonData = await result.json();
    // console.log(jsonData.data);
    setCategories(jsonData.data);

    }
    fetchData();

  }, []);

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-offers-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="site-heading">
              <h4>{t("come_with")}</h4>
              <h2>{t("hot_offers")}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="offer-tabs" id="offerTab">
              <Tabs
                defaultActiveKey="sport car"
                transition={true}
                id="uncontrolled-tab-example"
              >
                {/* All Brands Start */}
                {/* {categories.map(category =>  */}
                {categories.map(item => 
                  <Tab eventKey={item.name} title={item.name} onClick={handleClick}>
                      <Row>
                        <Col lg={4}>
                          <div className="single-offers">
                            <div className="offer-image">
                              <Link to="/car-booking">
                                <img src={img1} alt="offer 1" />
                              </Link>
                            </div>
                            <div className="offer-text">
                              <Link to="/car-booking">
                                <h3>Toyota Alphard</h3>
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
                                <Link
                                  to="/car-booking"
                                  onClick={onClick}
                                  className="offer-btn-1"
                                >
                                  {t("rent_car")}
                                </Link>
                                <Link
                                  to="/car-booking"
                                  onClick={onClick}
                                  className="offer-btn-2"
                                >
                                  {t("details")}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                )}
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotOffers;
