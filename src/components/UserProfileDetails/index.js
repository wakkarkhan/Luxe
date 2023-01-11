import React, { useContext, useEffect } from "react";
import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion, Nav, Tab, Tabs } from "react-bootstrap";

// import img1 from "../../img/service-details-1.jpg";
// import img2 from "../../img/service-details-2.jpg";

import "./style.css";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import UserContext from '../../context'
import axios from 'axios'

const UserProfileDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const notify = () => toast("Profile Updated");
  const notifyImage = () => toast("Profile Picture Updated");
  const notifyLicenseImage = () => toast("License Updated");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      navigate('/login')
    }
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("id")
    navigate("/login")
    window.location.reload()
  }

  //update basic info
  const SubmitHandler = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
    }
    else{
    const data = new FormData()

    data.append('user_id', 5);
    data.append('first_name', e.target[0].value)
    data.append('last_name', e.target[1].value)
    data.append('email', e.target[2].value)
    data.append('mobile_number', e.target[3].value)

    try {
      const result = await axios.post(
        'https://hiso.software-compilers.com/api/updateProfile',
        data
      )
      if (result.status === 200) {
        notify()
        setTimeout(
          function () {
            e.target[0].value = ""
            e.target[1].value = ""
            e.target[2].value = ""
            e.target[3].value = ""
          }
            .bind(this),
          2500
        );

      } else {
        alert('error')
      }
    } catch (error) {
      alert('error')
      }

    }
  }

  //update profile image
  const SubmitImageHandler = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
    }
    else{
    const data = new FormData()

    data.append('user_id', 5);
    data.append('image', e.target[0].value);
    try {
      const result = await axios.post(
        'https://hiso.software-compilers.com/api/updateProfileImage',
        data
      )
      if (result.status === 200) {
        notifyImage()
        setTimeout(
          function () {
            e.target[0].value = ""
          }
            .bind(this),
          2500
        );
      } else {
        alert('error')
      }
    } catch (error) {
      alert('error')
      }

    }
  }

  //update license images
  const submitLicenseHandler = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
    }
    else{

    const data = new FormData()

    data.append('user_id', 5);
    data.append('licence_front_image', e.target[0].value);
    data.append('licence_back', e.target[1].value);

    try {
      const result = await axios.post(
        'https://hiso.software-compilers.com/api/saveLicenceImages',
        data
      )
      if (result.status === 200) {
        notifyLicenseImage()
        setTimeout(
          function () {
            e.target[0].value = ""
            e.target[1].value = ""
          }
            .bind(this),
          2500
        );
      } else {
        alert('error')
      }
    } catch (error) {
      alert('error')
    }

    }
  }



  return (
    <section className="gauto-service-details-area section_70">
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
                  <li>
                    <Link to="/favourites">Favourites</Link>
                  </li>
                  <li className="active">
                    <Link>Profile</Link>
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
                <h3>Profile Details</h3>

                <div className='offer-tabs' id='offerTab'>

                  <Tabs
                    defaultActiveKey="basic_info"
                    id='uncontrolled-tab-example'
                    className="mb-3"
                  >
                    {/* Basic Info Tab */}
                    <Tab eventKey="basic_info" title="Basic Info">
                      <form onSubmit={SubmitHandler}>
                        <Row className="mb-2 mt-4">
                          <Col md={6}>
                            <p >
                              <input
                                type='text'
                                placeholder={t("First Name")}
                                name="first_name"
                                required
                              />
                            </p>
                          </Col>
                          <Col md={6}>
                            <p style={{ textAlign: "End" }}>
                              <input
                                type='text'
                                placeholder={t('Last Name')}
                                name="last_name"
                                required
                              />
                            </p>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={6}>
                            <p>
                              <input
                                type='text'
                                placeholder={t("Email")}
                                name="email"
                                required
                              />
                            </p>
                          </Col>
                          <Col md={6}>
                            <p style={{ textAlign: "End" }}>
                              <input
                                type='text'
                                placeholder={t('Mobile Number')}
                                name="phone"
                                required
                              />
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}></Col>
                          <Col md={4}></Col>
                          <Col md={4}>
                            {/* <div className='action-btn'> */}
                            <button className='gauto-theme-btn mt-20 mr-2' type='submit'>
                              {t('Update')}
                            </button>
                            {/* </div> */}
                          </Col>
                        </Row>
                      </form>
                    </Tab>
                    {/* Profile Image Tab */}
                    <Tab eventKey="profile" title="Profile Image">
                      <div className="previewComponent">
                        <form onSubmit={SubmitImageHandler} >
                          <input className="fileInput"
                            type="file"
                            required
                          />
                          <button className="submitButton  mt-4"
                            type="submit"
                          >Upload Image</button>
                        </form>
                      </div>
                    </Tab>
                    {/* License Image Tab */}
                    <Tab eventKey="license" title="License Image">
                      <div className="previewComponent">
                        <form onSubmit={submitLicenseHandler} >
                          <Row>
                            <Col lg={3}>
                              <label >Choose License Front</label></Col>
                            <Col lg={5}>
                              <input className="fileInput"
                                type="file"
                                required
                              />
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col lg={3}>
                              <label >Choose License Back</label></Col>
                            <Col lg={5}>
                              <input className="fileInput"
                                type="file"
                                required
                              />
                            </Col>
                          </Row>
                          <button className="submitButton mt-4"
                            type="submit"
                          >Upload Image</button>

                        </form>
                      </div>

                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserProfileDetails;
