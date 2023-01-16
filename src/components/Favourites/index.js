import React, {useEffect, useState} from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";

// import img1 from "../../img/service-details-1.jpg";
// import img2 from "../../img/service-details-2.jpg";

import "./style.css";
import {
  FaCar,
  FaCogs,
  FaTachometerAlt,
  FaAngleDoubleRight,
} from "react-icons/fa";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";

import img2 from "../../img/nissan-offer.png";
import img3 from "../../img/audi-offer.png";
import img4 from "../../img/bmw-offer.png";
import img5 from "../../img/toyota-offer-2.png";
import img6 from "../../img/marcedes-offer.png";

const UserFavourites = () => {
  const { t } = useTranslation();
  const [cars, setCars] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const onClick = (e) => {
    e.preventDefault();
  };

  const onClickHandler = (e) =>{
      e.preventDefault()
    localStorage.removeItem("id");
    localStorage.removeItem("dataKey");
    navigate("/login")
    window.location.reload()
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = new FormData()
      const userID = localStorage.getItem('id')
      data.append('user_id', userID)
      const result = await fetch(
        'https://hiso.software-compilers.com/api/getFavouriteCars',
        {
          method: 'POST',
          body: data,
        }
      )
      const jsonData = await result.json()
  
      setCars(jsonData?.data)
    }
    fetchData()
  }, [])

  

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
                  <li>
                  <Link to="/make-bookings">Make Bookings</Link>
                  </li>
                  <li className="active">
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
                  <h3>Your Favourites</h3>
              </div>
              <div className="car-listing-right">
              <div className="car-grid-list">
                <Row>
                {cars?.map((car) => {
                  return (
                    <Col md={6}>
                    <div className="single-offers">
                      <div className="offer-image">
                        <Link to="/car-booking">
                        {car.IntExImages.slice(0, 1).map((c, i) => (
                          <img src={'https://hiso.software-compilers.com/public/Vehicle/'+car.id+'/IntExtImages/'+c.image_path} alt='offer 1' />
                        ))}
                        </Link>
                      </div>
                      <div className="offer-text">
                        <Link to="/car-booking">
                          <h3>{car.name}</h3>
                        </Link>
                        <h4>
                          {car.price_per_day}<span>/ {t("day")}</span>
                        </h4>
                        <ul>
                          <li>
                            <FaCar />
                            {t("model")}:{car.model_year}
                          </li>
                          <li>
                            <FaCogs />
                            {car.transmission}
                          </li>
                          <li>
                            <FaTachometerAlt />
                            {car.car_range}
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
                  )}
                )}
                 
                  
                </Row>
                
              </div>
              {/* <div className="pagination-box-row">
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
              </div> */}
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserFavourites;
