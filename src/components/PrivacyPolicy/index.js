import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import env from "../../env";
import axios from 'axios'

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const [privacy, setPrivacy] = useState([])

    // 
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchPrivacyPolicy()
    }, []);

    // 
    const fetchPrivacyPolicy = () => {
        var data = new FormData();
        data.append('page_id', '2');   

        var config = {
            method: 'post',
            url: env.apiUrl + 'api/getPage',
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                let description = response.data.data.description;
                setPrivacy(description);
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
                            <h2 style={{ color: "black", textTransform: "capitalize" }}> {t("footer.privacy")} </h2>
                            <p  className="mt-2" style={{ paddingLeft: '3px', whiteSpace: 'pre-line' }}>{privacy}</p>   
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PrivacyPolicy;
