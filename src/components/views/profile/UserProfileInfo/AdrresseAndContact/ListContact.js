
import Image from "next/image";
import img from "../../../../../../public/assets/images/img_1.png";
import React, { useEffect, useState } from "react";
import { useUser } from "@/components/Context/Context";
import { useSession } from "next-auth/react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "@/components/views/forms/ContactsAdr/ContactForm";
import { toast } from "react-toastify";

export default function ListContact({ adr }) {
    const { user } = useUser();
    const { data: session } = useSession();
    const [Tel, setTel] = useState([]);
    const [show6, setShow6] = useState(false);
    const [editedContact, setEditedContact] = useState(null);
    const [visibleCounts, setVisibleCounts] = useState({}); // Keeps track of visible count for each type

    const handleShow6 = (e) => { setEditedContact(e); setShow6(true); }
    const handleClose6 = () => setShow6(false);

    useEffect(() => {
        async function GetListAddress() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/getTel/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });
            if (response.ok) {
                const listContact = await response.json();
                setTel(listContact);
                const initialVisibleCounts = listContact.reduce((acc, contact) => {
                    acc[contact.contactType] = 1; // Initialize each contact type to show one record initially
                    return acc;
                }, {});
                setVisibleCounts(initialVisibleCounts);
            }
        }

        GetListAddress();
    }, [adr, session]);

    const handleContact = (updatedAddress) => {
        const updatedContacts = Tel.map((contact) =>
            contact.id === updatedAddress.id ? updatedAddress : contact
        );
        setTel(updatedContacts);
    };

    const handleDelete = async (contactId) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/deleteContact/${contactId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });

            if (response.ok) {
                const remainingContacts = Tel.filter(contact => contact.id !== contactId);
                setTel(remainingContacts);
                toast.success("Contact deleted successfully!", { theme: "colored" });
            } else {
                toast.error("Failed to delete contact!", { theme: "colored" });
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
            toast.error("Failed to delete contact!", { theme: "colored" });
        }
    };

    const toggleVisibility = (type) => {
        if (visibleCounts[type] === Tel.filter(contact => contact.contactType === type).length) {
            setVisibleCounts({ ...visibleCounts, [type]: 1 });
        } else {
            setVisibleCounts({ ...visibleCounts, [type]: Tel.filter(contact => contact.contactType === type).length });
        }
    };

    const groupedContacts = Tel.reduce((groups, contact) => {
        const type = contact.contactType;
        if (!groups[type]) {
            groups[type] = [];
        }
        groups[type].push(contact);
        return groups;
    }, {});

    return (
        <>
            {Object.entries(groupedContacts).map(([type, contacts]) => (
                <div key={type}>
                    <p>{type}</p>
                    {contacts.slice(0, visibleCounts[type] || 1).map((e) => (
                        <li className="d-flex mb-4 align-items-center justify-content-between" key={e.id}>
                            <div className="user-img img-fluid">
                                <Image loading="lazy" src={img} alt="story1" className="rounded-circle avatar-20" />
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                        <h6>Email: {e.email}</h6>
                                        <p className="mb-0">Tel: {e.telephone}</p>
                                    </div>
                                    <div className="edit-relation">
                                        <span className="material-symbols-outlined md-18" onClick={() => handleShow6(e)} style={{ cursor: "pointer" }}>
                                            edit
                                        </span>
                                        <span
                                            className="material-symbols-outlined md-18"
                                            onClick={() => handleDelete(e.id)}
                                            style={{ cursor: "pointer", marginLeft: "10px" }}
                                        >
                                            delete
                                        </span>
                                        <Modal centered show={show6} onHide={handleClose6} style={{ padding: "80px", width: "100%" }} scrollable={true} size="lg" aria-labelledby="contained-modal-title-vcenter">
                                            <Modal.Header closeButton>
                                                <Modal.Title>Edit Your Contact</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <ContactForm getTel={handleContact} contactToEdit={editedContact} />
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    <div className="d-flex justify-content-center">
                        <p onClick={() => toggleVisibility(type)} style={{cursor:"pointer",color:"#00b75a",textDecoration:"underline"}}>
                            {visibleCounts[type] === Tel.filter(contact => contact.contactType === type).length ? "Show Less" : "Show More"}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}
