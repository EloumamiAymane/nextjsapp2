"use client"
import React from 'react'
import {Row, Dropdown, Nav, Tab,Container } from 'react-bootstrap'
import Card from '../../partials/Card'
import Link from 'next/link'
import ReactFsLightbox from 'fslightbox-react';
import Image from "next/image";
import img3 from '../../../../public/assets/images/page-img/profile-bg3.jpg'
import user05 from '../../../../public/assets/images/user/05.jpg'
import user06 from '../../../../public/assets/images/user/06.jpg'
import user07 from '../../../../public/assets/images/user/07.jpg'
import user08 from '../../../../public/assets/images/user/08.jpg'
import user09 from '../../../../public/assets/images/user/09.jpg'
import user10 from '../../../../public/assets/images/user/10.jpg'
import user13 from '../../../../public/assets/images/user/13.jpg'
import user14 from '../../../../public/assets/images/user/14.jpg'
import user15 from '../../../../public/assets/images/user/15.jpg'
import user16 from '../../../../public/assets/images/user/16.jpg'
import user17 from '../../../../public/assets/images/user/17.jpg'
import user18 from '../../../../public/assets/images/user/18.jpg'
import user19 from '../../../../public/assets/images/user/19.jpg'
import ProfileHeaderContainer from "@/components/views/profile/ProfileHeaderContainer";


// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;


export default function FriendsListContainer(){
    return(
        <>
            <div id="content-page" className="content-page">
            <Container>
                <ProfileHeaderContainer title="Friend Lists" img={img3}/>
                <Row>

                <Tab.Container id="left-tabs-example" defaultActiveKey="all-friends">
                    <Card>
                        <Card.Body>
                            <h2>Friends</h2>
                            <div className="friend-list-tab mt-2">
                                <Nav variant="pills" className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                                    <Nav.Item>
                                        <Nav.Link  href="#pill-all-friends" eventKey="all-friends">All Friends</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#pill-recently-add" eventKey="recently-add">Recently Added</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#pill-closefriends" eventKey="closefriends"> Close friends</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#pill-home" eventKey="home-town"> Home/Town</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#pill-following" eventKey="following">Following</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="all-friends">
                                        <Card.Body className="p-0">
                                            <Row>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Petey Cruiser</h5>
                                                                    <p className="mb-0">15  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Anna Sthesia</h5>
                                                                    <p className="mb-0">50  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Paul Molive</h5>
                                                                    <p className="mb-0">10  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Gail Forcewind</h5>
                                                                    <p className="mb-0">20  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Paige Turner</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>b Frapples</h5>
                                                                    <p className="mb-0">6  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user13} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Walter Melon</h5>
                                                                    <p className="mb-0">30  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user14} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Barb Ackue</h5>
                                                                    <p className="mb-0">14  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Buck Kinnear</h5>
                                                                    <p className="mb-0">16  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Ira Membrit</h5>
                                                                    <p className="mb-0">22  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Shonda Leer</h5>
                                                                    <p className="mb-0">10  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>ock Lee</h5>
                                                                    <p className="mb-0">18  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Maya Didas</h5>
                                                                    <p className="mb-0">40  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Rick O'Shea</h5>
                                                                    <p className="mb-0">50  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Pete Sariya</h5>
                                                                    <p className="mb-0">5  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Monty Carlo</h5>
                                                                    <p className="mb-0">2  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Sal Monella</h5>
                                                                    <p className="mb-0">0  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Sue Vaneer</h5>
                                                                    <p className="mb-0">25  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Cliff Hanger</h5>
                                                                    <p className="mb-0">18  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Barb Dwyer</h5>
                                                                    <p className="mb-0">23  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Terry Aki</h5>
                                                                    <p className="mb-0">8  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user13} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Cory Ander</h5>
                                                                    <p className="mb-0">7  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user14} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Robin Banks</h5>
                                                                    <p className="mb-0">14  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Jimmy Changa</h5>
                                                                    <p className="mb-0">10  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Barry Wine</h5>
                                                                    <p className="mb-0">18  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Poppa Cherry</h5>
                                                                    <p className="mb-0">16  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Zack Lee</h5>
                                                                    <p className="mb-0">33  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Don Stairs</h5>
                                                                    <p className="mb-0">15  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Peter Pants</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Hal Appeno </h5>
                                                                    <p className="mb-0">13  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </Card.Body>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="recently-add" >
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Otto Matic</h5>
                                                                    <p className="mb-0">4  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Moe Fugga</h5>
                                                                    <p className="mb-0">16  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Tom Foolery</h5>
                                                                    <p className="mb-0">14  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Bud Wiser</h5>
                                                                    <p className="mb-0">16  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Polly Tech</h5>
                                                                    <p className="mb-0">10  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Holly Graham</h5>
                                                                    <p className="mb-0">8  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Tara Zona</h5>
                                                                    <p className="mb-0">5  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Barry Cade</h5>
                                                                    <p className="mb-0">20  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="closefriends" >
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Bud Wiser</h5>
                                                                    <p className="mb-0">32  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Otto Matic</h5>
                                                                    <p className="mb-0">9  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Peter Pants</h5>
                                                                    <p className="mb-0">2  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Zack Lee</h5>
                                                                    <p className="mb-0">15  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Barry Wine</h5>
                                                                    <p className="mb-0">36  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Robin Banks</h5>
                                                                    <p className="mb-0">22  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Cory Ander</h5>
                                                                    <p className="mb-0">18  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Moe Fugga</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Polly Tech</h5>
                                                                    <p className="mb-0">30  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Hal Appeno</h5>
                                                                    <p className="mb-0">25  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="home-town" >
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Paul Molive</h5>
                                                                    <p className="mb-0">14  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Paige Turner</h5>
                                                                    <p className="mb-0">8  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Barb Ackue</h5>
                                                                    <p className="mb-0">23  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Ira Membrit</h5>
                                                                    <p className="mb-0">16  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Maya Didas</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="following" >
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Maya Didas</h5>
                                                                    <p className="mb-0">20  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Monty Carlo</h5>
                                                                    <p className="mb-0">3  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Cliff Hanger</h5>
                                                                    <p className="mb-0">20  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>b Ackue</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Bob Frapples</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Anna Mull</h5>
                                                                    <p className="mb-0">6  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>ry Wine</h5>
                                                                    <p className="mb-0">15  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Don Stairs</h5>
                                                                    <p className="mb-0">12  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Peter Pants</h5>
                                                                    <p className="mb-0">8  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Polly Tech</h5>
                                                                    <p className="mb-0">18  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Tara Zona</h5>
                                                                    <p className="mb-0">30  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Arty Ficial</h5>
                                                                    <p className="mb-0">15  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Bill Emia</h5>
                                                                    <p className="mb-0">25  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Bill Yerds</h5>
                                                                    <p className="mb-0">9  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 mb-3">
                                                    <div className="iq-friendlist-block">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Link href="#">
                                                                    <Image loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                                </Link>
                                                                <div className="friend-info ms-3">
                                                                    <h5>Matt Innae</h5>
                                                                    <p className="mb-0">19  friends</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                        <i className="material-symbols-outlined me-2">
                                                                            done
                                                                        </i>
                                                                        Friend
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right" >
                                                                        <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab.Container>
                </Row>
            </Container>

            </div>
        </>
    )
}
