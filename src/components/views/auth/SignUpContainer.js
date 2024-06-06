"use client";
import React, {useEffect, useState} from 'react'
import {Row,Col,Container,Form,Button} from 'react-bootstrap'
import Link from 'next/link'
import Image from "next/image";
import Scrollbar from 'smooth-scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import login1 from '../../../../public/assets/insea/insea-img1.jpg'
import login2 from '../../../../public/assets/insea/insea-img2.jpg'
import login3 from '../../../../public/assets/insea/insea-img3.jpeg'
import insea from "../../../../public/assets/images/insea.png";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignUp = () => {
   const [value, setValue] = useState()
   useEffect(() => {
          Scrollbar.init(document.querySelector('.data-scrollbar'))
       },[])
   return (
      <>
         <section className="sign-in-page " >
            <div id="container-inside">
                  <div id="circle-small"></div>
                  <div id="circle-medium"></div>
                  <div id="circle-large"></div>
                  <div id="circle-xlarge"></div>
                  <div id="circle-xxlarge"></div>
            </div>
            <Container className="p-0">
               <Row className="no-gutters">
                  <Col md={6}  className="text-center pt-5">
                     <div className="sign-in-detail text-white">

                        <div className="sign-slider overflow-hidden  swipper">
                           <div className="bg-white  m-auto"
                                style={{
                                   padding: "17px 20px",
                                   borderRadius: "100px",
                                   border: "1px solid #000",
                                   width: "100px"
                                }}>
                              <Image src={insea} width={60} height={60} alt="logo"/>

                           </div>
                           <h1 className="m-3" style={{color: "#fff", fontSize: "25px",fontFamily:"cursive"}}>INSEA
                              PRO</h1>
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
                                 <p>It is a long established fact that a reader will be distracted by the readable
                                    content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image src={login2} className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Connect with the world</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable
                                    content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image src={login3} className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Create new events</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable
                                    content.</p>
                              </SwiperSlide>
                           </Swiper>
                        </div>
                     </div>
                  </Col>
                  <Col md={6}  className="bg-white pb-lg-0 pb-5 rounded-3 mt-4 pt-5  data-scrollbar overflow-hidden "  style={{maxHeight:"690px"}} id="register">
                     <div className="sign-in-from ">
                        <h1 className="mb-5">Sign Up</h1>
                        <Form>
                           <Row className="mb-3">

                              <Form.Group as={Col} controlId="formGridEmail">
                                 <Form.Label>Name</Form.Label>
                                 <Form.Control type="text" placeholder="Enter your Name"/>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                 <Form.Label>LastName</Form.Label>
                                 <Form.Control type="text" placeholder="Enter your LastName"/>
                              </Form.Group>
                           </Row>

                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter your EmailContainer"/>
                           </Form.Group>

                           <Row>
                              <Form.Group as={Col} className="mb-3">
                                 <Form.Label>Promotion</Form.Label>
                                 <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                 </Form.Select>
                              </Form.Group>
                              <Form.Group as={Col} className="mb-3">
                                 <Form.Label>Option</Form.Label>
                                 <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                 </Form.Select>
                              </Form.Group>
                           </Row>

                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Telephone</Form.Label>
                              <PhoneInput

                                  buttonStyle={{marginLeft:"-12px",backgroundColor:"white"}}
                                  inputStyle={{border:"none"}}
                                  containerClass="form-control"
                                  country={'ma'}
                                  value={value}
                                  onChange={setValue}/>
                           </Form.Group>


                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Enter your Password"/>
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm your Password"/>
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm your Password"/>
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm your Password"/>
                           </Form.Group> <Form.Group className="mb-3" controlId="formGridAddress1">
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control type="password" placeholder="Confirm your Password"/>
                        </Form.Group>


                           <Button variant="primary" type="submit">
                              Submit
                           </Button>
                        </Form>
                        <div className="sign-info">
                              <span className="dark-color d-inline-block line-height-2 mb-4">
                                Already member?
                                 <Link href="/auth/sign-in">Sign In</Link></span>
                        </div>
                        </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
)
}

export default SignUp
