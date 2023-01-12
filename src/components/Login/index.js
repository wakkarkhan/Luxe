import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { FaKey, FaLock, FaUser } from 'react-icons/fa'
import axios from 'axios'
import './style.css'
import UserContext from '../../context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const notify = () => toast("Please Login!");
  const invalidUser = () => toast("Invalid Credentials");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!user) {
      notify()
      // navigate('/login')
    }
  }, [])
  const SubmitHandler = async (e) => {
    e.preventDefault()
    const data = new FormData()

    // data.append('username', e.target[0].value)
    data.append('password', e.target[1].value)
    data.append('email', e.target[0].value)
    data.append('type', 0)
    await axios
      .post('https://hiso.software-compilers.com/api/signin', data)
      .then((res) => {
        console.log(res.data.success)
        if (res.data.success === false) {
          invalidUser()
          setUser(false)
        } else {
          navigate('/user-bookings')
          setUser(true)
          var getData =
          {
             'first_name': res.data.data.first_name,
             'last_name': res.data.data.last_name,
             'email': res.data.data.email,
             'mobile_no': res.data.data.mobile_number,
          }
          localStorage.setItem(
            'id', res.data.data.id,
            // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
          )
          localStorage.setItem(
            'dataKey', JSON.stringify(getData))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onClick = (e) => {
    e.preventDefault()
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
                  <h3>{t('login_page.singin')}</h3>
                </div>
                {/* <form > */}
                <div className='account-form-group'>
                  <input
                    type='text'
                    placeholder={t('login_page.user_email')}
                    name='username'
                    required
                  />
                  <FaUser />
                </div>
                <div className='account-form-group'>
                  <input
                    type='password'
                    placeholder={t('login_page.password')}
                    name='password'
                    required
                  />
                  <FaLock />
                </div>
                <div className='remember-row'>
                  <p className='lost-pass'>
                    <Link to='/' onClick={onClick}>
                      {t('login_page.f_password')}
                    </Link>
                  </p>
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
                    {/* <Link className='gauto-theme-btn' to='/all-bookings'> */}
                    {t('login_page.btn')}
                    {/* </Link> */}
                  </button>
                </p>
                {/* </form> */}
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

export default Login
