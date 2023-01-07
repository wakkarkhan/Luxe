import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUser,
  FaCalendarAlt,
  FaCommentAlt,
  FaQuoteRight,
  FaReply,
} from "react-icons/fa";
import BlogSidebar from "../BlogSidebar";
import img1 from "../../img/blog-2.jpg";
import img2 from "../../img/blog-3.jpg";
import comment1 from "../../img/4.jpg";
import comment2 from "../../img/5.jpg";

import "./style.css";

const BlogDetails = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-blog-page-area section_70">
      <Container>
        <Row>
          <Col lg={8} md={7}>
            <div className="blog-page-left single-blog-page">
              <div className="single-blog">
                <div className="blog-image">
                  <img src={img1} alt="blog 1" />
                </div>
                <div className="blog-text">
                  <h3>{t("blog-title.blog-1")}</h3>
                  <ul>
                    <li>
                      <FaUser /> <Link to="/">Bizkit</Link>
                    </li>
                    <li>
                      <FaCalendarAlt />
                      <Link to="/">27 Aug, 2019</Link>
                    </li>
                    <li>
                      <FaCommentAlt />
                      <Link to="/">(05) {t("blog_page.comments")}</Link>
                    </li>
                  </ul>
                  <p>
                    Magna etiam tempor orci eu. Risus in hendrerit gravida
                    rutrum quisque non tellus orci. Fames ac turpis egestas
                    hendrerit gravida.
                  </p>
                  <p>
                    Dolor consectetur adipiscing elit sed do eiusmod tempor
                    incididunt know you labore et dolore magna aliqua
                    consectetur adipiscingLoren ipsum dolor conse ctetur sed
                    adipi scing elit to sed do eiusmod tempor ipsum dolor
                    consectetur adipiscing elit sed do eiu smod temp inci did
                    know you labore et dolore.
                  </p>
                  <p>
                    craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat craft beer farm-to-table, raw denim aesthetic synth
                    nesciunt you probably haven't heard of them accusamus labore
                    sustainable VHS.aliqua consectetur adipiscingLoren ipsum
                    dolor conse ctetur sed adipi scing elit to sed do eiusmod
                    tempor ipsum dolor consectetur{" "}
                  </p>
                  <div className="blog-content-inner">
                    <Row>
                      <Col md={4}>
                        <div className="blog-content-img">
                          <img src={img2} alt="blog" />
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className="blog-content-text">
                          <p>
                            Magna etiam tempor orci eu. Risus in hendrerit
                            gravida rutrum quisque non tellus orci. Fames ac
                            turpis egestas maecenas pharetra convallis posuere
                            morbi leo. Nibh sit amet commodo nulla. At erat
                            pellentesque{" "}
                          </p>
                          <p>
                            In dapibus urna sit amet accumsan tristique. Donec
                            odio ligula, luctus venenatis varius id, tincidunt
                            ac ipsum. Cras commodo,
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <p>
                    Dolor consectetur adipiscing elit sed do eiusmod tempor
                    incididunt know you labore et dolore magna aliqua
                    consectetur adipiscingLoren ipsum dolor conse ctetur sed
                    adipi scing elit to sed do eiusmod tempor ipsum dolor
                    consectetur adipiscing elit sed do eiu smod temp inci did
                    know you labore et dolore magna aliqua consec consectetur.
                  </p>
                  <blockquote>
                    <div className="quote-inner">
                      <FaQuoteRight className="quote-icon" />
                      <div className="quote-text">
                        Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores.
                      </div>
                    </div>
                  </blockquote>
                  <p>
                    raw denim aesthetic synth nesciunt you probably haven't
                    heard of them accusamus labore sustainable VHS.aliqua
                    consectetur adipiscingLoren ipsum dolor conse ctetur sed
                    adipi scing elit to sed do eiusmod tempor ipsum dolor
                    consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={5}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
