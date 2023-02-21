import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Tab, Tabs, Spinner } from "react-bootstrap";
import profilePlaceholder from '../../img/placeholder_profile.jpeg'
import licensePlaceholder from '../../img/license_placeholder.jpeg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import loadingGif from '../../img/giphy.gif'

import "./style.css";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import UserContext from '../../context'
import axios from 'axios'

import env from "../../env";

const UserProfileDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const notify = () => toast(t("user_profile_page.updated"));
  const notifyImage = () => toast(t("user_profile_page.pic_updated"));
  const notifyLicenseImage = () => toast(t("user_profile_page.license_updated"));

  const imageError = () => toast(t("user_profile_page.choose_image"));
  const licenseFrontError = () => toast(t("user_profile_page.choose_front"));
  const licenseBackError = () => toast(t("user_profile_page.choose_back"));

  const newProfileError = () => toast(t("user_profile_page.nothing"))
  const licenseNewFrontError = () => toast(t("user_profile_page.new_front"));
  const licenseNewBackError = () => toast(t("user_profile_page.new_back"));

  const getuserDetails = localStorage.getItem(('dataKey'));
  const userInfo = JSON.parse(getuserDetails);
  const [userFirstName, setuserFirstName] = useState(userInfo.first_name);
  const [userLastName, setuserLastName] = useState(userInfo.last_name);
  const [userEmail, setuserEmail] = useState(userInfo.email);
  const [userMobile, setuserMobile] = useState(userInfo.mobile_no);

  const [updateStatus, setUpdateStatus] = useState(userInfo.updated)

  const [previewImage1, setPreviewImage1] = useState(profilePlaceholder)
  const [previewImage2, setPreviewImage2] = useState(licensePlaceholder)
  const [previewImage3, setPreviewImage3] = useState(licensePlaceholder)

  const [isProfile, setIsProfile] = useState('false')
  const [isLicenseFront, setisLicenseFront] = useState('false')
  const [isLicenseBack, setisLicenseBack] = useState('false')

  const [licenseFront, setLicenseFront] = useState(null)
  const [licenseBack, setLicenseBack] = useState(null)
  const [profileImage, setProfileImage] = useState(null)

  const [showUpload, setShowUpload] = useState('flex')
  const [showSpinner, setShowSpinner] = useState('none')

  const [showImageUpload, setShowImageUpload] = useState('flex')
  const [showImageSpinner, setShowImageSpinner] = useState('none')

  const [showUpdate, setShowUpdate] = useState('flex')
  const [showUpdateSpinner, setUpdateSpinner] = useState('none')

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!user) {
      navigate('/login')
    }

    if (userInfo.profile_image !== null && userInfo.profile_image !== '') {
      setPreviewImage1(userInfo.profile_image);
      setIsProfile('true');
    }

    if (userInfo.license_front !== null && userInfo.license_front !== '') {
      if (updateStatus === undefined) {
        setPreviewImage2(env.apiUrl + 'public/LicenceImages/' + localStorage.getItem('id') + '/' + userInfo.license_front)
        setisLicenseFront('true');
      }
      else {
        setPreviewImage2(userInfo.license_front)
        setisLicenseFront('true');
      }
    }

    if (userInfo.license_back !== null && userInfo.license_back !== '') {
      if (updateStatus === undefined) {
        setPreviewImage3(env.apiUrl + 'public/LicenceImages/' + localStorage.getItem('id') + '/' + userInfo.license_back)
        setisLicenseBack('true');
      }
      else {
        setPreviewImage3(userInfo.license_back)
        setisLicenseBack('true');
      }
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
      setShowUpdate('none');
      setUpdateSpinner('flex');

      const data = new FormData()

      data.append('user_id', localStorage.getItem('id'));
      data.append('first_name', e.target[0].value)
      data.append('last_name', e.target[1].value)
      data.append('email', e.target[2].value)
      data.append('mobile_number', e.target[3].value)

      try {
        const res = await axios.post(
          env.apiUrl + 'api/updateProfile',
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
            'dataKey', JSON.stringify(getData));

          setShowUpdate('flex');
          setUpdateSpinner('none');

        } else {
          alert('error');
          setShowUpdate('flex');
          setUpdateSpinner('none');
        }
      } catch (error) {
        alert('error');
        setShowUpdate('flex');
        setUpdateSpinner('none');
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
        setShowImageUpload('none');
        setShowImageSpinner('flex');
        const data = new FormData()

        data.append('user_id', localStorage.getItem('id'));
        data.append('image', profileImage);

        try {
          const res = await axios.post(
            env.apiUrl + 'api/updateProfileImage',
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
              'dataKey', JSON.stringify(getData));

            e.target[0].value = '';

            setShowImageUpload('flex');
            setShowImageSpinner('none');
          } else {
            alert('error')
            setShowImageUpload('flex');
            setShowImageSpinner('none');
          }
        } catch (error) {
          alert('error')
          setShowImageUpload('flex');
          setShowImageSpinner('none');
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
        setShowUpload('none');
        setShowSpinner('flex');
        const data = new FormData()

        // let front = e.target[0].value.lastIndexOf('\\');
        // let ff = e.target[0].value.substr(front+1,e.target[0].value.length);

        // let back = e.target[1].value.lastIndexOf('\\');
        // let bb = e.target[1].value.substr(back+1,e.target[1].value.length);

        data.append('user_id', localStorage.getItem('id'));
        data.append('licence_front_image', licenseFront);
        data.append('licence_back', licenseBack);

        try {
          const res = await axios.post(
            env.apiUrl + 'api/saveLicenceImages',
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
              'dataKey', JSON.stringify(getData));
            e.target[0].value = '';
            e.target[1].value = '';

            setShowUpload('flex');
            setShowSpinner('none');

          } else {
            alert('error')
            setShowUpload('flex');
            setShowSpinner('none');
          }
        } catch (error) {
          alert('error')
          setShowUpload('flex');
          setShowSpinner('none');
        }
      }
    }
  }

  // profile image preview
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPreviewImage1(URL.createObjectURL(img));
      setProfileImage(event.target.files[0])
    }
  };

  // license front preview
  const onLicenseFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPreviewImage2(URL.createObjectURL(img));
      setLicenseFront(event.target.files[0])
    }
  };

  // license back preview
  const onLicenseBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPreviewImage3(URL.createObjectURL(img));
      setLicenseBack(event.target.files[0])
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
                    <Link to="/user-bookings">{t("all_bookings")}</Link>
                  </li>
                  <li>
                    <Link to="/make-bookings">{t("make_booking")}</Link>
                  </li>
                  <li>
                    <Link to="/favourites">{t("header-navigation-user.favourites")}</Link>
                  </li>
                  <li className="active">
                    <Link>{t("profile")}</Link>
                  </li>
                  <li>
                    <Link onClick={onClickHandler}>{t("logout")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="service-details-right">
              <div className="service-accordion" id="accordion">
                <h3>{t("user_profile_page.details")}</h3>

                <div className='offer-tabs' id='offerTab'>

                  <Tabs
                    defaultActiveKey="basic_info"
                    id='uncontrolled-tab-example'
                    className="mb-3"
                  >
                    {/* Basic Info Tab */}
                    <Tab eventKey="basic_info" title={t("user_profile_page.title_01")}>
                      <form onSubmit={SubmitHandler}>
                        <Row className="mb-2 mt-4">
                          <Col md={6}>
                            <p >
                              <input
                                type='text'
                                placeholder={t("register_page.firstname")}
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
                                placeholder={t("register_page.lastname")}
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
                                placeholder={t("footer.email")}
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
                                placeholder={t('checkout_page.mobile')}
                                value={userMobile}
                                onChange={e => setuserMobile(e.target.value)}
                                name="phone"
                                required
                              />
                            </p>
                          </Col>
                        </Row>

                        {/* Update Button */}
                        <Row className="mt-4" style={{ display: showUpdate }}>
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

                        {/* Updating button with spinner */}
                        <Row className="mt-4" style={{ display: showUpdateSpinner }}>
                          <Col md={4}></Col>
                          <Col md={4}></Col>
                          <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                            type="submit" disabled
                          ><Spinner animation="border" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </Spinner> </button></Col>
                        </Row>
                      </form>
                    </Tab>
                    {/* Profile Image Tab */}
                    <Tab eventKey="profile" title={t("user_profile_page.title_02")}>
                      <div className="previewComponent">
                        <form onSubmit={SubmitImageHandler} >
                          <Row className="mt-3">
                            <Col><h6 style={{ color: 'black' }}>{t("user_profile_page.upload_photo")}</h6></Col>
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

                              <LazyLoadImage
                                src={previewImage1}
                                placeholderSrc={loadingGif}
                                alt="Profile Image"
                              />
                            </div></Col>
                          </Row>

                          {/* Upload Button */}
                          <Row className="mt-4" style={{ display: showImageUpload }}>
                            <Col md={4}></Col>
                            <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                              type="submit"
                            >{t("user_profile_page.upload_img")}</button></Col>
                            <Col md={4}></Col>
                          </Row>

                          {/* Uploading button with spinner */}
                          <Row className="mt-4" style={{ display: showImageSpinner }}>
                            <Col md={4}></Col>
                            <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                              type="submit" disabled
                            ><Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner> </button></Col>
                            <Col md={4}></Col>

                          </Row>
                        </form>
                      </div>
                    </Tab>
                    {/* License Image Tab */}
                    <Tab eventKey="license" title={t("user_profile_page.title_03")}>
                      <div className="previewComponent">
                        <form onSubmit={submitLicenseHandler} >
                          <Row className="mt-3">
                            <Col><h6 style={{ color: 'black' }}>{t("user_profile_page.upload_license")}</h6></Col>
                          </Row>
                          <Row className="mt-4">
                            <Col lg={1}></Col>
                            <Col lg={3}>
                              <label htmlFor="license_front">{t("user_profile_page.choose_front_pic")}</label></Col>
                            <Col lg={4}>
                              <input className="fileInput"
                                name="license_front"
                                id="license_front"
                                type="file"
                                onChange={onLicenseFrontChange}
                              />
                            </Col>
                            <Col lg={4}><div className="imgPreview2">
                              <LazyLoadImage
                                src={previewImage2}
                                placeholderSrc={loadingGif}
                                alt="License Front Image"
                              />
                              {/* <img alt="" src={previewImage2}></img> */}
                            </div></Col>
                          </Row>
                          <Row className="mt-5">
                            <Col lg={1}></Col>
                            <Col lg={3}>
                              <label htmlFor="license_back">{t("user_profile_page.choose_back_pic")}</label></Col>
                            <Col lg={4}>
                              <input className="fileInput"
                                name="license_back"
                                id="license_back"
                                type="file"
                                onChange={onLicenseBackChange}
                              />
                            </Col>
                            <Col lg={4}><div className="imgPreview2">
                              <LazyLoadImage
                                src={previewImage3}
                                placeholderSrc={loadingGif}
                                alt="License Back Image"
                              />
                              {/* <img alt="" src={previewImage3} /> */}
                            </div></Col>
                          </Row>

                          {/* Upload button */}
                          <Row className="mt-4" style={{ display: showUpload }}>
                            <Col md={4}></Col>
                            <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                              type="submit"
                            >{t("user_profile_page.upload_imgs")}</button></Col>
                            <Col md={4}></Col>
                          </Row>

                          {/* Uploading button with spinner */}
                          <Row className="mt-4" style={{ display: showSpinner }}>
                            <Col md={4}></Col>
                            <Col md={4}><button className='gauto-theme-btn mt-4 mr-2'
                              type="submit" disabled
                            ><Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner> </button></Col>
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
