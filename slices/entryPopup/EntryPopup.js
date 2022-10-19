import React, { useState, useEffect } from 'react'

import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import Image from 'next/image';
import styles from "./entryPopup.module.css"
import nandanaPic from "../../public/nandanaPic.jpg"


const EntryPopup = ({ onConfirm, onCancel }) => {

    const [isBrowserEnv, setBrowserEnv] = useState(false);

    useEffect(() => setBrowserEnv(true), []);

    return <ModalContent
        show={isBrowserEnv}
        onHide={onCancel}
        onConfirm={onConfirm}
        setBrowserEnv={setBrowserEnv}
    />
}


const ModalContent = ({ onHide, onConfirm }) => {

    const [form, setForm] = useState({
        inf_field_FirstName: "",
        inf_field_LastName: "",
        inf_field_Email: ""
    })

    const [error, setError] = useState(false)

    const setFormValue = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const checkForm = (e) => {

        for (var entry in form) {
            if (!form[entry]) {
                e.preventDefault()
                return setError(true)
            }
        }

        onConfirm()
        setError(false)

    }
    return <Modal
        size="md"
        show={true}
        onHide={onHide}
        animation={false}
        centered
        dialogClassName={styles["modal-container"]}
        contentClassName={styles["modal-content"]}
    >

        <Modal.Body>
            <Container className={styles["desktop-container"]}>
                <Row className={styles["main-row"]}>
                    <Col className={styles['content']}>
                        <div >
                            <h6 className={styles['banner']}>WEBINAR ALERT</h6>

                            <div className={styles['inner-container']}>
                                <h2 className={styles['heading']}>How To Start Trekking In The Himalayas </h2>
                                <ListItems />
                            </div>
                        </div>
                    </Col>
                    <Col className={styles['image-section']}>

                        <Image src={nandanaPic} alt="Picture of Nandana" />
                        <div className={styles['image-content']}>
                            <h6>Conducted by Nandana Kamasani</h6>
                            <p>Head of Experience Coordinators Team at Indiahikes </p>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Container className={styles["mobile-container"]}>
                <h6 className={styles['banner']}>WEBINAR ALERT</h6>
                <Row className={styles["justify-content"]}>

                    <Col xs={6} className={styles['image-content']}>
                        <h2 className={styles['heading']}>How To Start Trekking In The Himalayas </h2>
                        <h6>Conducted by Nandana Kamasani</h6>
                        <p>Head of Experience Coordinators Team at Indiahikes </p>
                    </Col>
                    <Col xs={5} sm={4}>
                        <Image src={nandanaPic} alt="Picture of Nandana" />
                    </Col>
                </Row>
                <div className={styles['mobile-list']}>
                    <ListItems />
                </div>
            </Container>


            <div className={styles['form-section-desktop']}>
                {error && <p className={styles['error']}>Please enter all the fields correctly.</p>}
                <Form onSubmit={checkForm} className={`${styles['form']} infusion-form}`} acceptCharset="UTF-8" action="https://dh315.infusionsoft.com/app/form/process/5c561bc1191259a3a69406083eb8a54c" id="inf_form_5c561bc1191259a3a69406083eb8a54c" method="POST">
                    <FormInputs form={form} onChange={setFormValue} />
                    <Form.Group className={styles['form-content']}>
                        <p>Session restricted at 100 people only.</p>
                        <p>Register soon</p>
                        <button type="submit" block className={`${styles['register-button']} infusion-recaptcha`} id='recaptcha_5c561bc1191259a3a69406083eb8a54c'>
                            Register For Webinar
                        </button>
                    </Form.Group>
                </Form>
            </div>

            <div className={styles['form-section-mobile']}>
                <p className={styles['alert-text']}>Session restricted at 100 people only. Register soon</p>
                {error && <p className={styles['error']}>Please enter all the fields correctly.</p>}
                <Form onSubmit={checkForm} className={`${styles['form']} infusion-form}`} acceptCharset="UTF-8" action="https://dh315.infusionsoft.com/app/form/process/5c561bc1191259a3a69406083eb8a54c" id="inf_form_5c561bc1191259a3a69406083eb8a54c" method="POST">
                    <FormInputs form={form} onChange={setFormValue} />
                    <Form.Group className={styles['form-content']}>

                        <button type="submit" block className={`${styles['register-button']} infusion-recaptcha`} id='recaptcha_5c561bc1191259a3a69406083eb8a54c'>
                            Register For Webinar
                        </button>
                    </Form.Group>
                </Form>
            </div>
            {/* </Container> */}
            <button className={styles["cancel-button"]} onClick={onHide}><i class="fa fa-times" aria-hidden="true"></i></button>
            <script type="text/javascript" src="https://dh315.infusionsoft.app/app/webTracking/getTrackingCode"></script>
            <script type="text/javascript" src="https://dh315.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.491431"></script>
            <script src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit" async="async" defer="defer"></script>
            <script type="text/javascript" src="https://dh315.infusionsoft.com/app/timezone/timezoneInputJs?xid=5c561bc1191259a3a69406083eb8a54c"></script>
            <script type="text/javascript" src="https://dh315.infusionsoft.com/js/jquery/jquery-3.3.1.js"></script>
            <script type="text/javascript" src="https://dh315.infusionsoft.app/app/webform/overwriteRefererJs"></script>
        </Modal.Body >
    </Modal >

}


function ListItems() {
    return <>
        <p className={styles['introduction']}>Join US <span>live</span> on a webinar for beginners </p>
        <p className={styles['list-title']}>Topics Covered:</p>
        <ul className={styles['list']}>
            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    How to choose a Himalayan trek</span>
            </li>
            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    How to get fit for a Himalayan trek</span>
            </li>
            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    How to plan your travel</span>
            </li>
            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    What gear you need on a Himalayan trek (With bonus tips on how to spend less)
                </span>
            </li>

            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    Misconceptions about trekking in the Himalayas</span>
            </li>

            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    Great Beginner Treks To Choose From</span>
            </li>

            <li className={styles['list-item']}>
                <span><i
                    className="fa fa fa-check"
                    aria-hidden="true"
                ></i>
                </span>
                <span>
                    10 minutes Q&A session</span>
            </li>
        </ul>
        <p className={styles['footer-text']}>When: Oct 22nd, Saturday at 11am</p>

    </>
}


function FormInputs({ form, onChange }) {
    return (

        <Form.Group className={styles['form-inputs']}>
            <input name="inf_form_xid" type="hidden" value="5c561bc1191259a3a69406083eb8a54c" />
            <input name="inf_form_name" type="hidden" value="Web Form submitted" />
            <input name="infusionsoft_version" type="hidden" value="1.70.0.491431" />
            <Form.Control placeholder="First name" name="inf_field_FirstName" id='inf_field_FirstName' value={form.inf_field_FirstName} onChange={onChange} />
            <Form.Control placeholder="Last name" name="inf_field_LastName" id='inf_field_LastName' value={form.inf_field_LastName} onChange={onChange} />
            <Form.Control type="email" placeholder="Email ID" name="inf_field_Email" id='inf_field_Email' value={form.inf_field_Email} onChange={onChange} />

        </Form.Group>)
}

export default EntryPopup