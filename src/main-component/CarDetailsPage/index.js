import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import CarDetails from "../../components/CarDetails";
import Footer from "../../components/Footer";

const CarDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.car_booking")}
        pagesub={t("header-navigation.car_booking")}
      />
      <CarDetails />
      <Footer />
    </Fragment>
  );
};
export default CarDetailsPage;
