import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import HeaderUser from "../../components/headerUser";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";

import CarList from "../../components/CarList";
import Footer from "../../components/Footer";

const FilterCarPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <HeaderUser />
      <PageTitle
        pageTitle={t("header-navigation-user.listings")}
        pagesub={t("header-navigation-user.listings")}
      />
      <CarList />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default FilterCarPage;
