
import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import Image from "next/image"
// img
import error404 from '../../public/assets/images/error/400.png'
import Link from "next/link";

const Error404 = () => {

    return (<>
            <Container className="p-0">
                <Row className="no-gutters height-self-center">
                    <Col sm="12" className="text-center align-self-center">
                        <div className="iq-error position-relative mt-5">
                            <Image src={error404} className="img-fluid iq-error-img" alt=""/>
                            <h2 className="mb-0 text-center">Oops! This Page is Not Found.</h2>
                            <p className="text-center">The requested page dose not exist.</p>
                            <Button variant="primary" className="mt-3">  <Link  href="/feed" className="text-light" >
                                <i className="ri-home-4-line me-1"></i>
                                Back to Home</Link> </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>)
}

export default Error404;
