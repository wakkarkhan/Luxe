import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

import UserProfileDetails from "../../components/UserProfileDetails";
import Footer from "../../components/Footer";

const UserProfile = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      {/* <PageTitle
        pageTitle={t("header-navigation-user.bookings")}
        pagesub={t("header-navigation-user.bookings")}
      /> */}
      <UserProfileDetails />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default UserProfile;
