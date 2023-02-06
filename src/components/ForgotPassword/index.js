import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSSR, useTranslation } from 'react-i18next'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { FaKey, FaUser, FaHashtag } from 'react-icons/fa'
import axios from 'axios'
import './style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import env from '../../env'

const ForgotPasword = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const notify = () => toast("Something went wrong! Please try again");
  const userDoesNotExist = () => toast("User with this email does not exist! Please try another one");
  const checkEmail = () => toast("Please check your email address for activation code")
  const wrongCode = () => toast("Wrong Code");

  const [showVerifyEmail, setShowVerifyEmail] = useState('block');
  const [showVerifyCode, setShowVerifyCode] = useState('none');
  const [showSpinner, setShowSpinner] = useState('none');
  const [userEmail, setUserEmail] = useState('');

  // verify email 
  const SubmitHandlerForVerifyEmail = async (e) => {
    e.preventDefault()
    setUserEmail(e.target[0].value);

    const data = new FormData()
    data.append('email', e.target[0].value)

    setShowVerifyEmail('none');
    setShowSpinner('block');

    await axios
      .post(env.apiUrl + 'api/forgetPassword', data)
      .then((res) => {
        if (res.data.success === true) {
          // 
          setTimeout(
            function () {
              setShowSpinner('none');
              setShowVerifyCode('block');
            }
              .bind(this),
            2500
          );

        }
        else {
          userDoesNotExist();
          setShowSpinner('none');
          setShowVerifyEmail('block');
        }
      })
      .catch(() => {
        notify()
        setShowSpinner('none');
        setShowVerifyEmail('block');
      })
  }

  // verify code
  const SubmitHandlerForVerifyCode = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('email', userEmail);
    data.append('code', e.target[0].value)

    await axios
      .post(env.apiUrl + 'api/emailVerification', data)
      .then((res) => {
        if (res.data.success === true) {
          navigate('/reset-password', { state: { email: userEmail } });
        }
        else {
          wrongCode();
        }
      })
      .catch(() => {
        notify()
      })
  }

  //   Resend Code
  const resendCode = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('email', userEmail);

    await axios
      .post(env.apiUrl + 'api/resentCode', data)
      .then((res) => {
        if (res.data.success === true) {
          checkEmail();
        }
        else {
          notify()
        }
      })
      .catch(() => {
        notify()
      })
  }

  return (
    <section className='gauto-login-area section_70'>
      <Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Verify Email */}
        <Row style={{ display: showVerifyEmail }}>
          <Col md={12}>
            <form onSubmit={SubmitHandlerForVerifyEmail}>
              <div className='login-box'>
                <div className='login-page-heading'>
                  <FaKey />
                  <h3>{t('forgot_password_page.verify_email')}</h3>
                </div>
                <div className='account-form-group'>
                  <input
                    type='email'
                    placeholder={t('login_page.user_email')}
                    name='email'
                    required
                  />
                  <FaUser />
                </div>

                <div className='remember-row'>
                  {/* <p className='lost-pass'>
                    <Link to='/forgot-password'>
                      {t('login_page.f_password')}
                    </Link>
                  </p> */}
                  {/* <p className='checkbox remember'>
                    <input
                      className='checkbox-spin'
                      type='checkbox'
                      id='Freelance'
                    />
                    <label htmlFor='Freelance'>
                      <span />
                      {t('login_page.keep')}
                    </label>
                  </p> */}
                </div>
                <p>
                  <button className='gauto-theme-btn' type='submit'>
                    {t('forgot_password_page.send_code')}
                  </button>
                </p>
                <div className='login-sign-up'>
                  <Link to='/register'>{t('login_page.need_account')}</Link>
                </div>
              </div>
            </form>
          </Col>
        </Row>

        {/* Verify Code */}
        <Row style={{ display: showVerifyCode }}>
          <Col md={12}>
            <form onSubmit={SubmitHandlerForVerifyCode}>
              <div className='login-box'>
                <div className='login-page-heading'>
                  <FaKey />
                  <h3>{t('forgot_password_page.verify_code')}</h3>
                  <p>{t('forgot_password_page.description')}</p>
                </div>
                {/* <form > */}
                <div className='account-form-group'>
                  <input
                    type='text'
                    placeholder={t('forgot_password_page.code')}
                    name='email'
                    required
                  />
                  <FaHashtag />
                </div>

                <div className='remember-row'>
                </div>
                <p>
                  <button className='gauto-theme-btn' type='submit'>
                    {/* <Link className='gauto-theme-btn' to='/all-bookings'> */}
                    {t('forgot_password_page.verify_code')}
                    {/* </Link> */}
                  </button>
                </p>
                {/* </form> */}
                <div className='login-sign-up'>
                  <Link onClick={resendCode}>{t('forgot_password_page.resend_code')}</Link>
                </div>
              </div>
            </form>
          </Col>
        </Row>

        <Row style={{ display: showSpinner }}>
          <Col md={12}>
            <div className='login-box' style={{ height: '300px' }} >
              <Spinner animation="border" role="status" style={{ marginTop: '90px' }}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>

          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default ForgotPasword
