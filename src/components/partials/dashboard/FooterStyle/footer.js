"use client";
import React, {useEffect} from 'react'
import  Link from 'next/link'
import {Row, Col, Container} from 'react-bootstrap'

const Footer = (props) => {
    let urlParams;
    let mode ;
    useEffect(() => {
        urlParams=new URLSearchParams(window.location.search);
        mode= urlParams.get('dark');
        if (mode !== null) {
            document.body.classList=''
            switch (mode) {
                case "true":
                    document.body.classList='dark'
                    break;
                case "false":
                    document.body.classList=''
                    break;
                default:
                    document.body.classList=''
                    break;
            }
        }
    }, []);

    return (
            <>
                <footer className="iq-footer " style={{position:"sticky"}}>
                    <Container fluid>
                        <Row>
                            <Col lg="6">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><Link href="#">Privacy Policy</Link></li>{' '}
                                    <li className="list-inline-item"><Link href="#">Terms of Use</Link></li>
                                </ul>
                            </Col>
                            <Col lg="6" className="d-flex justify-content-end">
                                <span>Copyright 2020<Link href="#"> INSEA PRO </Link> All Rights Reserved.</span>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        )
}

export default (Footer)
