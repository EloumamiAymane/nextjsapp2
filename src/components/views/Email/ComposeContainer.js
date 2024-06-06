"use client"
import React from 'react'
import {Col, Container, Form, Row} from 'react-bootstrap'
import Card from '../../partials/Card'
import Link from 'next/link'

import './email-compose.css'


const ComposeContainer = () => {

    return (<>
            <div id='content-page' className='content-page'>
                <Container className='relative'>
                    <Row className="row-eq-height">
                        <Col md="12">
                            <Row>
                                <Col md="12">
                                    <Card className="iq-border-radius-20">
                                        <Card.Body>
                                            <Row>
                                                <Col md="12" className="mb-3">
                                                    <h5 className="text-primary card-title"><i
                                                        className="ri-pencil-fill"></i> Compose Message</h5>
                                                </Col>
                                            </Row>
                                            <Form className="email-form">
                                                <Row className="form-group">
                                                    <Form.Label column sm="2" htmlFor="to"
                                                                className="col-form-label">To:</Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" id="to"/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Form.Label column sm="2" htmlFor="cc"
                                                                className="col-form-label">Cc:</Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" id="cc"/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Form.Label column sm="2" htmlFor="subject"
                                                                className="col-form-label">Subject:</Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" id="subject"/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Form.Label htmlFor="subject" column sm="2"
                                                                className="col-form-label">Your Message:</Form.Label>
                                                    <Col md="10">
                                                        <Form.Control as="textarea" className="textarea" rows={5}
                                                                      defaultValue="Next, use our Get Started docs to setup Tiny!"/>
                                                    </Col>
                                                </Row>
                                                <Form.Group
                                                    className="form-group d-flex justify-content-between align-items-center compose-bottom pt-3 m-0">
                                                    <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                                                        <div className="send-btn pl-3 mb-2">
                                                            <button type="button" className="btn btn-primary">Send
                                                            </button>
                                                        </div>
                                                        <div className="send-panel mb-2">
                                                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded"
                                                                        htmlFor="file"> <Form.Control type="file"
                                                                                                      id="file"
                                                                                                      style={{display: "none"}}/><Link
                                                                href="#"
                                                                className="material-symbols-outlined writ-icon text-primary">attachment</Link>
                                                            </Form.Label>
                                                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                                                                <Link href="#"
                                                                      className="material-symbols-outlined text-primary">place</Link></Form.Label>
                                                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                                                                <Link href="#"
                                                                      className="material-symbols-outlined text-primary">add_to_drive</Link>
                                                            </Form.Label>
                                                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                                                                <Link href="#"
                                                                      className="material-symbols-outlined text-primary">photo_camera</Link>
                                                            </Form.Label>
                                                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                                                                <Link href="#"
                                                                      className="material-symbols-outlined text-primary">sentiment_satisfied</Link>
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mr-3 align-items-center">
                                                        <div className="send-panel float-right">
                                                            <Form.Label
                                                                className="ms-2 mb-0 bg-soft-primary rounded"><Link
                                                                href="#"
                                                                className="material-symbols-outlined text-primary">settings</Link></Form.Label>
                                                            <Form.Label
                                                                className="ms-2 mb-0 bg-soft-primary rounded"><Link
                                                                href="#"
                                                                className="material-symbols-outlined">delete</Link>
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>)
}

export default ComposeContainer
