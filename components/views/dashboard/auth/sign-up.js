import React from 'react'
import {Row,Col,Container,Form,Button,Image} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'


//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// import 'swiper/components/navigation/navigation.scss';

//img
import login1 from '../../../assets/insea/insea-img1.jpg'
import login2 from '../../../assets/insea/insea-img2.jpg'
import login3 from '../../../assets/insea/insea-img3.jpeg'
import insea from "../../../assets/images/insea.png";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignUp = () => {
   let history =useNavigate()
   return (
      <>
         <section className="sign-in-page "style={{ maxHeight: '1200px', overflowY: 'auto' }}>
            <div id="container-inside">
                  <div id="circle-small"></div>
                  <div id="circle-medium"></div>
                  <div id="circle-large"></div>
                  <div id="circle-xlarge"></div>
                  <div id="circle-xxlarge"></div>
            </div>
            <Container className="p-0">
               <Row className="no-gutters">
                  <Col md={4} className="text-center pt-5">
                     <div className="sign-in-detail text-white">

                        <div className="sign-slider overflow-hidden  swipper">
                           <div className="bg-white  m-auto"
                                style={{
                                   padding: "15px 20px",
                                   borderRadius: "100px",
                                   border: "1px solid #000",
                                   width: "100px"
                                }}>
                              <Image src={insea} width={65} height={65} alt="logo"/>

                           </div>
                           <h4 className="m-3" style={{color: "#fff", fontSize: "22px", fontFamily: "cursive"}}>INSEA
                              PRO</h4>
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
                  <Col md={7} className="bg-white pt-5 pb-lg-0 pb-5 mt-5 rounded-5 mx-auto">
                     <div className="sign-in-from ">
                        <h1 className="mb-0">Sign Up</h1>
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
                              <Form.Control type="email" placeholder="Enter your Email"/>
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
                              <Form.Control type="tel" placeholder="Enter your Phone"/>
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Enter your Password"/>
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm your Password"/>
                           </Form.Group>
                           <Button variant="primary" type="submit">
                              Submit
                           </Button>
                        </Form>
                        <div className="sign-info">
                              <span className="dark-color d-inline-block line-height-2">
                                Already member?
                                 <Link to="/auth/sign-in">Sign In</Link></span>
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
