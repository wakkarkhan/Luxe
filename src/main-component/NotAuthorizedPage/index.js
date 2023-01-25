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
        pageTitle="You are not authorized to access this page"
        pageSubTitle = "Please go to Login or Forgot Password to continue..."
      />
      <Footer />
    </Fragment>
  );
};
export default ResetPasswordPage;
