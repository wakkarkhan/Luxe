import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
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

import "./style.css";

import env from "../../env";

const CarList = () => {
  const { t } = useTranslation();
  const location = useLocation()
  const [categories, setCategories] = useState([])
  const [cars, setCars] = useState(null)
  const [match, setMatch] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

 

  const handleClick = async (key) => {
    setMatch(key)
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
    <section className="gauto-car-listing section_70">
      <Container>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Col lg={4}>
                <Nav variant="pills" className="flex-column" onSelect={handleClick}>
                {categories.map((item, index) => {
                  return (
                  <Nav.Item >
                    <Nav.Link eventKey={item.id} title={item.name} >{item.name}</Nav.Link>
                  </Nav.Item>
                  )}
                )}
                  {/* <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col lg={8}>
              <div className="car-listing-right">
                <Tab.Content>
                <Row>
                  {cars ? (
                    cars?.map((car, index) => {
                      return (
                        
                        <Col lg ={6}>
                          <Tab.Pane eventKey={match}>
                          
                              <div className="car-listing-right">
                                <div className="car-grid-list">

                                   
                                      {/* <Col lg ={5}> */}
                                            <div className='single-offers'>
                                              <div className='offer-image'>
                                                <Link to='/car-booking'>
                                                {car.IntExImages.slice(0, 1).map((c, i) => (
                                                  <img src={env.apiUrl + 'public/Vehicle/'+car.id+'/IntExtImages/'+c.image_path} alt='offer 1' />
                                                ))}
                                                </Link>
                                              </div>
                                              <div className='offer-text'>
                                                <Link to='/car-booking' state={{data: car}}>
                                                  <h3>{car.name.substr(0, 19)}..</h3>
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
                                                    state={{data: car}}
                                                    className='offer-btn-1'
                                                  >
                                                    {t('rent_car')}
                                                  </Link>

                                                  <Link
                                                    to='/car-details'
                                                    state={{data: car}}
                                                    className='offer-btn-2'
                                                  >
                                                    {t('details')}
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                      {/* </Col> */}

                                    
                                  
                                </div>
                              </div>

                            </Tab.Pane>
                          </Col>
                         

                            
                            )
                          })
                        ) : (
                          <></>
                        )}
                        </Row>
                        
                </Tab.Content>
              </div>
            </Col>
            </Tab.Container>
        </Row>
      </Container>
    </section>
  );
};

export default CarList;
