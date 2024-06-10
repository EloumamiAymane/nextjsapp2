"use client";
import React from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap'

import Image from "next/image";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// import 'swiper/components/navigation/navigation.scss';

//image
import mail from '../../../../public/assets/images/login/mail.png'
import login1 from '../../../../public/assets/insea/insea-img1.jpg'
import login2 from '../../../../public/assets/insea/insea-img2.jpg'
import login3 from '../../../../public/assets/insea/insea-img3.jpeg'
import insea from "../../../../public/assets/images/insea.png";
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const ConfirmMail = () => {

   return (
        <>
            <section className="sign-in-page">
                <div id="container-inside">
                    <div id="circle-small"></div>
                    <div id="circle-medium"></div>
                    <div id="circle-large"></div>
                    <div id="circle-xlarge"></div>
                    <div id="circle-xxlarge"></div>
                </div>
                <Container className="p-0">
                    <Row className="no-gutters">
                        <Col md="6" className="text-center pt-5">
                            <div className="sign-in-detail text-white">

                                <div className="sign-slider overflow-hidden swipper ">
                                    <div className="bg-white  m-auto"
                                         style={{
                                             padding: "15px 20px",
                                             borderRadius: "100px",
                                             border: "1px solid #000",
                                             width: "100px"
                                         }}>
                                        <Image src={insea} width={65} height={65} alt="logo"/>

                                    </div>
                                    <h4 className="m-3"
                                        style={{color: "#fff", fontSize: "22px", fontFamily: "cursive"}}>INSEA PRO</h4>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            "delay": 2000,
                                            "disableOnInteraction": false
                                        }}
                                        className="list-inline m-0 p-0 ">
                                        <SwiperSlide>
                                            <Image src={login1} className="img-fluid mb-4" alt="logo"/>
                                            <h4 className="mb-1 text-white">Find new friends</h4>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content.</p>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={login2} className="img-fluid mb-4" alt="logo"/>
                                            <h4 className="mb-1 text-white">Connect with the world</h4>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content.</p>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={login3} className="img-fluid mb-4" alt="logo"/>
                                            <h4 className="mb-1 text-white">Create new events</h4>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content.</p>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="bg-white pt-5 pb-lg-0 pb-5  mt-5  rounded-2" style={{maxHeight:"680px"}} id="register">
                            <div className="sign-in-from mt-5">
                                <Image src={mail} width="80" alt=""/>
                                <h1 className="mt-3 mb-0">Success !</h1>
                                <p style={{fontSize: "18px"}}>Merci pour votre intérêt ! Votre demande est en attente de
                                    validation.Un email sera envoyé aprés validation.  À bientôt !</p>
                                <div className="d-inline-block w-100">
                                    <Button type="button"   variant="primary" className="mt-3">
                                        <Link href="/" className="text-light">
                                            <span className="d-flex align-items-center">
                                            <i className="material-symbols-outlined md-18 me-1">
                                            home
                                            </i>
                                            Back to Home
                                        </span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
   )
}

export default ConfirmMail;
