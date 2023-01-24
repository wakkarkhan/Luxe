import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { FaKey, FaLock, FaUser } from 'react-icons/fa'
import axios from 'axios'
import './style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ResetPasword = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const notify = () => toast("Something went wrong!");
    const doNotMatch = () => toast("New Password and Confirm Password do not match");
    const passUpdated = () => toast("Your password has been updated! The next time you login, Please use your new password.")

    const [searchparams] = useSearchParams()

    var userEmail = searchparams.get("email")
   
    // 
    const SubmitHandler = async (e) => {
        e.preventDefault()
        if (e.target[0].value === e.target[1].value) {
            const data = new FormData()
            data.append('email', userEmail)
            data.append('password', e.target[0].value)

            await axios
                .post('https://hiso.software-compilers.com/api/resetPassword', data)
                .then((res) => {
                    if (res.data.response.success === true) {
                        passUpdated();
                        setTimeout(
                            function () {
                                navigate("/login");
                            }
                              .bind(this),
                            3500
                          );
                    }
                    else {

                    }
                })
                .catch(() => {
                    notify()
                })
        }
        else {
            doNotMatch()
        }
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
                                    <h3>{t('forgot_password_page.forgot_pass')}</h3>
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
                                <div className='account-form-group'>
                                    <input
                                        type='password'
                                        placeholder={t('forgot_password_page.confirm')}
                                        name='password'
                                        required
                                    />
                                    <FaLock />
                                </div>
                                <div className='remember-row'>

                                </div>
                                <p>
                                    <button className='gauto-theme-btn' type='submit'>
                                        {t('forgot_password_page.btn')}
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

export default ResetPasword
