import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import HeaderUser from "../../components/headerUser";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

import Favourites from "../../components/Favourites";
import Footer from "../../components/Footer";

const FavouritesPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <HeaderUser />
      <PageTitle
        pageTitle={t("header-navigation-user.favourites")}
        pagesub={t("header-navigation-user.favourites")}
      />
      <Favourites />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default FavouritesPage;
