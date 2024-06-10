
import Image from "next/image";
import img from "../../../../../../public/assets/images/img.png";
import React, { useEffect, useState } from "react";
import { useUser } from "@/components/Context/Context";
import { useSession } from "next-auth/react";
import AddressForm from "@/components/views/forms/ContactsAdr/AddressForm";
import { Modal, Button } from "react-bootstrap";
import {toast} from "react-toastify";

export default function ListAddresse({ contact }) {
    const { user } = useUser();
    const { data: session } = useSession();
    const [address, setAddress] = useState([]);
    const [editedContact, setEditedContact] = useState(null);
    const [show6, setShow6] = useState(false);
    const [visibleCounts, setVisibleCounts] = useState({}); // Keeps track of visible count for each type

    const handleShow6 = (e) => {
        setEditedContact(e);
        setShow6(true);
    };

    const handleClose6 = () => setShow6(false);

    useEffect(() => {
        async function GetListAddress() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/getAddress/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });
            if (response.ok) {
                const listAddress = await response.json();
                setAddress(listAddress);
                const initialVisibleCounts = listAddress.reduce((acc, addr) => {
                    acc[addr.addressType] = 1; // Initialize each address type to show one record initially
                    return acc;
                }, {});
                setVisibleCounts(initialVisibleCounts);
            }
        }
        if (session?.user?.email) {
            GetListAddress();
        }
    }, [contact, session]);

    const handleContact = (updatedAddress) => {
        const updatedAddresses = address.map((addr) =>
            addr.id === updatedAddress.id ? updatedAddress : addr
        );
        setAddress(updatedAddresses);
    };

    const handleDelete = async (addressId) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/deleteAdresse/${addressId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });

            if (response.ok) {
                const remainingAddresses = address.filter(addr => addr.id !== addressId);
                setAddress(remainingAddresses);
                toast.success("Address deleted successfully!", { theme: "colored" });
            } else {
                toast.error("Failed to delete address!", { theme: "colored" });
            }
        } catch (error) {
            console.error('Error deleting address:', error);
            toast.error("Failed to delete address!", { theme: "colored" });
        }
    };

    const groupedAddresses = address.reduce((groups, addr) => {
        const type = addr.addressType;
        if (!groups[type]) {
            groups[type] = [];
        }
        groups[type].push(addr);
        return groups;
    }, {});

    const toggleVisibility = (type) => {
        if (visibleCounts[type] === groupedAddresses[type].length) {
            setVisibleCounts({ ...visibleCounts, [type]: 1 });
        } else {
            setVisibleCounts({ ...visibleCounts, [type]: groupedAddresses[type].length });
        }
    };

    return (
        <>
            {Object.entries(groupedAddresses).map(([type, addresses]) => (
                <div key={type}>
                    <p>{type}</p>
                    {addresses.slice(0, visibleCounts[type] || 1).map((e) => (
                        <li className="d-flex mb-4 align-items-center justify-content-between" key={e.id}>
                            <div className="user-img img-fluid">
                                <Image loading="lazy" src={img} alt="story1" className="rounded-circle avatar-30" />
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                        <h6>{e.address1} {e.address2}</h6>
                                        <p className="mb-0">{e.city}</p>
                                        <p className="mb-0">{e.country}</p>
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
                                                <Modal.Title>Edit Your Address</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <AddressForm getContact={handleContact} contactToEdit={editedContact} />
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    <div className="d-flex justify-content-center">
                        <p onClick={() => toggleVisibility(type)} style={{cursor:"pointer",color:"#00b75a",textDecoration:"underline"}}>
                            {visibleCounts[type] === groupedAddresses[type].length ? "Show Less" : "Show More"}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}
