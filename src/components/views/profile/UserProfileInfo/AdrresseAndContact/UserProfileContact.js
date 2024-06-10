import {Modal, Tab} from "react-bootstrap";
import Image from "next/image";
import user01 from "../../../../../../public/assets/images/user/01.jpg";
import Link from "next/link";
import user02 from "../../../../../../public/assets/images/user/02.jpg";
import user03 from "../../../../../../public/assets/images/user/03.jpg";
import React, {useEffect, useState} from "react";

import AddressForm from "@/components/views/forms/ContactsAdr/AddressForm";
import ContactForm from "@/components/views/forms/ContactsAdr/ContactForm";
import ListAddresse from "@/components/views/profile/UserProfileInfo/AdrresseAndContact/ListAddresse";
import ListContact from "@/components/views/profile/UserProfileInfo/AdrresseAndContact/ListContact";
import {toast, ToastContainer} from "react-toastify";
import {useLoading} from "@/components/Context/StateApp";


export default function UserProfileContact(){
    const [show6, setShow6] = useState(false);
    const handleShow6 = () => setShow6(true);
    const handleClose6 = () => setShow6(false);
    const [show7, setShow7] = useState(false);
    const [adr, setadr] = useState();
    const [contact, setContact] = useState();
    const handleShow7 = () => setShow7(true);
    const handleClose7 = () => setShow7(false);
    const handleTel=(e)=>{setadr(e)}
    const handleContact=(e)=>{setContact(e)}
    return(
        <>
            <Tab.Pane eventKey="about3">
                <h4 className="mb-3">Addresses</h4>
                <ul className="suggestions-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18" onClick={()=>{setShow6(true)}} style={{cursor:"pointer"}}>
                                                         add
                                                      </span>
                            <Modal centered show={show6} onHide={handleClose6} style={{padding:"80px",width:"100%"}} scrollable={true}  size="lg"
                                   aria-labelledby="contained-modal-title-vcenter">
                                   <Modal.Header closeButton>
                                       <Modal.Title>Add Your Address</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>
                                      <AddressForm getContact={handleContact}/>
                                   </Modal.Body>
                            </Modal>

                        </div>
                        <div className="media-support-info ms-3">
                            <h6>Add Your Addresses </h6>
                        </div>
                    </li>

                   <ListAddresse contact={contact}/>

                </ul>
                <h4 className="mt-3 mb-3">Contacts</h4>
                <ul className="suggestions-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18" onClick={() => {
                                                          setShow7(true)
                                                      }} style={{cursor: "pointer"}}>
                                                         add
                                                      </span>
                            <Modal centered show={show7} onHide={handleClose7} style={{padding: "80px", width: "100%"}}
                                   scrollable={true} size="lg"
                                   aria-labelledby="contained-modal-title-vcenter">
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Your Contact</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ContactForm getTel={handleTel}/>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="media-support-info ms-3">
                            <h6>Add Contact</h6>
                        </div>
                    </li>
<ListContact adr={adr}/>
                </ul>
            </Tab.Pane>
        </>
    )
}
