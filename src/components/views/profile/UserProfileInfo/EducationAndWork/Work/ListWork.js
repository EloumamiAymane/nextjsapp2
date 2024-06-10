import Image from "next/image";
import img from "../../../../../../../public/assets/images/img_3.png";
import React, { useEffect, useState } from "react";
import { useUser } from "@/components/Context/Context";
import { useSession } from "next-auth/react";
import ExperienceForm from "@/components/views/forms/WorkAndEdicationFrom/ExperienceForm";
import { Modal, Button } from "react-bootstrap";
import { format } from "date-fns";
import {toast} from "react-toastify";

export default function ListWork({ experiences }) {
    const { user } = useUser();
    const { data: session } = useSession();
    const [exp, setExp] = useState([]);
    const [editedExp, setEditedExp] = useState();
    const [show6, setShow6] = useState(false);
    const [visibleCount, setVisibleCount] = useState(2);

    const handleShow6 = (e) => {
        setEditedExp(e);
        setShow6(true);
    };

    const handleClose6 = () => setShow6(false);

    useEffect(() => {
        async function GetListAddress() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/ExperienceApi/getExperiences/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });
            if (response.ok) {
                const listexp = await response.json();
                setExp(listexp);
            }
        }
        GetListAddress();
    }, [experiences]);

    const handleContact = (updatedExp) => {
        const updatedExperiences = exp.map((ex) =>
            ex.id === updatedExp.id ? updatedExp : ex
        );
        setExp(updatedExperiences);
    };

    const handleDelete = async (experienceId) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/ExperienceApi/deleteExp/${experienceId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });

            if (response.ok) {
                const remainingExperiences = exp.filter(ex => ex.id !== experienceId);
                setExp(remainingExperiences);
                toast.success("Experience deleted successfully!", { theme: "colored" });
            } else {
                toast.error("Failed to delete experience!", { theme: "colored" });
            }
        } catch (error) {
            console.error('Error deleting experience:', error);
            toast.error("Failed to delete experience!", { theme: "colored" });
        }
    };

    const showMore = () => setVisibleCount((prev) => prev + 5);
    const showLess = () => setVisibleCount((prev) => Math.max(prev - 5, 2));

    const formatDateRange = (startDate, endDate) => {
        const formattedStart = format(new Date(startDate), "MMM. yyyy");
        const formattedEnd = format(new Date(endDate), "MMM. yyyy");
        return `${formattedStart} - ${formattedEnd}`;
    };

    return (
        <>
            {exp.slice(0, visibleCount).map((e) => (
                <li className="d-flex mb-4 align-items-center justify-content-between" key={e.id}>
                    <div className="user-img img-fluid">
                        <Image loading="lazy" src={img} alt="story1" className="rounded-circle avatar-50" />
                    </div>
                    <div className="w-100">
                        <div className="d-flex justify-content-between">
                            <div className="ms-3">
                                <h6>Entreprise: <span style={{ fontWeight: "bold" }}>{e.entreprise}</span></h6>
                                <p className="mb-0">Poste: <span style={{ fontWeight: "bold" }}>{e.jobTitle}</span></p>
                                <p className="mb-0">Type de Poste: <span style={{ fontWeight: "bold" }}>{e.jobType}</span></p>
                                <p className="mb-0">Mode: <span style={{ fontWeight: "bold" }}>{e.jobModality}</span></p>
                                <p className="mb-0"> <span style={{ fontWeight: "bold" }}>{formatDateRange(e.startDate, e.endDate)}</span></p>
                            </div>
                            <div className="edit-relation">
                                <span
                                    className="material-symbols-outlined md-18"
                                    onClick={() => handleShow6(e)}
                                    style={{ cursor: "pointer" }}
                                >
                                    edit
                                </span>
                                <span
                                    className="material-symbols-outlined md-18"
                                    onClick={() => handleDelete(e.id)}
                                    style={{ cursor: "pointer", marginLeft: "10px" }}
                                >
                                    delete
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}

            {visibleCount < exp.length && (
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
                    <Modal.Title>Edit Your Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceForm experienceEdit={editedExp} getExperience={handleContact} />
                </Modal.Body>
            </Modal>
        </>
    );
}
