// Inside the ListEducation component
import img from "../../../../../../../public/assets/images/img_4.png";
import React, { useEffect, useState } from "react";
import { useUser } from "@/components/Context/Context";
import { useSession } from "next-auth/react";
import { Modal, Button } from "react-bootstrap";
import EducationForm from "@/components/views/forms/WorkAndEdicationFrom/EducationForm";
import { useLoading } from "@/components/Context/StateApp";
import { toast } from "react-toastify";
import { format } from "date-fns";
import Image from "next/image";

export default function ListEducation({ educations }) {
    const { user, setUser } = useUser();
    const { data: session, status } = useSession();
    const [education, setEducation] = useState([]);
    const [editedEducation, setEditedEducation] = useState();
    const [show6, setShow6] = useState(false);
    const [visibleCount, setVisibleCount] = useState(2); // Number of items to show initially (minimum 2)
    const { error, updated, updatedObj, setErrorState, ResetUpdate } = useLoading();

    const handleShow6 = (e) => {
        setEditedEducation(e);
        setShow6(true);
    };
    const handleClose6 = () => setShow6(false);

    useEffect(() => {
        async function GetListEducation() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/EducationApi/getEducations/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });
            if (response.ok) {
                const listeduc = await response.json();
                setEducation(listeduc);
            }
        }
        GetListEducation();
    }, [educations]);

    const handleContact = (updatedEdu) => {
        const updatedAddresses = education.map((addr) =>
            addr.id === updatedEdu.id ? updatedEdu : addr
        );
        setEducation(updatedAddresses);
    };

    const handleDelete = async (educationId) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/EducationApi/deleteEducation/${educationId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });

            if (response.ok) {
                const remainingEducations = education.filter(edu => edu.id !== educationId);
                setEducation(remainingEducations);
                toast.success("Education deleted successfully!", { theme: "colored" });
            } else {
                toast.error("Failed to delete education", { theme: "colored" });
            }
        } catch (error) {
            console.error('Error deleting education:', error);
            toast.error("Failed to delete education", { theme: "colored" });
        }
    };

    useEffect(() => {
        if (updated) toast.success("Updated Success!", { theme: "colored" });
        ResetUpdate();
    }, [error, updated]);

    const showMore = () => setVisibleCount((prev) => prev + 5);
    const showLess = () => setVisibleCount((prev) => Math.max(prev - 5, 2)); // Ensure minimum visibleCount is 2

    const formatDateRange = (startDate, endDate) => {
        const formattedStart = format(new Date(startDate), "MMM. yyyy");
        const formattedEnd = format(new Date(endDate), "MMM. yyyy");
        return `${formattedStart} - ${formattedEnd}`;
    };

    return (
        <>
            {education.slice(0, visibleCount).map((e) => (
                <li className="d-flex mb-4 align-items-center justify-content-between" key={e.id}>
                    <div className="user-img img-fluid">
                        <Image loading="lazy" src={img} alt="story1" className="rounded-circle avatar-50" />
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between">
                            <div className="ms-3">
                                <h6>Ecole: <span style={{ fontWeight: "bold" }}>{e.ecole}</span></h6>
                                <p className="mb-0">domaine d'etude : <span style={{ fontWeight: "bold" }}>{e.field}</span></p>
                                <p className="mb-0"> <span style={{ fontWeight: "bold" }}>{formatDateRange(e.startDate, e.endDate)}</span></p>
                                <p className="mb-0">Niveau: <span style={{ fontWeight: "bold" }}>{e.degree}</span></p>
                            </div>
                            <div className="edit-relation">
                                <span
                                    className="material-symbols-outlined md-18"
                                    onClick={() => handleShow6(e)}
                                    style={{ cursor: "pointer", marginRight: "10px" }}
                                >
                                    edit
                                </span>
                                <span
                                    className="material-symbols-outlined md-18"
                                    onClick={() => handleDelete(e.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    delete
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}

            {visibleCount < education.length && (
                <div className="d-flex justify-content-center">
                    <p onClick={showMore} style={{ cursor: "pointer", color: "#00b75a", textDecoration: "underline" }}>Show More</p>
                </div>
            )}
            {visibleCount > 2 && (
                <div className="d-flex justify-content-center">
                    <p onClick={showLess} style={{ cursor: "pointer", color: "#00b75a", textDecoration: "underline" }}>Show Less</p>
                </div>
            )}

            <Modal
                centered
                show={show6}
                onHide={handleClose6}
                style={{ padding: "80px", width: "100%" }}
                scrollable={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Education</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EducationForm educationEdit={editedEducation} getEducation={handleContact} />
                </Modal.Body>
            </Modal>
        </>
    );
}
