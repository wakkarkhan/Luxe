import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import VerifyCode from "../../components/VerifyCode";
import Footer from "../../components/Footer";

const VerifyCodePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.forgot")}
        pagesub={t("header-navigation.forgot")}
      />
      <VerifyCode />
      <Footer />
    </Fragment>
  );
};
export default VerifyCodePage;
