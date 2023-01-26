import React from 'react'
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
    FaCar,
    FaCogs,
    FaTachometerAlt,
    FaEmpire,
} from 'react-icons/fa'

const Records = ({ data }) => {
    const { t } = useTranslation()

    return (
        <div className="service-details-right">

            <div className="service-accordion" id="accordion">
                <h3>Your Bookings</h3>
                <Accordion>
                    {data.map((booking, index) => (

                        <Accordion.Item eventKey={index} className="single_faq_accordian" key={index}>
                            <Accordion.Header className="faq_accordian_header" style={{ padding: "10px 10px" }}>
                                <Row>
                                    <Col lg={6}>From:  {booking.bookings[0].from_date_time}</Col>
                                    <Col lg={6}><p style={{ textAlign: "End" }}>To:  {booking.bookings[0].to_date_time}</p></Col>
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
                    
                </Accordion>
            </div>
        </div>
    )
}

export default Records  