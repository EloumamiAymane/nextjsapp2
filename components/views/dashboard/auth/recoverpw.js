import React from 'react'
import {Row, Col, Button, Form, Container, Image} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'


//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// import 'swiper/components/navigation/navigation.scss';

// img

import login1 from '../../../assets/insea/insea-img1.jpg'
import login2 from '../../../assets/insea/insea-img2.jpg'
import login3 from '../../../assets/insea/insea-img3.jpeg'
import insea from "../../../assets/images/insea.png";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Recoverpw = () => {
   let history = useNavigate()
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

                                <div className="sign-slider overflow-hidden swipper">
                                    <div className="bg-white  m-auto "
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
                                        className="list-inline m-0 p-0">
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
                        <Col md="6" className="bg-white pt-5 pt-5 pb-lg-0 pb-5 custom-col-recpw  rounded-5">
                            <div className="sign-in-from">
                                <h1 className="mb-0">Reset Password</h1>
                                <p>Enter your email address and we'll send you an email with instructions to reset your
                                    password.</p>
                                <Form className="mt-4">
                                    <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" className="mb-0" id="exampleInputEmail1" placeholder="Enter email"/>
                                    </Form.Group>
                                    <div className="d-inline-block w-100">
                                    <Button variant="primary" type="button" className="float-right mt-3" onClick={() => history.push('/auth/sign-in')}>Reset Password</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>  
        </>
    )
}

export default Recoverpw
