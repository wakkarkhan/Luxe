import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import { FaCar, FaCogs, FaTachometerAlt } from 'react-icons/fa'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import loadingGif from '../../img/giphy.gif'
import env from '../../env'

import './style.css'


const HotOffers = (props) => {
  const { t } = useTranslation()
  const [categories, setCategories] = useState([])
  const [cars, setCars] = useState(null)

  const handleClick = async (key) => {
    const data = new FormData()
    data.append('category_id', key)
    const result = await fetch(
      env.apiUrl + 'api/getCars',
      {
        method: 'POST',
        body: data,
      }
    )
    const jsonData = await result.json()

    setCars(jsonData?.data)
    // console.log(jsonData)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        env.apiUrl + 'api/getCategories'
      )
      const jsonData = await result.json()
      setCategories(jsonData.data)
    }
    fetchData()
    handleClick(1)
  }, [])

  return (
    <section className="gauto-offers-area">
      <Container>
        {!props.title &&
          <Row className="section_70">
            <Col md={12}>
              <div className='site-heading'>
                <h4>{t('come_with')}</h4>
                <h2>{t('hot_offers')}</h2>
              </div>
            </Col>
          </Row>
        }
        <Row>
          <Col md={12}>
            <div className='offer-tabs' id='offerTab'>
              <Tabs
                defaultActiveKey='1'
                transition={true}
                id='uncontrolled-tab-example'
                onSelect={handleClick}
              >
                {/* All Brands Start */}
                {/* {categories.map(category =>  */}
                {categories.map((item) => {
                  return (
                    <Tab eventKey={item.id} title={item.name} key={item.id}>
                      {props.title && props.title.match("userBookings") &&
                        <Row>
                          {cars ? (
                            cars?.map((car, index) => {
                              return (
                                <>
                                  {car.IntExImages.length > 0 &&

                                    <Col lg={6} key={index}>
                                      <div className='single-offers'>
                                        <div className='offer-image'>

                                          <Link to='/car-details' state={{ data: car }}>
                                            {car.IntExImages.slice(0, 1).map((c, i) => (
                                              <LazyLoadImage
                                                key={i}
                                                src={env.apiUrl + 'public/Vehicle/' + car.id + '/IntExtImages/' + c.image_path}
                                                placeholderSrc={loadingGif}
                                                alt='image alt'
                                              />
                                            ))}
                                          </Link>
                                        </div>
                                        <div className='offer-text'>
                                          <Link to='/car-booking' state={{ data: car }}>
                                            <h3 className='mt-2'>{car.name.substr(0, 19)}..</h3>
                                          </Link>
                                          <h4>
                                            {car.price_per_day}<span>/ {t('day')}</span>
                                          </h4>
                                          <ul>
                                            <li>
                                              <FaCar />
                                              {t('model')}:{car.model_year}
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
                                          <div className='offer-action'>
                                            <Link
                                              to='/car-booking'
                                              state={{ data: car }}
                                              className='offer-btn-1'
                                            >
                                              {t('rent_car')}
                                            </Link>

                                            <Link
                                              to='/car-details'
                                              state={{ data: car }}
                                              className='offer-btn-2'
                                            >
                                              {t('details')}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  }
                                </>
                              )
                            })
                          ) : (
                            <></>
                          )}
                        </Row>
                      }

                      {/* No-Props */}
                      {!props.title &&
                        <Row>
                          {cars ? (
                            cars?.map((car, index) => {
                              return (
                                <>
                                  {car.IntExImages.length > 0 &&
                                    <Col lg={4} key={index}>
                                      <div className='single-offers'>
                                        <div className='offer-image'>
                                          <Link to='/car-booking' state={{ data: car }}>
                                            {car.IntExImages.slice(0, 1).map((c, i) => (
                                              <LazyLoadImage
                                                key={i}
                                                src={env.apiUrl + 'public/Vehicle/' + car.id + '/IntExtImages/' + c.image_path}
                                                placeholderSrc={loadingGif}
                                                alt='image alt'
                                              />

                                            ))}
                                          </Link>
                                        </div>
                                        <div className='offer-text'>
                                          <Link to='/car-booking' state={{ data: car }}>
                                            <h3 className='mt-3'>{car.name.substr(0, 19)}..</h3>
                                          </Link>
                                          <h4>
                                            {car.price_per_day}<span>/ {t('day')}</span>
                                          </h4>
                                          <ul>
                                            <li>
                                              <FaCar />
                                              {t('model')}:{car.model_year}
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
                                          <div className='offer-action'>
                                            <Link
                                              to='/car-booking'
                                              state={{ data: car }}
                                              className='offer-btn-1'
                                            >
                                              {t('rent_car')}
                                            </Link>

                                            <Link
                                              to='/car-details'
                                              state={{ data: car }}
                                              className='offer-btn-2'
                                            >
                                              {t('details')}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  }
                                </>
                              )
                            })
                          ) : (
                            <></>
                          )
                          }
                        </Row>
                      }
                    </Tab>
                  )
                })}
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HotOffers
