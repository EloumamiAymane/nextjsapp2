import {Col, Nav, Row, Tab} from "react-bootstrap";
import Card from "@/components/partials/Card";

import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import UserProfileContact from "@/components/views/profile/UserProfileInfo/AdrresseAndContact/UserProfileContact";
import UserProfileWork from "@/components/views/profile/UserProfileInfo/EducationAndWork/UserProfileWork";
import UserProfileSkills from "@/components/views/profile/UserProfileInfo/UserProfileSkills";
import PersonalInfo from "@/components/views/profile/UserProfileInfo/PersonalInfoDispaly/PersonalInfo";
import {useUser} from "@/components/Context/Context";
import {useLoading} from "@/components/Context/StateApp";
import {toast, ToastContainer} from "react-toastify";


export default  function UserProfileInfo({user1}){
    const { data: session, status } = useSession();
    const { user, setUser } = useUser();
    useEffect(() => {

        async function getUser(){
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/getUser/${session.user.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
            });
            if (response.ok){
                const userData = await response.json();
                setUser(userData);

            }
        }
        getUser()
    }, [user1]);
    const { error, updated,added,UpdatedObj,AddedObj,setErrorState,ResetUpdate,ResetAdded  } = useLoading();
    useEffect(() => {
        console.log("yeeeeee")
        if(updated){

            toast.success("Updated Success !",{theme: "colored"})
            ResetUpdate()
        }
        if(added) {
            toast.success("created Success !", {theme: "colored"})
            ResetAdded()
        }
    }, [added]);

    return(
       <>
           <ToastContainer />
           {user &&  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
               <Col sm={12}>
                   <Tab.Content>
                       <Tab.Pane eventKey="first">
                           <Tab.Container id="left-tabs-example" defaultActiveKey="about1">
                               <Row>
                                   <Col md={4}>
                                       <Card>
                                           <Card.Body>
                                               <Nav variant="pills"
                                                    className=" basic-info-items list-inline d-block p-0 m-0">
                                                   <Nav.Item >
                                                       <Nav.Link href="#" eventKey="about1"> Basic Info</Nav.Link>
                                                   </Nav.Item>

                                                   <Nav.Item >
                                                       <Nav.Link href="#" eventKey="about3">Contact And Address</Nav.Link>
                                                   </Nav.Item>
                                                   <Nav.Item >
                                                       <Nav.Link href="#" eventKey="about4">Experiences and Education</Nav.Link>
                                                   </Nav.Item>
                                                   <Nav.Item >
                                                       <Nav.Link href="#" eventKey="about5">Skills</Nav.Link>
                                                   </Nav.Item>
                                               </Nav>
                                           </Card.Body>
                                       </Card>
                                   </Col>
                                   <Col md={8} className=" ps-4">
                                       <Card>
                                           <Card.Body>
                                               <Tab.Content >
                                                 <PersonalInfo user={user}/>
                                                   <UserProfileContact />
                                                   <UserProfileWork/>
                                                   <UserProfileSkills/>
                                               </Tab.Content>
                                           </Card.Body>
                                       </Card>
                                   </Col>
                               </Row>
                           </Tab.Container>
                       </Tab.Pane>
                   </Tab.Content>
               </Col>
           </Tab.Container>}
       </>
    )
}
