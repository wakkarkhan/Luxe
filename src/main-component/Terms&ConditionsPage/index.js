import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import TermsAndConditions from "../../components/Terms&Conditions";
import Footer from "../../components/Footer";

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.terms")}
        pagesub={t("header-navigation.terms")}
      />
      <TermsAndConditions />
      <Footer />
    </Fragment>
  );
};
export default TermsConditions;
