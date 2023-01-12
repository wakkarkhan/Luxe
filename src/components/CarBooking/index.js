import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  DatePickerComponent,
  TimePickerComponent,
} from '@syncfusion/ej2-react-calendars'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
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

const CarBooking = () => {
  const dateValue = new Date()
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state;
  const notify = () => toast("Booking Successfull");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, []);
  const { t } = useTranslation()

  const SubmitHandler = async (e) => {
    e.preventDefault()
    //   useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    else{
        const data = new FormData()

    data.append('car_id', state.data.id)
    data.append('user_id', localStorage.getItem('id'))
    data.append('destination', e.target[0].value)
    data.append('pick_and_drop', e.target[1].value)
    data.append('from_date_time', dateConverter(dateValue))
    data.append('to_date_time', dateConverter(dateValue))
    data.append('status', 1)
    data.append('payment_id', 1)
    try {
      const result = await axios.post(
        'https://hiso.software-compilers.com/api/makeBooking',
        data
      )
      if (result.status === 200) {
        notify()
        e.target.reset()
        setTimeout(
          function() {
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
//   }, [])

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
                {state.data.IntExImages.slice(0, 1).map((c, i) => (
                  <img src={'https://hiso.software-compilers.com/public/Vehicle/'+c.car_id+'/IntExtImages/'+c.image_path} alt='car' />
                ))}
              </div>
            </Col>
            <Col lg={6}>
              <div className='car-booking-right'>
                <p className='rental-tag'>{t('rental')}</p>
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
                    <form onSubmit={SubmitHandler}>
                      <Row>
                        <Col md={6}>
                          <p>
                            <input
                              type='text'
                              placeholder={t('from_address')}
                              name="from_address"
                              required
                            />
                          </p>
                        </Col>
                        <Col md={6}>
                          <p>
                            <input
                              type='text'
                              placeholder={t('to_address')}
                              name="to_address"
                              required
                            />
                          </p>
                        </Col>
                      </Row>
                     
                      <Row>
                        <Col md={6}>
                          <p>
                            <DatePickerComponent
                              id='datepicker'
                              value={dateValue}
                              format='dd/MM/yyyy'
                              placeholder={t('journey_date')}
                            ></DatePickerComponent>
                          </p>
                        </Col>
                        <Col md={6}>
                          <p>
                            <DatePickerComponent
                              id='datepicker'
                              value={dateValue}
                              format='dd/MM/yyyy'
                              placeholder={t('journey_date')}
                            ></DatePickerComponent>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                      <Col md={4}></Col>
                      <Col md={4}></Col>
                          <Col md={4}>
                            {/* <div className='action-btn'> */}
                                <button className='gauto-theme-btn mt-20' type='submit'>
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
