import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../../img/slider-01.jpg";
import hero2 from "../../img/slider-02.jpg";
import hero3 from "../../img/slider-3.jpg";
import hero4 from "../../img/slider-4.jpg";
import hero5 from "../../img/slider-5.jpg";
import hero6 from "../../img/slider-6.jpg";
import hero7 from "../../img/slider-7.jpg";
import hero8 from "../../img/slider-8.jpg";
import hero9 from "../../img/slider-9.jpg";
import hero10 from "../../img/slider-10.jpg";
import hero11 from "../../img/slider-11.jpg";
import hero12 from "../../img/slider-12.jpg";
import hero13 from "../../img/slider-13.jpg";
import hero14 from "../../img/slider-14.jpg";

import "./style.css";

const Hero = () => {
  const { t } = useTranslation();
  const heros = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12, hero13, hero14];

  const onClick = (e) => {
    e.preventDefault();
  };

  const settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <section className="gauto-slider-area fix">
      <Slider {...settings}>
       {/* Slides */}
    
       {heros.map((hero,index) => (
        <div className="slide" key={index}>
          <div
            className=" gauto-main-slide"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <div className="gauto-main-caption">
              <div className="gauto-caption-cell">
                <Container>
                  <Row>
                    <Col md={6}>
                      <div className="slider-text">
                        <p>{t("hero_slide_subtitle")}</p>
                        <h2>{t("hero_slide_title")}</h2>
                        {/* <Link to="/" onClick={onClick} className="gauto-btn">
                          {t("researve_now")}
                        </Link> */}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
       ))}    
      </Slider>
      
    </section>
  );
};

export default Hero;
