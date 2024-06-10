"use client"
import React, {useEffect, useState} from 'react'
import {Row, Col, Container, Modal } from 'react-bootstrap'
import Card from '../../partials/Card'
import Link from 'next/link'
import Image from "next/image"

import img1 from '../../../../public/assets/images/img_5.png'
import img2 from '../../../../public/assets/images/img_2.png'
import {useSession} from "next-auth/react";
import UserProfileInfo from "@/components/views/profile/UserProfileInfo/UserProfileInfo";
import CustomForm from "@/components/views/forms/Form";
import {useUser} from "@/components/Context/Context";
import {toast} from "react-toastify";



const UserProfile =() =>{
    const[users,setUsers]=useState()
    const { data: session, status } = useSession();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [show6, setShow6] = useState(false);
    const handleClose = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const handleClose6 = () => setShow6(false);
    const handleClose7 = () => setShow6(false);
    const [profileImg, setProfileImg] = useState(img2);
    const {user,setUser}=useUser()
    const handleUser=(e)=>{setUsers(e)}
    useEffect(() => {
        const fetchExistUser= async()=>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/getUser/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });
            if (response.ok){
                let userFetched = await response.json();
                setUsers(userFetched)

            }
        }
        fetchExistUser()
    }, []);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handlePhotoUpload(file)


                setProfileImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handlePhotoUpload = async (selectedFile) => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/updatePhoto/${users.id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${session.access_token}`,
            },
            body: formData,
        });

        if (response.ok) {
            const updatedUser = await response.json();
           setUsers(updatedUser)
            setUser(updatedUser)
            console.log("Photo updated:", updatedUser);
        } else {
            toast.error("Image Too Long ",{theme:"colored"})
            console.error("Failed to update photo");
        }
    };
    return(
        <>

            {users &&   <Container>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Body className=" profile-page p-0">
                                <div className="profile-header">
                                    <div className="position-relative">
                                        <Image loading="lazy" src={img1} alt="profile-bg"
                                               className="rounded img-fluid"/>

                                    </div>
                                    <div className="user-detail text-center mb-3">
                                        <div className="profile-img">
                                            {users &&  <Image
                                                loading="lazy"
                                                src={users.photo ? `data:image/jpeg;base64,${users.photo}`:img2}
                                                alt="profile-img1"
                                                className="avatar-130 img-fluid"
                                                onClick={() => document.getElementById('fileInput').click()}
                                                style={{cursor: 'pointer'}}
                                                width={0}
                                                height={0}
                                            />}
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{display: 'none'}}
                                                onChange={handleImageUpload}
                                            />
                                        </div>

                                        <div className="profile-detail">
                                            <p className="pt-5" style={{
                                                position: "relative",
                                                top: "20px"
                                            }}>{users.bio} </p>

                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="profile-info p-3 d-flex flex-column align-items-center justify-content-between position-relative">
                                    <div><h3 className="pb-5">{users.firstName} {users.lastName}</h3></div>

                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Card>
                        <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                        <li>
                            <Link href="#" className="material-symbols-outlined" onClick={handleShow6}>
                                    edit
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="material-symbols-outlined">
                                    settings
                                </Link>
                            </li>
                        </ul>
                        <>


                            <Modal centered show={show6} onHide={handleClose6} style={{padding:"80px",width:"100%"}} scrollable={true}  size="lg"
                                   aria-labelledby="contained-modal-title-vcenter">
                                <Modal.Header closeButton>
                                    <Modal.Title>User Profile</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <CustomForm getUser={handleUser} editedUser={users}/>
                                </Modal.Body>

                            </Modal>

                        </>
                    </Card>
                    <UserProfileInfo  user1={users} />
                </Row>
            </Container>}
        </>
    )

}

export default UserProfile;
