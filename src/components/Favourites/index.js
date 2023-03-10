import React, { useEffect, useState, useContext } from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion, Tooltip, OverlayTrigger } from "react-bootstrap";

import axios from 'axios'

import UserContext from '../../context'
import { ToastContainer, toast } from 'react-toastify'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import loadingGif from '../../img/giphy.gif'
import 'react-lazy-load-image-component/src/effects/blur.css';

import env from "../../env";

import "./style.css";
import {
  FaStar,
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

  const { user } = useContext(UserContext)

  const [isFavourite, setIsFavourite] = useState('none')
  const [isNotFavourite, setIsNotFavourite] = useState('none')

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData()
  }, []);

  //
  const removeFourite = async (id) => {
    if (!user) {
      navigate('/login')
    }
    else {
      var data = new FormData();
      const userID = localStorage.getItem('id')
      data.append('user_id', userID);
      data.append('car_id', id);

      var config = {
        method: 'post',
        url: env.apiUrl + 'api/addToFavourite',

        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(response.data.message);
          if (response.data.message === "Car remove from favourite successfully") {
            fetchData();
          }
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  }

  // 
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        {t("car_booking.make_unfav_notify")}
    </Tooltip>
  );

  const onClick = (e) => {
    e.preventDefault();
  };

  const onClickHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("id");
    localStorage.removeItem("dataKey");
    navigate("/login")
    window.location.reload()
  }

  const fetchData = async () => {
    const data = new FormData()
    const userID = localStorage.getItem('id')
    data.append('user_id', userID)
    const result = await fetch(
      env.apiUrl + 'api/getFavouriteCars',
      {
        method: 'POST',
        body: data,
      }
    )
    const jsonData = await result.json()

    setCars(jsonData?.data);

    // console.log(cars);
    let totalFavCars = jsonData?.data.length
    console.log(totalFavCars);
    if (totalFavCars > 0) {
      setIsFavourite('block');
      setIsNotFavourite('none');

    }
    else {
      setIsFavourite('none');
      setIsNotFavourite('block');
    }
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
                    <Link to="/user-bookings">{t("all_bookings")}</Link>
                  </li>
                  <li>
                    <Link to="/make-bookings">{t("make_booking")}</Link>
                  </li>
                  <li className="active">
                    <Link to="/favourites">{t("header-navigation-user.favourites")}</Link>
                  </li>
                  <li>
                    <Link to="/user-profile">{t("profile")}</Link>
                  </li>
                  <li>
                    <Link onClick={onClickHandler}>{t("logout")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8} style={{ display: isFavourite }}>
            <div className="service-details-right">
              <div className="service-accordion" id="accordion">
                <h3>{t("fav.your_fav")}</h3>
              </div>
              <div className="car-listing-right">
                <div className="car-grid-list">
                  <Row>
                    {cars?.map((car) => {
                      return (
                        <Col md={6}>
                          <div className="single-offers">
                            {car.IntExImages.slice(0, 1).map((c, i) => (
                              <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                              >

                                <div style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: 'black', padding: '4px 5px', marginLeft: 'auto', cursor: 'pointer' }} onClick={() => {
                                  removeFourite(car.id);
                                }} >
                                  <FaStar size={30} style={{ color: "yellow", fontSize: "1.5em" }} />
                                </div>

                              </OverlayTrigger>
                            ))}

                            {/* <img src={' https://api.luxecar.app/public/Vehicle/' + car.id + '/IntExtImages/' + c.image_path} alt='offer 1' /> */}

                            <div className="offer-image">

                              <Link to="/car-booking" state={{ data: car }}>
                                {car.IntExImages.slice(0, 1).map((c, i) => (

                                  <LazyLoadImage
                                    key={i}
                                    src={env.apiUrl + 'public/Vehicle/' + car.id + '/IntExtImages/' + c.image_path}
                                    placeholderSrc={loadingGif}
                                    alt="Image Alt"
                                  />

                                ))}
                              </Link>
                            </div>
                            <div className="offer-text">
                              <Link to="/car-booking" state={{ data: car }}>
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
                                <Link to="/car-booking" className="offer-btn-1" state={{ data: car }}>
                                  {t("rent_car")}
                                </Link>
                                <Link to="/car-details" className="offer-btn-2" state={{ data: car }}>
                                  {t("details")}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                      )
                    }
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

          {/* No favourites */}
          <Col lg={8} style={{ display: isNotFavourite }}>
            <div className="no-booking">
              <div className="c">
                <h3 style={{ color: 'black' }}
                >{t("fav.no_fav")}</h3>
              </div>

            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserFavourites;
