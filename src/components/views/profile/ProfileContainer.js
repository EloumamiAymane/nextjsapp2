"use client"
import React,{useState} from 'react'
import {Row, Col, Container, Dropdown, Nav, Tab, OverlayTrigger, Tooltip, Button, Modal } from 'react-bootstrap'
import Card from '../../partials/Card'
import CustomToggle from '../../partials/dropdowns'
import ShareOffcanvas from '../../partials/share-offcanvas'
import Link from 'next/link'
import ReactFsLightbox from 'fslightbox-react';
import Image from "next/image"

// images
import img1 from '../../../../public/assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../../public/assets/images/user/11.png'
import img3 from '../../../../public/assets/images/icon/08.png'
import img4 from '../../../../public/assets/images/icon/09.png'
import img5 from '../../../../public/assets/images/icon/10.png'
import img6 from '../../../../public/assets/images/icon/11.png'
import img7 from '../../../../public/assets/images/icon/12.png'
import img8 from '../../../../public/assets/images/icon/13.png'
import user01 from '../../../../public/assets/images/user/01.jpg'
import user02 from '../../../../public/assets/images/user/02.jpg'
import user03 from '../../../../public/assets/images/user/03.jpg'
import g1 from '../../../../public/assets/images/page-img/g1.jpg'
import g2 from '../../../../public/assets/images/page-img/g2.jpg'
import g3 from '../../../../public/assets/images/page-img/g3.jpg'
import g4 from '../../../../public/assets/images/page-img/g4.jpg'
import g5 from '../../../../public/assets/images/page-img/g5.jpg'
import g6 from '../../../../public/assets/images/page-img/g6.jpg'
import g7 from '../../../../public/assets/images/page-img/g7.jpg'
import g8 from '../../../../public/assets/images/page-img/g8.jpg'
import g9 from '../../../../public/assets/images/page-img/g9.jpg'
import img51 from '../../../../public/assets/images/page-img/51.jpg'
import img52 from '../../../../public/assets/images/page-img/52.jpg'
import img53 from '../../../../public/assets/images/page-img/53.jpg'
import img54 from '../../../../public/assets/images/page-img/54.jpg'
import img55 from '../../../../public/assets/images/page-img/55.jpg'
import img56 from '../../../../public/assets/images/page-img/56.jpg'
import img57 from '../../../../public/assets/images/page-img/57.jpg'
import img58 from '../../../../public/assets/images/page-img/58.jpg'
import img59 from '../../../../public/assets/images/page-img/59.jpg'
import img60 from '../../../../public/assets/images/page-img/60.jpg'
import img61 from '../../../../public/assets/images/page-img/61.jpg'
import img62 from '../../../../public/assets/images/page-img/62.jpg'
import img64 from '../../../../public/assets/images/page-img/64.jpg'
import img65 from '../../../../public/assets/images/page-img/65.jpg'
import img63 from '../../../../public/assets/images/page-img/63.jpg'
import {useSession} from "next-auth/react";

// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;

const UserProfile =() =>{
    const { data: session, status } = useSession();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1
    });

    function imageOnSlide(number) {
        setImageController({
            toggler: !imageController.toggler,
            slide: number
        });
    }

    return(
        <>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[g1,g2,g3,g4,g5,g6,g7,g8,g9,img51,img52,img53,img54
                    ,img55,img56,img57,img58,img59,img60,img61,img62,img63,img64,img65,img51,img52,img53,img54
                    ,img55,img56,img57,img58,img51,img52,img53,img54
                    ,img55,img56,img57,img58,img59,img60]}
                slide={imageController.slide}
            />
            <Container>
                <Row>
                    {/* banner and social medias icons */}
                    <Col sm={12}>
                        <Card>
                            <Card.Body className=" profile-page p-0">
                                <div className="profile-header">
                                    <div className="position-relative">
                                        <Image loading="lazy" src={img1} alt="profile-bg" className="rounded img-fluid"/>
                                        <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                                            <li>
                                                <Link href="#" className="material-symbols-outlined">
                                                    edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="material-symbols-outlined">
                                                    settings
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="user-detail text-center mb-3">
                                        <div className="profile-img">
                                            <Image loading="lazy" src={img2} alt="profile-img1" className="avatar-130 img-fluid" />
                                        </div>
                                        <div className="profile-detail">
                                            <h3>{session.user.name}</h3>
                                        </div>
                                    </div>
                                    <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                                        {/*<div className="social-links">*/}
                                        {/*    <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">*/}
                                        {/*        <li className="text-center pe-3">*/}
                                        {/*            <Link href="#"><Image loading="lazy" src={img3} className="img-fluid rounded" alt="facebook"/></Link>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center pe-3">*/}
                                        {/*            <Link href="#"><Image loading="lazy" src={img4} className="img-fluid rounded" alt="Twitter"/></Link>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center pe-3">*/}
                                        {/*            <Link href="#"><Image loading="lazy" src={img5} className="img-fluid rounded" alt="Instagram"/></Link>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center pe-3">*/}
                                        {/*            <Link href="#"><Image loading="lazy" src={img6} className="img-fluid rounded" alt="Google plus"/></Link>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center pe-3">*/}
                                        {/*            <Link href="#"><Image loading="lazy" src={img7} className="img-fluid rounded" alt="You tube"/></Link>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center md-pe-3 pe-0">*/}
                                        {/*            <Link href="#"><Image loading="lazy" src={img8} className="img-fluid rounded" alt="linkedin"/></Link>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}
                                        {/*</div>*/}
                                        {/*<div className="social-info">*/}
                                        {/*    <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">*/}
                                        {/*        <li className="text-center ps-3">*/}
                                        {/*            <h6>Posts</h6>*/}
                                        {/*            <p className="mb-0">690</p>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center ps-3">*/}
                                        {/*            <h6>Followers</h6>*/}
                                        {/*            <p className="mb-0">206</p>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="text-center ps-3">*/}
                                        {/*            <h6>Following</h6>*/}
                                        {/*            <p className="mb-0">100</p>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="about1">
                                        <Row>
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <Nav variant="pills"  className=" basic-info-items list-inline d-block p-0 m-0">
                                                            <Nav.Item >
                                                                <Nav.Link href="#" eventKey="about1">Contact and Basic Info</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item >
                                                                <Nav.Link href="#" eventKey="about2">Hobbies and Interests</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item >
                                                                <Nav.Link href="#" eventKey="about3">Family and Relationship</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item >
                                                                <Nav.Link href="#" eventKey="about4">Work and Education</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item >
                                                                <Nav.Link href="#" eventKey="about5">Places You've Lived</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={8} className=" ps-4">
                                                <Card>
                                                    <Card.Body>
                                                        <Tab.Content >
                                                            <Tab.Pane eventKey="about1">
                                                                <h4>Personal Info</h4>
                                                                <hr/>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>About Me:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Email:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Bnijohn@gmail.com</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Mobile:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">(001) 4544 565 456</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Address:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">United States of America</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="row mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Social Link:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">www.bootstrap.com</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Birth Date:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">24 January</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Birth Year:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">1994</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Birthplace:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Austin, Texas, USA</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Lives in:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">San Francisco, California, USA</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Gender:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Female</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Interested in:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Designing</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>language:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">English, French</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Joined:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">April 31st, 2014</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Status:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Married</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Phone Number:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">(044) 555 - 4369 - 8957</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-3">
                                                                    <div className="col-3">
                                                                        <h6>Political Incline:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Democrat</p>
                                                                    </div>
                                                                </Row>
                                                                <h4 className="mt-2">Websites and Social Links</h4>
                                                                <hr />
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Website:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">www.bootstrap.com</p>
                                                                    </div>
                                                                </Row>
                                                                <Row className="mb-2">
                                                                    <div className="col-3">
                                                                        <h6>Social Link:</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">www.bootstrap.com</p>
                                                                    </div>
                                                                </Row>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="about2">
                                                                <h4 className="mt-2">Hobbies and Interests</h4>
                                                                <hr />
                                                                <h6 className="mb-1">Hobbies:</h6>
                                                                <p>Hi, I’m Bni, I’m 26 and I work as a Web Designer for the iqonicdesign.I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.</p>
                                                                <h6 className="mt-2 mb-1">Favourite TV Shows:</h6>
                                                                <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
                                                                <h6 className="mt-2 mb-1">Favourite Movies:</h6>
                                                                <p>Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad, Ferrum Man.</p>
                                                                <h6 className="mt-2 mb-1">Favourite Games:</h6>
                                                                <p>The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
                                                                <h6 className="mt-2 mb-1">Favourite Music Bands / Artists:</h6>
                                                                <p>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</p>
                                                                <h6 className="mt-2 mb-1">Favourite Books:</h6>
                                                                <p>The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
                                                                <h6 className="mt-2 mb-1">Favourite Writers:</h6>
                                                                <p>Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth.</p>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="about3">
                                                                <h4 className="mb-3">Relationship</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex mb-4 align-items-center">
                                                                        <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18">
                                                         add
                                                      </span>
                                                                        </div>
                                                                        <div className="media-support-info ms-3">
                                                                            <h6>Add Your Relationship Status</h6>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <h4 className="mt-3 mb-3">Family Members</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex mb-4 align-items-center">
                                                                        <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18">
                                                         add
                                                      </span>
                                                                        </div>
                                                                        <div className="media-support-info ms-3">
                                                                            <h6>Add Family Members</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user01} alt="story1" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>Paul Molive</h6>
                                                                                    <p className="mb-0">Brothe</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex justify-content-between mb-4  align-items-center">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex flex-wrap justify-content-between">
                                                                                <div className=" ms-3">
                                                                                    <h6>Anna Mull</h6>
                                                                                    <p className="mb-0">Sister</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user03} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>Paige Turner</h6>
                                                                                    <p className="mb-0">Cousin</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="about4">
                                                                <h4 className="mb-3">Work</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex justify-content-between mb-4  align-items-center">
                                                                        <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                                        <div className="ms-3">
                                                                            <h6>Add Work Place</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>Themeforest</h6>
                                                                                    <p className="mb-0">Web Designer</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex flex-wrap justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>iqonicdesign</h6>
                                                                                    <p className="mb-0">Web Developer</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user03} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex flex-wrap justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>W3school</h6>
                                                                                    <p className="mb-0">Designer</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <h4 className="mb-3">Professional Skills</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex mb-4 align-items-center">
                                                                        <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                                        <div className="ms-3">
                                                                            <h6>Add Professional Skills</h6>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <h4 className="mt-3 mb-3">College</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex mb-4 align-items-center">
                                                                        <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                                        <div className="ms-3">
                                                                            <h6>Add College</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex flex-wrap justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>Lorem ipsum</h6>
                                                                                    <p className="mb-0">USA</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="about5">
                                                                <h4 className="mb-3">Current City and Hometown</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex flex-wrap justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>Georgia</h6>
                                                                                    <p className="mb-0">Georgia State</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                                                        <div className="user-img img-fluid"><Image loading="lazy" src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                                        <div className="w-100">
                                                                            <div className="d-flex flex-wrap justify-content-between">
                                                                                <div className="ms-3">
                                                                                    <h6>Atlanta</h6>
                                                                                    <p className="mb-0">Atlanta City</p>
                                                                                </div>
                                                                                <div className="edit-relation">
                                                                                    <Link href="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                                        Edit
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <h4 className="mt-3 mb-3">Other Places Lived</h4>
                                                                <ul className="suggestions-lists m-0 p-0">
                                                                    <li className="d-flex mb-4 align-items-center">
                                                                        <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                                        <div className="ms-3">
                                                                            <h6>Add Place</h6>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
        </>
    )

}

export default UserProfile;
