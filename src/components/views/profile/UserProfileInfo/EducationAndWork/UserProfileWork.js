import {Modal, Tab} from "react-bootstrap";
import React, {useState} from "react";
import ListEducation from "@/components/views/profile/UserProfileInfo/EducationAndWork/Education/ListEducation";
import ListWork from "@/components/views/profile/UserProfileInfo/EducationAndWork/Work/ListWork";
import EducationForm from "@/components/views/forms/WorkAndEdicationFrom/EducationForm";
import ExperienceForm from "@/components/views/forms/WorkAndEdicationFrom/ExperienceForm";


export default function UserProfileWork(){
    const [show6, setShow6] = useState(false);
    const handleShow6 = () => setShow6(true);
    const handleClose6 = () => setShow6(false);
    const [show7, setShow7] = useState(false);
    const handleShow7 = () => setShow7(true);
    const handleClose7 = () => setShow7(false);
    const [educ,setEduc]=useState()
    const [exp,setExp]=useState()
    const handleEducation=(e)=>{
        setEduc(e)
    }
  const  handleExp=(e)=>{
        setExp(e)
  }
    return(
        <>
            <Tab.Pane eventKey="about4">
                <h4 className="mt-3 mb-3">Education</h4>
                <ul className="suggestions-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18" onClick={() => {
                                                          setShow6(true)
                                                      }} style={{cursor: "pointer"}}>
                                                         add
                                                      </span>
                            <Modal centered show={show6} onHide={handleClose6} style={{padding: "80px", width: "100%"}}
                                   scrollable={true} size="lg"
                                   aria-labelledby="contained-modal-title-vcenter">
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Your Education</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                 <EducationForm  getEducation={handleEducation}/>
                                </Modal.Body>
                            </Modal>

                        </div>
                        <div className="media-support-info ms-3">
                            <h6>Add Your Educations </h6>
                        </div>
                    </li>
                    <ListEducation educations={educ}/>
                </ul>


                <h4 className="mb-3">Experience</h4>
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
                                    <Modal.Title>Add Your Experience</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
<ExperienceForm getExperience={handleExp}/>
                                </Modal.Body>
                            </Modal>

                        </div>
                        <div className="media-support-info ms-3">
                            <h6>Add Your Experiences </h6>
                        </div>
                    </li>

                    <ListWork experiences={exp}/>
                </ul>
            </Tab.Pane>
        </>
    )
}
