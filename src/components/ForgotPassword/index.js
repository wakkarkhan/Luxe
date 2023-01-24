import React from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { FaKey, FaLock, FaUser } from 'react-icons/fa'
import axios from 'axios'
import './style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ForgotPasword = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const notify = () => toast("Something went wrong!");
  const userDoesNotExist = () => toast("User with this email does not exist");

  // 
  const SubmitHandler = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('email', e.target[0].value)

    await axios
      .post('https://hiso.software-compilers.com/api/forgetPassword', data)
      .then((res) => {
        if (res.data.success === true) {
          console.log("succes");
          navigate({
            pathname: '/verify-code',
            search: createSearchParams({
              email: e.target[0].value
            }).toString()
          });
        }
        else {
          userDoesNotExist();
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
        <Row>
          <Col md={12}>
            <form onSubmit={SubmitHandler}>
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
      </Container>
    </section>
  )
}

export default ForgotPasword
