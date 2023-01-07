import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { FaKey, FaLock, FaUser } from 'react-icons/fa'
import axios from 'axios'
import './style.css'
import UserContext from '../../context'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const SubmitHandler = async (e) => {
    e.preventDefault()
    const data = new FormData()

    data.append('username', e.target[0].value)
    data.append('password', e.target[1].value)
    data.append('email', e.target[0].value)
    data.append('type', 0)
    await axios
      .post('https://hiso.software-compilers.com/api/signin', data)
      .then((res) => {
        alert(res.data.success)
        if (res.data.success === 'false') {
          alert('Invalid')
          setUser(false)
        } else {
          navigate('/')
          setUser(true)
          localStorage.setItem('token', 'asdasdasdasdads')
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
                  <p className='checkbox remember'>
                    <input
                      className='checkbox-spin'
                      type='checkbox'
                      id='Freelance'
                    />
                    <label htmlFor='Freelance'>
                      <span />
                      {t('login_page.keep')}
                    </label>
                  </p>
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
