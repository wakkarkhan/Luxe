import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser,FaPhone,  FaRegEnvelope } from "react-icons/fa";
import axios from 'axios'
import "./style.css";
import UserContext from '../../context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const { t } = useTranslation();
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const notify = () => toast("Registration Successfull");
  const notifyTermsError = () => toast("Please accept Terms and Conditions");
  const [terms, setTerms] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const termsHandled = () => {
    if(terms === true)
    setTerms(false);
    else
    setTerms(true);
  }

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if(terms === true){
    const data = new FormData()

    data.append('first_name', e.target[0].value)
    data.append('last_name', e.target[1].value)
    data.append('email', e.target[2].value)
    data.append('DOB', '123213213213')
    data.append('mobile_number', e.target[3].value)
    data.append('password', e.target[4].value)
    data.append('username', e.target[5].value)
    data.append('type', 0)
    data.append('lang_id', 'en')
    await axios
      .post('https://hiso.software-compilers.com/api/signup', data)
      .then((res) => {
        if (res.data.success === false) {
          alert('Invalid Information')
          setUser(false)
        } else {
          notify()
            setTimeout(
              function() {
                navigate('/login')
                setUser(true)
              }
              .bind(this),
              3000
          );
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
    else{
      notifyTermsError()
    }
  };

  return (
    <section className="gauto-login-area section_70">
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
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>{t("register_page.singup")}</h3>
              </div>
              <form onSubmit={SubmitHandler}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.firstname")}
                    name="firstname"
                    required
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.lastname")}
                    name="lastname"
                    required
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.email")}
                    name="email"
                    required
                  />
                  <FaRegEnvelope />
                </div>
                <div className="account-form-group">
                  <input
                    type="number"
                    placeholder={t("register_page.mobile")}
                    name="mobile_number"
                    required
                  />
                  <FaPhone />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("register_page.password")}
                    name="password"
                    required
                  />
                  <FaLock />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.username")}
                    name="username"
                    required
                  />
                  <FaUser />
                </div>
                
                
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("register_page.c_password")}
                    name="password"
                    required
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  <p className="checkbox remember signup">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance"
                      value="accepted"
                      onChange={termsHandled}
                    />
                    <label htmlFor="Freelance">
                      <span />
                      <Link to="/terms-and-conditions" style={{color: "black"}}>{t("register_page.terms")}</Link>
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    {t("register_page.register_now")}
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/login">{t("register_page.have_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
