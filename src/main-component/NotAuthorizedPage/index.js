import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";

const ResetPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("not_authorized.no_auth_01")}
        pageSubTitle ={t("not_authorized.no_auth_02")}
      />
      <Footer />
    </Fragment>
  );
};
export default ResetPasswordPage;
