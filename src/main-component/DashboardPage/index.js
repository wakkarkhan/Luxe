import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import HeaderUser from "../../components/headerUser";
import PageTitle from "../../components/PageTitle";
// import Login from "../../components/Login";
import Footer from "../../components/Footer";

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <HeaderUser />
      <PageTitle
        pageTitle={t("header-navigation-user.profile")}
        pagesub={t("header-navigation.login")}
      />
      {/* <Login /> */}
      <Footer />
    </Fragment>
  );
};
export default DashboardPage;
