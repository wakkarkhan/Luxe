import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import CategoryCars from "../../components/CategoryCars";
import Footer from "../../components/Footer";

const CategoryCarsPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle className="cars-breadcrumb"
        pageTitle={t("header-navigation.car_listing")}
        pagesub={t("header-navigation.car_listing")}
      />
      <CategoryCars />
      <Footer />
    </Fragment>
  );
};
export default CategoryCarsPage;
