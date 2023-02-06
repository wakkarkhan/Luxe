import React, { useEffect } from 'react'
import { Link, useNavigate, useSearchParams,createSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { FaKey, FaLock, FaUser, FaHashtag } from 'react-icons/fa'
import axios from 'axios'
import './style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import env from '../../env'

const VerifyCode = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const notify = () => toast("Something went wrong!");
    const checkEmail = () => toast("Please check your email address for activation code")
    const wrongCode = () => toast("Wrong Code");

    const [searchparams] = useSearchParams()
    var userEmail = searchparams.get("email")

    // verify code
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('email', userEmail);
        data.append('code', e.target[0].value)

        await axios
            .post(env.apiUrl + 'api/emailVerification', data)
            .then((res) => {
                if (res.data.success === true) {
                    navigate({
                        pathname: '/reset-password',
                        search: createSearchParams({
                          email: userEmail
                        }).toString()
                      });
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
                if (res.data.response.success === true) {
                    checkEmail();
                }
                else {
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
            </Container>
        </section>
    )
}

export default VerifyCode
