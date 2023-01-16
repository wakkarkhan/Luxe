import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import profilePlaceholder from '../../img/placeholder_profile.jpeg'
import licensePlaceholder from '../../img/license_placeholder.jpeg'

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

  const imageError = () => toast("Please choose profile image");
  const licenseFrontError = () => toast("Please choose license front image");
  const licenseBackError = () => toast("Please choose license back image");

  const newProfileError = () => toast("Nothing to upload!")
  const licenseNewFrontError = () => toast("Please choose new license front image to update");
  const licenseNewBackError = () => toast("Please choose new license back image to update");

  const getuserDetails = localStorage.getItem(('dataKey'));
  const userInfo = JSON.parse(getuserDetails);
  const [userFirstName, setuserFirstName] = useState(userInfo.first_name);
  const [userLastName, setuserLastName] = useState(userInfo.last_name);
  const [userEmail, setuserEmail] = useState(userInfo.email);
  const [userMobile, setuserMobile] = useState(userInfo.mobile_no);

  const [previewImage1, setPreviewImage1] = useState(profilePlaceholder)
  const [previewImage2, setPreviewImage2] = useState(licensePlaceholder)
  const [previewImage3, setPreviewImage3] = useState(licensePlaceholder)

  const [isProfile, setIsProfile] = useState('false')
  const [isLicenseFront, setisLicenseFront] = useState('false')
  const [isLicenseBack, setisLicenseBack] = useState('false')

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!user) {
      navigate('/login')
    }

    if (userInfo.profile_image != null && userInfo.profile_image != '') {
      setPreviewImage1(userInfo.profile_image);
      setIsProfile('true');
    }

    if (userInfo.license_front != null && userInfo.license_front != '') {
      setPreviewImage2('https://hiso.software-compilers.com/public/LicenceImages/' + localStorage.getItem('id') + '/' + userInfo.license_front)
      setisLicenseFront('true');
    }

    if (userInfo.license_back != null && userInfo.license_back != '') {
      setPreviewImage3('https://hiso.software-compilers.com/public/LicenceImages/' + localStorage.getItem('id') + '/' + userInfo.license_back)
      setisLicenseBack('true');
    }

  }, []);

  const onClickHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("id")
    localStorage.removeItem("dataKey");
    navigate("/login")
    window.location.reload()
  }

  //update basic info
  const SubmitHandler = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
    }
    else {
      const data = new FormData()

      data.append('user_id', localStorage.getItem('id'));
      data.append('first_name', e.target[0].value)
      data.append('last_name', e.target[1].value)
      data.append('email', e.target[2].value)
      data.append('mobile_number', e.target[3].value)

      try {
        const res = await axios.post(
          'https://hiso.software-compilers.com/api/updateProfile',
          data
        )
        if (res.status === 200) {
          notify()
          var getData =
          {
            'first_name': res.data.data.first_name,
            'last_name': res.data.data.last_name,
            'email': res.data.data.email,
            'mobile_no': res.data.data.mobile_number,
            'profile_image': res.data.data.image,
            'license_front': res.data.data.licence_front,
            'license_back': res.data.data.licence_back,
            'updated': "true"
          }
          localStorage.removeItem('dataKey');
          localStorage.setItem(
            'dataKey', JSON.stringify(getData))

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
    else {
      if (e.target[0].value === '' && isProfile === 'false') {
        imageError()
      }
      else if (e.target[0].value === '') {
        if (isProfile === 'true') {
          newProfileError()
        }
      }
      else {
        const data = new FormData()

        data.append('user_id', localStorage.getItem('id'));
        data.append('image', e.target[0].value);

        try {
          const res = await axios.post(
            'https://hiso.software-compilers.com/api/updateProfileImage',
            data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
            },
          }
          )
          if (res.status === 200) {
            notifyImage()
            var getData =
            {
              'first_name': res.data.data.first_name,
              'last_name': res.data.data.last_name,
              'email': res.data.data.email,
              'mobile_no': res.data.data.mobile_number,
              'profile_image': res.data.data.image,
              'license_front': res.data.data.licence_front,
              'license_back': res.data.data.licence_back,
              'updated': "true"
            }
            localStorage.removeItem('dataKey');
            localStorage.setItem(
              'dataKey', JSON.stringify(getData))
          } else {
            alert('errorrrrr')
          }
        } catch (error) {
          alert('errorrioiooioio')
        }
      }
    }
  }

  //update license images
  const submitLicenseHandler = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
    }
    else {
      if ((e.target[0].value === '' && isLicenseFront === 'false') || (e.target[1].value === '' && isLicenseBack === 'false')) {
        if ((e.target[0].value === '' && isLicenseFront === 'false')) {
          licenseFrontError()
        }
        else {
          licenseBackError()
        }
      }
      else if ((e.target[0].value === '')) {
        if ((isLicenseFront === 'true')) {
          licenseNewFrontError()
        }
      }
      else if (e.target[1].value === '') {
        if ((isLicenseBack === 'true')) {
          licenseNewBackError()
        }
      }
      else {
        const data = new FormData()

        // let front = e.target[0].value.lastIndexOf('\\');
        // let ff = e.target[0].value.substr(front+1,e.target[0].value.length);

        // let back = e.target[1].value.lastIndexOf('\\');
        // let bb = e.target[1].value.substr(back+1,e.target[1].value.length);

        data.append('user_id', localStorage.getItem('id'));
        data.append('licence_front_image', e.target[0].value);
        data.append('licence_back', e.target[1].value);

        try {
          const res = await axios.post(
            'https://hiso.software-compilers.com/api/saveLicenceImages',
            data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
            },
          }
          )
          if (res.status === 200) {
            notifyLicenseImage()
            var getData =
            {
              'first_name': res.data.data.first_name,
              'last_name': res.data.data.last_name,
              'email': res.data.data.email,
              'mobile_no': res.data.data.mobile_number,
              'profile_image': res.data.data.image,
              'license_front': res.data.data.licence_front,
              'license_back': res.data.data.licence_back,
              'updated': "true"
            }
            localStorage.removeItem('dataKey');
            localStorage.setItem(
              'dataKey', JSON.stringify(getData))

          } else {
            alert('error')
          }
        } catch (error) {
          alert('error')
        }
      }
    }
  }

  // profile image preview
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPreviewImage1(URL.createObjectURL(img));
    }
  };

  // license front preview
  const onLicenseFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPreviewImage2(URL.createObjectURL(img));
    }
  };

  // license back preview
  const onLicenseBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPreviewImage3(URL.createObjectURL(img));
    }
  };

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
                                placeholder={t('First Name')}
                                name="first_name"
                                value={userFirstName}
                                onChange={e => setuserFirstName(e.target.value)}
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
                                value={userLastName}
                                onChange={e => setuserLastName(e.target.value)}
                                required
                              />
                            </p>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={6}>
                            <p>
                              <input
                                type='email'
                                placeholder={t("Email")}
                                value={userEmail}
                                name="email"
                                disabled
                              />
                            </p>
                          </Col>
                          <Col md={6}>
                            <p style={{ textAlign: "End" }}>
                              <input
                                type='number'
                                placeholder={t('Mobile Number')}
                                value={userMobile}
                                onChange={e => setuserMobile(e.target.value)}
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
                          <Row className="mt-3">
                            <Col><h6 style={{ color: 'black' }}>Upload your photo here</h6></Col>
                          </Row>
                          <Row className="mt-4">
                            <Col lg={1}></Col>
                            <Col lg={5}>
                              <input className="fileInput"
                                type="file"
                                onChange={onImageChange}

                              />
                            </Col>
                            <Col lg={4}><div className="imgPreview">
                              <img alt="" src={previewImage1}></img>
                            </div></Col>
                          </Row>
                          <Row>
                            <Col md={4}></Col>
                            <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                              type="submit"
                            >Upload Image</button></Col>
                            <Col md={4}></Col>

                          </Row>
                        </form>
                      </div>
                    </Tab>
                    {/* License Image Tab */}
                    <Tab eventKey="license" title="License Image">
                      <div className="previewComponent">
                        <form onSubmit={submitLicenseHandler} >
                          <Row className="mt-3">
                            <Col><h6 style={{ color: 'black' }}>Upload License Images here</h6></Col>
                          </Row>
                          <Row className="mt-4">
                            <Col lg={1}></Col>
                            <Col lg={3}>
                              <label htmlFor="license_front">Choose License Front</label></Col>
                            <Col lg={4}>
                              <input className="fileInput"
                                name="license_front"
                                id="license_front"
                                type="file"
                                onChange={onLicenseFrontChange}
                              />
                            </Col>
                            <Col lg={4}><div className="imgPreview">
                              <img alt="" src={previewImage2}></img>
                            </div></Col>
                          </Row>
                          <Row className="mt-5">
                            <Col lg={1}></Col>
                            <Col lg={3}>
                              <label htmlFor="license_back">Choose License Back</label></Col>
                            <Col lg={4}>
                              <input className="fileInput"
                                name="license_back"
                                id="license_back"
                                type="file"
                                onChange={onLicenseBackChange}
                              />
                            </Col>
                            <Col lg={4}><div className="imgPreview">
                              <img alt="" src={previewImage3} />
                            </div></Col>
                          </Row>
                          <Row className="mt-4">
                            <Col md={4}></Col>
                            <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                              type="submit"
                            >Upload Images</button></Col>
                            <Col md={4}></Col>

                          </Row>

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
