import React, { useEffect, useContext, useState } from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion, Spinner } from "react-bootstrap";

import "./style.css";
import UserContext from '../../context'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Pagination from "../Pagination";
import Records from "./records";

import env from "../../env";

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
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const notify = () => toast("Error fetching bookings")
  
  const [bookings, setBookings] = useState([])

  const [isBooked, setIsBooked] = useState('none')
  const [isNotBooked, setIsNotBooked] = useState('none')

  const [currentPage, setCurrentPage] = useState('1');
  const recordsPerPage = 8;

  const [showSpinner, setShowSpinner] = useState('block');

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = bookings.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(bookings.length / recordsPerPage);
  
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

  //get bookings details
  const getAllBookings = async (e) => {
    const data = new FormData()
    data.append('user_id', localStorage.getItem('id'));

    await axios
      .post(env.apiUrl + 'api/getBooking', data)
      .then((res) => {
        setShowSpinner('none');
        if (res.data.success === true) {
          setBookings(res.data.data);
          let totalBookings = res.data.data.length;
         
          if (totalBookings > 0) {
            setIsBooked('block');
            setIsNotBooked('none')

          }
          else {
            setIsNotBooked('block');
            setIsBooked('none')

          }
        }
      })
      .catch(() => {
        setShowSpinner('none');
        notify()
      });
  }

  
  return (
    <section className="gauto-service-details-area section_70">
      {/* Bookings Available */}
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
          <Col lg={8} style={{ display: isBooked }}>
            {/* All Bookings  */}
            <Records data={currentRecords} />
            {/* Pagination */}
            {nPages > 0 && 
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            }
          </Col>

          {/* No bookings */}
          <Col lg={8} style={{ display: isNotBooked }}>
            <div className="no-booking">
              <div className="c">
                <h3 style={{color: 'black'}}
                > You haven't booked a car yet!!!</h3>
              </div>

            </div>

          </Col>

          <Col lg={8} style={{ display: showSpinner }}>
          <div className='' style={{ height: '300px', paddingLeft: "50%" }} >
              <Spinner animation="border" role="status" style={{ marginTop: '120px' }}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>

          </Col>
        </Row>

      </Container>



    </section>
  );
};

export default UserBookingsDetails;
