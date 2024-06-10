"use client";
import React, {useEffect, useState} from "react";
import {
  Dropdown,
  Nav,
  Form,
  Card,
  Container,
  Modal,
} from "react-bootstrap";
import Link  from "next/link";
import Image from "next/image"
//image
import img from "../../../../../public/assets/images/img_2.png";
import InseaLogo from "../../../../../public/assets/insea/insealogo2.png"
//Componets
import CustomToggle from "../../dropdowns"
import {signOut, useSession} from "next-auth/react";
import {useUser} from "@/components/Context/Context";
async function logOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}
const Header = () => {
  const { data: session, status } = useSession();
  const {user,setUser}=useUser()
  let minisidebar= () => {
    if(document !=undefined){
      document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
    }
    else{
      return null;
    }

  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="iq-top-navbar">
        <Nav
          expand="lg"
          variant="light"
          className="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0"
        >
          <Container fluid className="navbar-inner">
            <div className="d-flex align-items-center gap-3  pb-2 pb-lg-0">

              <Link
                href="/"
                className="d-flex align-items-center gap-2 iq-header-logo"
              >
               <Image src={InseaLogo} alt="Logo" height={80} width={180}/>
              </Link>
              <Link
              href="#"
              className="sidebar-toggle"
              data-toggle="sidebar"
              data-active="true"
              onClick={minisidebar}
            >
              <div className="icon material-symbols-outlined iq-burger-menu">
                menu
              </div>
            </Link>
            </div>

            <div className="iq-search-bar device-search  position-relative">
              <form
                action="#"
                className="searchbox"
                onClick={handleShow}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalFullscreenSm"
              >
                <Link className="search-link d-none d-lg-block" href="/">
                  <span className="material-symbols-outlined">search</span>
                </Link>
                <Form.Control
                  type="text"
                  className="text search-input form-control bg-soft-primary  d-none d-lg-block"
                  placeholder="Search here..."
                />
                <Link
                  className="d-lg-none d-flex d-none d-lg-block"
                  href="/"
                  onClick={handleShow}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalFullscreenSm"
                >
                  <span className="material-symbols-outlined">search</span>
                </Link>
              </form>


            </div>

            <ul className="navbar-nav navbar-list">
              <Nav.Item as="li">
                <Link href="/" className="d-flex align-items-center">
                  <i className="material-symbols-outlined">home</i>
                  <span className="mobile-text d-none ms-3">Home</span>
                </Link>
              </Nav.Item>



              <Dropdown as="li" className="nav-item user-dropdown">
                <Dropdown.Toggle
                  href="#"
                  as={CustomToggle}
                  variant="d-flex align-items-center"
                >
                  { user && (
                      <Image
                          src={user.photo ? `data:image/jpeg;base64,${user.photo}` : img}
                          className="img-fluid rounded-circle me-3"
                          alt="user"
                          loading="lazy"
                          width={0}
                          height={0}
                      />
                  )}

                  <div className="caption d-none d-lg-block">
                    <h6 className="mb-0 line-height">{session.user.name}</h6>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-drop caption-menu">
                  <Card className="shadow-none m-0">
                    <Card.Header>
                      <div className="header-title">
                        <h5 className="mb-0 ">Hello Bni Cyst</h5>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-0 ">
                      <div className="d-flex align-items-center iq-sub-card border-0">
                        <span className="material-symbols-outlined">
                          line_style
                        </span>
                        <div className="ms-3">
                          <Link href="/users/profile" className="mb-0 h6">
                            My Profile
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center iq-sub-card">
                        <span className="material-symbols-outlined">login</span>
                        <div className="ms-3">
                          <p  className="mb-0 h6" onClick={() => {
                            logOut().then(() => signOut({ callbackUrl: "/" }));
                          }}>
                            Sign out
                          </p>
                        </div>
                      </div>

                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>

            </ul>
          </Container>
        </Nav>
      </div>
    </>
  );
};

export default Header;
