import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

// import CarList from "../../components/CarList";
import UserMakeBookings from "../../components/UserMakeBookings";
import Footer from "../../components/Footer";

const MakeBookings = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      {/* <PageTitle
        pageTitle={t("header-navigation-user.listings")}
        pagesub={t("header-navigation-user.listings")}
      /> */}
      {/* <CarList /> */}
      <UserMakeBookings />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default MakeBookings;
