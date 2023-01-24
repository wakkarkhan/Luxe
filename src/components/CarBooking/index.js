import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  DatePickerComponent,
  TimePickerComponent,
} from '@syncfusion/ej2-react-calendars'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
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

import img1 from '../../img/booking.jpg'
import img2 from '../../img/master-card.jpg'
import img3 from '../../img/paypal.jpg'
import axios from 'axios'

import './style.css'
import UserContext from '../../context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { enableRipple } from '@syncfusion/ej2-base';
import { FormValidator } from '@syncfusion/ej2-inputs';

enableRipple(true);

const CarBooking = () => {
  const dateValue = new Date()
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state;
  const notify = () => toast("Booking Successfull");

  const favNotify = () => toast("Added to Favourites")
  const favRemoved = () => toast("Removed from Favourites")

  const fromToDateError = () => toast("Journey end date should not be before journey start date")
  const fromToTimeError = () => toast("Journey end time should not be before journey start time")

  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const [favIcon, setFavIcon] = useState('none')
  const [notFavIcon, setnotFavIcon] = useState('block')

  const [fromDateStatus, setFromDateStatus] = useState('false');
  const [toDateStatus, setToDateStatus] = useState('false');
  const [fromTimeStatus, setFromTimeStatus] = useState('false');
  const [toTimeStatus, setToTimeStatus] = useState('false');
  const [isDisabled, setDisabled] = useState(false);


  // sets the min
  const minDate = new Date();

  // sets the max
  // const maxDate = new Date('5/25/2023');

  const disable = true;

  let carBookings = [];

  // 
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      navigate('/login')
    }
    fetchFavourites()
    const options = {
      // validation begin event
      validationBegin: (args) => {
      },
      // validation complete event
      validationComplete: (args) => {
        if (args.inputName === 'datepicker1')
          setFromDateStatus(args.status);
        else if (args.inputName === 'datepicker2')
          setToDateStatus(args.status);
        else if (args.inputName === 'timepicker1')
          setFromTimeStatus(args.status);
        else
          setToTimeStatus(args.status);
      },
    };

    const formObject = new FormValidator('#form1', options);
    formObject.addRules('datepicker1', { required: true });
    formObject.addRules('datepicker2', { required: true });
    formObject.addRules('timepicker1', { required: true });
    formObject.addRules('timepicker2', { required: true });
  }, []);

  const { t } = useTranslation()

  // 
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to Favourites
    </Tooltip>
  );

  // 
  const renderTooltipAdded = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Remove from Favourites
    </Tooltip>
  );

  //
  const makeFourite = async () => {
    if (!user) {
      navigate('/login')
    }
    else {
      var data = new FormData();
      const userID = localStorage.getItem('id')
      data.append('user_id', userID);
      data.append('car_id', state.data.id);

      var config = {
        method: 'post',
        url: 'https://hiso.software-compilers.com/api/addToFavourite',

        data: data
      };

      axios(config)
        .then(function (response) {
          if (response.data.message === "Car add in favourite successfully") {
            favNotify()
          }
          if (response.data.message === "Car remove from favourite successfully") {
            favRemoved()
          }
          fetchFavourites()
        })
        .catch(function (error) {
        });
    }
  }

  //disable already booked dates
  const disabledDate = (args) => {
    // console.log(args);
    var date = new Date(args.date);
    // console.log(date);
    var mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2),
      seconds = ('0' + date.getSeconds()).slice(-2),
      year = date.getFullYear(),
      val = year + '-' + mnth + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    // console.log(val)

    var val2 = val.substring(0, 10);

    carBookings = state.data.bookings;

    for (let i = 0; i < carBookings.length; i++) {

      if (carBookings[i].status === '1' && carBookings[i].from_date_time !== null && carBookings[i].to_date_time !== null) {

        var from_date_time = carBookings[i].from_date_time.substring(0, 10)
        var to_date_time = carBookings[i].to_date_time.substring(0, 10)

        if (((val2 >= from_date_time) && ((val2 <= to_date_time)))) {
          args.isDisabled = true;
        }
      }

    }
  }

  // fromDate handling
  const onChangeFromDate = (e) => {
    let date = new Date(e.value)
    var mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2),
      seconds = ('0' + date.getSeconds()).slice(-2),
      year = date.getFullYear(),
      val2 = year + '-' + mnth + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    setFromDate(val2);
  }

  // toDate handling
  const onChangeToDate = (e) => {
    let date = new Date(e.value)
    var mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2),
      seconds = ('0' + date.getSeconds()).slice(-2),
      year = date.getFullYear(),
      val2 = year + '-' + mnth + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    setToDate(val2);

  }

  //reserve booking
  const SubmitHandler = async (e) => {
    e.preventDefault();

    let journey_start_date = fromDate.slice(0, 10);
    let journey_end_date = toDate.slice(0, 10);
    let journey_start = journey_start_date + ' ' + e.target[2].value;
    let journey_end = journey_end_date + ' ' + e.target[3].value;

    // 
    if (!user) {
      navigate('/login')
    }
    // 
    else {
      setDisabled(true);
      if (fromDateStatus === 'success' && toDateStatus === 'success' && fromTimeStatus === 'success' && toTimeStatus === 'success') {
        if (journey_start_date > journey_end_date) {
          fromToDateError();
          setDisabled(false);

        }
        else if (journey_start_date === journey_end_date) {
          if (e.target[2].value > e.target[3].value) {
            fromToTimeError();
            setDisabled(false);
          }
          else {
            addNewBooking(journey_start, journey_end, e)
          }
        }
        // 
        else {
          addNewBooking(journey_start, journey_end, e)

        }
      }
    }
  }

  function dateConverter(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2),
      seconds = ('0' + date.getSeconds()).slice(-2),
      year = date.getFullYear()
    return `${year}/${mnth}/${day} ${hours}:${minutes}:${seconds}`
  }

  const onClick = (e) => {
    e.preventDefault()
  }

  // 
  const fetchFavourites = async () => {
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

    let favourites = jsonData?.data

    let totalFavCars = jsonData?.data.length
    // console.log(totalFavCars);

    let car_id = state.data.id;

    if (totalFavCars > 0) {
      for (let i = 0; i < totalFavCars; i++) {
        let id = favourites[i].id;

        if (id === car_id) {
          setFavIcon('block');
          setnotFavIcon('none')
          return
        }
        else {
          setFavIcon('none');
          setnotFavIcon('block')
        }
      }
    }
    else {
      setFavIcon('none');
      setnotFavIcon('block')
    }
  }

  // add new booking
  const addNewBooking = async (val1, val2, e) => {
    // console.log(val1);
    // console.log(val2);

    const data = new FormData()

    data.append('car_id', state.data.id)
    data.append('user_id', localStorage.getItem("id"))
    // data.append('destination', document.getElementById('to_address').value)
    data.append('destination', '')
    data.append('pick_and_drop', '')
    data.append('from_date_time', val1)
    data.append('to_date_time', val2)
    data.append('status', 1)
    data.append('payment_id', 1)
    try {
      const result = await axios.post(
        'https://hiso.software-compilers.com/api/makeBooking',
        data
      )
      if (result.status === 200) {
        notify()
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        setTimeout(
          function () {
            navigate('/user-bookings')
          }
            .bind(this),
          3000
        );

      } else {
        alert('error')
      }
    } catch (error) {
      alert('error')
    }

  }

  return (
    <>
      <section className='gauto-car-booking section_70'>
        <Container>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Row>
            <Col lg={6}>
              <div className='car-booking-image'>
                <Carousel showArrows={true} >
                  {state.data.IntExImages.map((c, index) => (
                    <div key={index}>
                      {
                        index > 1 &&
                        <img src={'https://hiso.software-compilers.com/public/Vehicle/' + c.car_id + '/IntExtImages/' + c.image_path} />
                      }
                    </div>
                  )
                  )}
                </Carousel>
              </div>
            </Col>
            <Col lg={6}>
              <div className='car-booking-right'>
                <div style={{ display: 'inline-flex' }}>
                  <p className='rental-tag'>{t('rental')}</p>
                  {/* Add to Favourites */}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <div className="fav-bg" style={{ display: notFavIcon }} >
                      <FaStar size={30} style={{ color: "white", fontSize: "1.5em" }} onClick={makeFourite} /></div>
                  </OverlayTrigger>

                  {/* Already added to Favourites */}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltipAdded}
                  >
                    <div className="fav-bg" style={{ display: favIcon }} >
                      <FaStar size={30} style={{ color: "yellow", fontSize: "1.5em" }} onClick={makeFourite} /></div>
                  </OverlayTrigger>
                </div>

                <h3>{state.data.name}</h3>
                <div className='price-rating'>
                  <div className='price-rent'>
                    <h4>
                      {state.data.price_per_day}<span>/ {t('day')}</span>
                    </h4>
                  </div>
                  {/* <div className='car-rating'>
                    <ul>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStarHalfAlt />
                      </li>
                    </ul>
                    <p>(123 {t('rating')})</p>
                  </div> */}
                </div>
                <p>
                  {' '}
                  {state.data.description}
                </p>
                <div className='car-features clearfix'>
                  <ul>
                    <li>
                      <FaCar /> {t('model')}:{state.data.model_year}
                    </li>
                    <li>
                      <FaCogs /> {state.data.transmission}
                    </li>
                    <li>
                      <FaTachometerAlt /> {state.data.top_speed}
                    </li>
                    <li>
                      <FaEmpire /> V-6 Cylinder
                    </li>
                  </ul>
                  {/* <ul>
                    <li>
                      <FaEye /> GPS Navigation
                    </li>
                    <li>
                      <FaLock /> Anti-Lock Brakes
                    </li>
                    <li>
                      <FaKey /> Remote Keyless
                    </li>
                    <li>
                      <FaDesktop /> Rear-Seat DVD
                    </li>
                  </ul>
                  <ul> 
                    <li>
                      <FaCar /> {t('model')}:2017
                    </li>
                    <li>
                      <FaCogs /> {t('automatic')}
                    </li>
                    <li>
                      <FaTachometerAlt /> 20kmpl
                    </li>
                    <li>
                      <FaEmpire /> V-6 Cylinder
                    </li>
                  </ul>*/}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='gauto-booking-form section_70'>
        <Container>
          {/* <form onSubmit={SubmitHandler}> */}
          <Row>
            <Col lg={12}>
              <div className='booking-form-left'>
                <div className='single-booking'>
                  <h3>{t('car_booking.booking_details')}</h3>
                  <form id="form1" onSubmit={SubmitHandler}>


                    {/* Journey Date Selection */}
                    <Row>
                      <Col md={6}>
                        <p>
                          <DatePickerComponent
                            id="datepicker1"
                            format="dd/MM/yyyy"
                            placeholder={t('journey_start_date')}
                            renderDayCell={disabledDate}
                            strictMode={disable}
                            min={minDate}
                            onChange={onChangeFromDate}
                          />
                        </p>
                        <label className='e-error' id='timepickerError' htmlFor='datepicker1' />
                      </Col>
                      <Col md={6}>
                        <p>
                          <DatePickerComponent
                            id='datepicker2'
                            format='dd/MM/yyyy'
                            placeholder={t('journey_end_date')}
                            renderDayCell={disabledDate}
                            strictMode={disable}
                            min={minDate}
                            onChange={onChangeToDate}
                          />
                        </p>
                        <label className='e-error' id='timepickerError' htmlFor='datepicker2' />
                      </Col>
                    </Row>

                    {/* Journey Time Selection */}
                    <Row>
                      <Col md={6}>
                        <p>
                          <TimePickerComponent
                            id="timepicker1"
                            placeholder={t('journey_start_time')}
                            step={30}
                            format={'HH:mm'}
                          />
                        </p>
                        <label className='e-error' id='timepickerError' htmlFor='timepicker1' />
                      </Col>
                      <Col md={6}>
                        <p>
                          <TimePickerComponent
                            id="timepicker2"
                            placeholder={t('journey_end_time')}
                            step={30}
                            format={'HH:mm'}
                          />
                        </p>
                        <label className='e-error' id='timepickerError' htmlFor='timepicker2' />
                      </Col>
                    </Row>

                    <Row className='mt-4'>
                      <Col md={4}></Col>
                      <Col md={4}></Col>
                      <Col md={4}>
                        {/* <div className='action-btn'> */}
                        <button className='gauto-theme-btn mt-20' type='submit' disabled={isDisabled}>
                          {t('researve_now')}
                        </button>
                        {/* </div> */}
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
          {/* </form> */}
        </Container>
      </section>
    </>
  )
}

export default CarBooking
