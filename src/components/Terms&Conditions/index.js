import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import env from "../../env";
import axios from 'axios'

const TermsAndCondition = () => {
    const { t } = useTranslation();
    const [terms, setTerms] = useState([])

    // 
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchTermsAndConditions()
    }, []);

    // 
    const fetchTermsAndConditions = () => {
        var data = new FormData();
        data.append('page_id', '1');

        var config = {
            method: 'post',
            url: env.apiUrl + 'api/getPage',
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                let description = response.data.data.description;
                // termsConditions = description;
                setTerms(description);
                // console.log(terms)
            })
            .catch(function (error) {
                // console.log(error);
            });
    }

    return (
        <section className="gauto-call-area mt-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <div >
                            <h2 style={{ color: "black", textTransform: "capitalize" }}> {t("header-navigation.terms")} </h2>
                            <h6 className="mt-2" style={{ color: "black", paddingLeft: '3px' }}> {t("terms.last_updated")} {terms.slice(14, 25)}</h6>

                            <p className="mt-2"><b>1. {t("terms.intro")}: </b>
                            {t("terms.intro-details")} </p>

                            <p className="mt-2"><b>2. {t("terms.comm")}: </b>
                            {t("terms.comm_details")}</p>

                            <p className="mt-2"><b>3. {t("terms.purchases")}: </b>
                            {t("terms.purchases_d1")}:</p>
                            <p>(i)  {t("terms.purchases_d2")}</p>
                            <p>(ii)  {t("terms.purchases_d3")}</p>
                            <p> {t("terms.purchases_d4")}</p>

                            <p className="mt-2"><b>4.  {t("terms.contests")}: </b>
                            {t("terms.contests_details")} </p>

                            <p className="mt-2"><b>5. {t("terms.refunds")}: </b>
                            {t("terms.refunds_details")}
                            </p>

                            <p className="mt-2"><b>6. {t("terms.content")}: </b>
                            {t("terms.content_details")}</p>

                            <p className="mt-2"><b>7. {t("terms.proh_users")}: </b>
                            {t("terms.proh_users_d1")}:</p>
                            <p><b>7.1. </b> {t("terms.proh_users_d2")}</p>
                            <p><b>7.2. </b> {t("terms.proh_users_d3")}</p>
                            <p><b>7.3. </b> {t("terms.proh_users_d4")}</p>
                            <p><b>7.4. </b> {t("terms.proh_users_d5")}</p>
                            <p><b>7.5. </b> {t("terms.proh_users_d6")}</p>
                            <p><b>7.6. </b> {t("terms.proh_users_d7")}</p>
                            {t("terms.proh_users_d8")}:
                            <p><b>7.7. </b> {t("terms.proh_users_d9")}</p>
                            <p><b>7.8. </b> {t("terms.proh_users_d10")}</p>
                            <p><b>7.9. </b> {t("terms.proh_users_d11")}</p>
                            <p><b>7.10. </b> {t("terms.proh_users_d12")}</p>
                            <p><b>7.11. </b> {t("terms.proh_users_d13")}</p>
                            <p><b>7.12. </b> {t("terms.proh_users_d14")}</p>
                            <p><b>7.13. </b> {t("terms.proh_users_d15")}</p>
                            <p><b>7.14. </b> {t("terms.proh_users_d16")}.</p>
                            <p><b>7.15. </b> {t("terms.proh_users_d17")}</p>

                            <p className="mt-2"><b>8. {t("terms.analytics")}: </b>
                            {t("terms.analytics_details")}</p>

                            <p className="mt-2">
                                <b>9. {t("terms.minor")}: </b>
                                {t("terms.minor_details")}
                            </p>

                            <p className="mt-2"><b>10. {t("terms.accounts")}: </b>
                            {t("terms.accounts_details")}
                            </p>

                            <p className="mt-2"><b>11. {t("terms.intel_pro")}: </b>
                            {t("terms.intel_pro_01")}</p>

                            <p className="mt-2"><b>12. {t("terms.copyright")}: </b>
                            {t("terms.copyright_details")}
                            </p>

                            <p className="mt-2">
                                <b>13. {t("terms.dcma")}: </b>
                                {t("terms.dcma_details")}
                            </p>

                            <p className="mt-2">
                                <b>14. {t("terms.error_report")}: </b>
                                {t("terms.error_report_details")}:</p> <p>(i) {t("terms.error_report_d1")}</p>
                            <p>(ii) {t("terms.error_report_d2")} </p>
                            <p>(iii){t("terms.error_report_d3")}</p>
                            <p>(iv) {t("terms.error_report_d4")}</p>

                            <p className="mt-2"><b>15. {t("terms.links_web")}: </b>
                            {t("terms.links_web_01")}
                            {t("terms.links_web_02")}
                            </p>

                            <p className="mt-2"><b>16. {t("terms.disclaimer")}: </b>
                            {t("terms.disclaimer_details")}
                            </p>

                            <p className="mt-2">
                                <b>17. {t("terms.limitation")}: </b>
                                {t("terms.limitation_details")}</p>

                            <p className="mt-2">
                                <b>18. {t("terms.termination")}: </b>
                                {t("terms.termination_details")}
                            </p>

                            <p className="mt-2">
                                <b>19. {t("terms.govern_law")}: </b>
                                {t("terms.govern_law_details")}
                            </p>

                            <p className="mt-2">
                                <b>20. {t("terms.change_service")}: </b>
                                {t("terms.change_service_details")}
                            </p>

                            <p className="mt-2"><b>21. {t("terms.amend")}: </b>
                            {t("terms.amend_details")}
                            </p>

                            <p className="mt-2"><b>22. {t("terms.waiver")}: </b>
                            {t("terms.waiver_details")}
                            </p>

                            <p className="mt-2"><b>23. {t("terms.ack")}: </b>
                            {t("terms.ack_details")}
                            </p>

                            <p className="mt-2">
                                <b>24. {t("terms.contact_us")}: </b>

                                {t("terms.contact_us_details")}
                            </p>

                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TermsAndCondition;
