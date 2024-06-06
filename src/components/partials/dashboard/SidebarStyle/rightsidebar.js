"use client";
import React from 'react'
import {Card} from 'react-bootstrap'
import Image from "next/image";
import user1 from '../../../../../public/assets/images/user/01.jpg'
import user2 from '../../../../../public/assets/images/user/02.jpg'
import user3 from '../../../../../public/assets/images/user/03.jpg'
import user4 from '../../../../../public/assets/images/user/04.jpg'
import user5 from '../../../../../public/assets/images/user/11.jpg'
import user6 from '../../../../../public/assets/images/user/12.jpg'




const RightSidebar = () => {
    const onlinePerson = [
        { key:"1",photo: user1 ,name:'Anna Sthesia',statut:'Just Now'},
        { key:"2",photo: user2 ,name:'Paul Molive',statut:'Admin'},
        { key:"3",photo: user3 ,name:'Anna Mul',statut:'Just Now'},
        { key:"4",photo: user4 ,name:'Nour Sthesia',statut:'Just Now'},
        { key:"5",photo: user5 ,name:'Lina Sthesia',statut:'Just Now'},
        { key:"6",photo: user6,name:'Anna Sthesia',statut:'Just Now'},
        { key:"7",photo: user4 ,name:'Nour Sthesia',statut:'Just Now'},
        { key:"8",photo: user5 ,name:'Lina Sthesia',statut:'Just Now'},
        { key:"9",photo: user6,name:'Anna Sthesia',statut:'Just Now'},
        { key:"10",photo: user4 ,name:'Nour Sthesia',statut:'Just Now'},
        { key:"11",photo: user5 ,name:'Lina Sthesia',statut:'Just Now'},
        { key:"12",photo: user6,name:'Anna Sthesia',statut:'Just Now'},

    ];
    let minirightsidebar=() =>{
        if(document!=undefined){
            document.getElementById('rightSidebar').classList.toggle('right-sidebar');
            document.body.classList.toggle('right-sidebar-close');
        }
        else{
            return null;
        }
    };



    return (
        <>
            <div className="right-sidebar-mini" id="rightSidebar">
                <div className="right-sidebar-panel p-0">
                    <Card className="shadow-none">
                        <Card.Body className="p-0">
                            <div className="media-height p-3" data-scrollbar="init">
                                {onlinePerson.map((p) =>
                                    <div className="d-flex align-items-center mb-4" key={p.key}>
                                        <div className="iq-profile-avatar status-online">
                                            <Image className="rounded-circle avatar-50" src={p.photo} alt=""
                                                   loading="lazy"/>
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="mb-0">{p.name}</h6>
                                            <p className="mb-0">{p.statut}</p>
                                        </div>
                                    </div>
                                )}


                            </div>
                            <div className="right-sidebar-toggle bg-primary text-white mt-3 d-flex" onClick={minirightsidebar}>
                                <span className="material-symbols-outlined">chat</span>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default RightSidebar

