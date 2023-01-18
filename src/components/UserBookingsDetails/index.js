import React, { useEffect, useContext, useState } from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import "./style.css";
import UserContext from '../../context'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Pagination from "../Pagination";
import Records from "./records";

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
  const notify = () => toast("Error fetching bookings");

  const [bookings, setBookings] = useState([])

  const [currentPage, setCurrentPage] = useState('1');
  const recordsPerPage = 7;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      navigate('/login')
    }
    getAllBookings();
  }, [])

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = bookings.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(bookings.length / recordsPerPage)

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
      .post('https://hiso.software-compilers.com/api/getBooking', data)
      .then((res) => {
        if (res.data.success === true) {
          setBookings(res.data.data);
          // console.log(bookings.bookings.length);
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
          {/* All Bookings  */}
            <Records data={currentRecords} />
           {/* Pagination */}
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default UserBookingsDetails;
