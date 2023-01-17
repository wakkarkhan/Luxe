import React, { useEffect, useContext, useState } from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";

// import img1 from "../../img/service-details-1.jpg";
// import img2 from "../../img/service-details-2.jpg";

import "./style.css";
import UserContext from '../../context'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  FaStar,
  FaStarHalfAlt,
  FaCar,
  FaCogs,
  FaTachometerAlt,
  FaEmpire,
  FaDesktop,
  FaKey,
  FaLock,
  FaEye,
} from 'react-icons/fa'

const UserBookingsDetails = () => {
  // const { t } = useTranslation();
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const notify = () => toast("Error fetching bookings");

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      navigate('/login')
    }
    getAllBookings();
  }, [])

  const { t } = useTranslation()

  const onClickHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("id")
    localStorage.removeItem("dataKey");
    navigate("/login")
    window.location.reload()
  }

  const getAllBookings = async (e) => {
    const data = new FormData()
    data.append('user_id', localStorage.getItem('id'));

    await axios
      .post('https://hiso.software-compilers.com/api/getBooking', data)
      .then((res) => {
        if (res.data.success === true) {
          setBookings(res.data.data)
        }
      })
      .catch(() => {
        notify()
      });
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
                  {bookings.map((booking, index) => (

                    <Accordion.Item eventKey={index} className="single_faq_accordian" key={index}>
                      <Accordion.Header className="faq_accordian_header" style={{padding: "10px 10px"}}>
                      <Row>
                        <Col lg={6}>{booking.bookings[0].pick_and_drop} - {booking.bookings[0].destination}</Col>
                        <Col lg={6}><p style={{ textAlign: "End" }}>{booking.bookings[0].from_date_time} to {booking.bookings[0].to_date_time}</p></Col>
                      </Row>
                        
                      </Accordion.Header>
                      <Accordion.Body>
                        {booking.description}
                        <ul>
                          <li>
                            <FaCar style={{ marginRight: "10px" }} /> {t('model')}: {booking.model_year}
                          </li>
                          <li>
                            <FaCogs style={{ marginRight: "10px" }} /> {booking.transmission}
                          </li>
                          <li>
                            <FaTachometerAlt style={{ marginRight: "10px" }} /> {booking.top_speed}
                          </li>
                          <li>
                            <FaEmpire style={{ marginRight: "10px" }} /> {booking.engine}
                          </li>

                          
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                  ))}
                  {/* <Accordion.Item eventKey="1" className="single_faq_accordian">
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
                  </Accordion.Item> */}
                  {/* <Accordion.Item eventKey="2" className="single_faq_accordian">
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
                  </Accordion.Item> */}
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
