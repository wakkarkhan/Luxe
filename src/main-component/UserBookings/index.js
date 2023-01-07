import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import HeaderUser from "../../components/headerUser";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

import UserBookingsDetails from "../../components/UserBookings";
import Footer from "../../components/Footer";

const UserBookings = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <HeaderUser />
      <PageTitle
        pageTitle={t("header-navigation-user.bookings")}
        pagesub={t("header-navigation-user.bookings")}
      />
      <UserBookingsDetails />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default UserBookings;
