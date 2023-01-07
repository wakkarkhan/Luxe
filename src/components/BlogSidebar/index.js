import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import pimg1 from "../../img/post-thumb-1.jpg";
import pimg2 from "../../img/post-thumb-2.jpg";
import pimg3 from "../../img/post-thumb-3.jpg";

import "./style.css";

const BlogSidebar = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blog-page-right">
      {/* <div className="sidebar-widget">
        <form className="product_search" onSubmit={SubmitHandler}>
          <input type="search" placeholder={t("key_words")} />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div> */}
      <div className="sidebar-widget">
        <h3>{t("blog_page.by_category")}</h3>
        <ul className="service-menu">
          <li className="active">
            <Link to="/" onClick={onClick}>
              headlamps <span>(2376)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              disk break <span>(237)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Turbo Oil <span>(23)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              tyre &amp; metal wheel <span>(258)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              battery <span>(67)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              suspension <span>(123)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Shock Absorber <span>(23)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
