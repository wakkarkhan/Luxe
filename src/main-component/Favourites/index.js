import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

import UserFavourites from "../../components/Favourites";
import Footer from "../../components/Footer";

const FavouritesPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      {/* <PageTitle
        pageTitle={t("header-navigation-user.favourites")}
        pagesub={t("header-navigation-user.favourites")}
      /> */}
      <UserFavourites />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default FavouritesPage;
