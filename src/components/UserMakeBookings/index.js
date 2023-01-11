import React, {useEffect} from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import HotOffers from "../HotOffers";
// import img1 from "../../img/service-details-1.jpg";
// import img2 from "../../img/service-details-2.jpg";

import "./style.css";


const UserMakeBookings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickHandler = (e) =>{
      e.preventDefault()
    localStorage.removeItem("id")
    navigate("/login")
    window.location.reload()
  }

  

  return (
    <section className="gauto-service-details-area section_70">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="service-details-left">
              <div className="sidebar-widget">
                <ul className="service-menu">
                  <li>
                  {/* <Link to="/service-single">Today</Link> */}
                  <Link to="/user-bookings">All Bookings</Link>
                  </li>
                  <li className="active">
                  <Link to="/make-bookings">Make Bookings</Link>
                  </li>
                  <li>
                  <Link to="/favourites">Favourites</Link>
                  </li>
                  <li>
                  <Link to="user-profile">Profile</Link>
                  </li>
                  <li>
                  <Link onClick={onClickHandler}>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="service-details-right">
            <div className="service-accordion" id="accordion">
                <h3>Filter & Book New Car</h3>
            </div>
            <HotOffers title="userBookings" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserMakeBookings;
