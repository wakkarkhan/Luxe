import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "../../components/Footer";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("footer.privacy")}
        pagesub={t("footer.privacy")}
      />
      <PrivacyPolicy />
      <Footer />
    </Fragment>
  );
};
export default PrivacyPolicyPage;
