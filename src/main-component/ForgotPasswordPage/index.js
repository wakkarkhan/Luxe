import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import ForgotPassword from "../../components/ForgotPassword";
import Footer from "../../components/Footer";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.forgot")}
        pagesub={t("header-navigation.forgot")}
      />
      <ForgotPassword />
      <Footer />
    </Fragment>
  );
};
export default ForgotPasswordPage;
