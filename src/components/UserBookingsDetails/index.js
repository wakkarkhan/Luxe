import React, {useEffect, useContext} from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";

// import img1 from "../../img/service-details-1.jpg";
// import img2 from "../../img/service-details-2.jpg";

import "./style.css";
import UserContext from '../../context'


const UserBookingsDetails = () => {
  // const { t } = useTranslation();
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])

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
                  <li className="active">
                  {/* <Link to="/service-single">Today</Link> */}
                  <Link to="/user-bookings">All Bookings</Link>
                  </li>
                  <li>
                  <Link to="/make-bookings">Make Bookings</Link>
                  </li>
                  <li>
                  <Link to="/favourites">Favourites</Link>
                  </li>
                  <li>
                  <Link to="/user-profile">Profile</Link>
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
                <h3>Your Bookings</h3>
                <Accordion>
                  <Accordion.Item eventKey="0" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Thursday 9:00am 2023
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                    Thursday 10:00am 2023
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                    Thursday 11:00am 2023
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserBookingsDetails;
