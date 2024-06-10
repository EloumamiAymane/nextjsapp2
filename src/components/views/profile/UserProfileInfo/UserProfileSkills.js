import { Button, Modal, Tab } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SkillForm from "@/components/views/forms/skillsForm/SkillForm";
import { useSession } from "next-auth/react";

export default function UserProfileSkills() {
    const [show6, setShow6] = useState(false);
    const handleShow6 = () => setShow6(true);
    const handleClose6 = () => setShow6(false);
    const [skills, setSkills] = useState([]);
    const { data: session } = useSession();

    const handleSkills = (e) => {
        setSkills(e);
    };

    const handleRemoveSkill = async (skillId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/deleteSkill/${skillId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session.access_token}`,
            },
        });

        if (response.ok) {
            setSkills(skills.filter(skill => skill.id !== skillId));
        } else {
            console.error("Failed to delete skill");
        }
    };

    useEffect(() => {
        async function getListSkills() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/getSkills/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });

            if (response.ok) {
                const listSkills = await response.json();
                setSkills(listSkills);
            }
        }

        getListSkills();
    }, [session.user.email, session.access_token]);

    return (
        <>
            <Tab.Pane eventKey="about5">
                <h4 className="mt-3 mb-3">Ajouter vos compétences</h4>
                <ul className="suggestions-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                            <span className="material-symbols-outlined md-18" onClick={handleShow6} style={{ cursor: "pointer" }}>
                                add
                            </span>
                            <Modal centered show={show6} onHide={handleClose6} style={{ padding: "80px", width: "100%" }} scrollable size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Ajouter une compétence</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <SkillForm getSkills={handleSkills} />
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="ms-3">
                            <h6>Ajouter une compétence</h6>
                        </div>
                    </li>
                </ul>
                <div className="d-flex flex-wrap">
                    {skills.map((s, index) => (
                        <div key={index} className="badge badge-pill badge-primary mr-2 mb-2 d-flex align-items-center">

                            <Button
                                variant="outline-primary"
                                size="sm"
                                className="ml-2"
                                onClick={() => handleRemoveSkill(s.id)}
                            >
                                <span style={{color: "black"}}>{s.name}</span>
                               <span >&nbsp;&nbsp; &times;</span>
                            </Button>
                        </div>
                    ))}
                </div>
            </Tab.Pane>
        </>
    );
}
