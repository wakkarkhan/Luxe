import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPaperPlane,
} from "react-icons/fa";
import axios from 'axios'
import "./style.css";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import env from "../../env";

const Contact = () => {
  const { t } = useTranslation();
  const notify = () => toast("Thanks! We'll reach you shortly");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const test = (event) => {
    let val1 = event.target.value.indexOf('<');
    let val2 = event.target.value.indexOf('>');

    if (val1 >= 0 || val2 >= 0)
      event.target.setCustomValidity('HTML tags i.e. < > not allowed');
    else
      event.target.setCustomValidity('');

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Please fill in this field');
    }
  }

  const SubmitHandler = async (e) => {
    e.preventDefault()
    const data = new FormData()

    // data.append('username', e.target[0].value)
    data.append('name', e.target[0].value)
    data.append('email', e.target[1].value)
    data.append('message', e.target[2].value)
    await axios
      .post(env.apiUrl + 'api/addQuery', data)
      .then((res) => {

        if (res.data) {
          if (res.data.success === true) {
            notify()
            e.target.reset()
          }
        }

      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-contact-area section_70">
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
          <Col lg={7} md={6}>
            <div className="contact-left">
              <h3>{t("contact_page.get_touch")}</h3>
              <form onSubmit={SubmitHandler}>
                <Row>
                  <Col md={6}>
                    <div className="single-contact-field">
                      <input type="text" placeholder={t("contact_page.name")} name="fullname" required
                        pattern="[A-Za-z-. ]+"
                        title="Name should only contain letters, period(dot), space or dash"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="single-contact-field">
                      <input
                        type="email"
                        placeholder={t("contact_page.email")}
                        name="email"
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="single-contact-field">
                      <textarea
                        id="text-area-id"
                        placeholder={t("contact_page.msg")}
                        name="message"
                        required
                        onKeyUp={test}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="single-contact-field">
                      <button type="submit" className="gauto-theme-btn">
                        <FaPaperPlane /> {t("contact_page.send")}
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
          <Col lg={5} md={6}>
            <div className="contact-right">
              <h3>{t("contact_page.info_title")} </h3>
              <div className="contact-details">
                <p>
                  <i className="fa fa-map-marker" /> Life Condominium, 122 Sukhumvit Road, Phra Khanong, Khlong Toei, Bangkok 10110{" "}
                </p>
                <div className="single-contact-btn">
                  <h4>{t("contact_page.info_email")}</h4>
                  <a href="mailto:luxecarrenttim@gmail.com">luxecarrenttim@gmail.com</a>
                </div>
                <div className="single-contact-btn">
                  <h4>{t("contact_page.info_call")}</h4>
                  <a href="tel:+0654245244">+(065)-424-5244</a>
                </div>
                <div className="social-links-contact">
                  <h4>{t("contact_page.info_follow")}</h4>
                  <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100063891921091&mibextid=LQQJ4d" target="blank"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a></li>
                    <li><a href="https://www.instagram.com/luxecarrent/?hl=en" target="blank"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
