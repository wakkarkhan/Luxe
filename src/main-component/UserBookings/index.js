import {React, Fragment, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

import UserBookingsDetails from "../../components/UserBookingsDetails";
import Footer from "../../components/Footer";
import UserContext from '../../context'

const UserBookings = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])

  return (
    <Fragment>
      <Header />
      {/* <PageTitle
        pageTitle={t("header-navigation-user.bookings")}
        pagesub={t("header-navigation-user.bookings")}
      /> */}
      <UserBookingsDetails />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default UserBookings;
