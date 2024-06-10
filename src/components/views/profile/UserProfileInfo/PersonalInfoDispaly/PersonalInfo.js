import { Row, Tab } from "react-bootstrap";
import React from "react";

export default function PersonalInfo({ user }) {
    // Function to format the date
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return ` ${formattedDate}`;
    };

    return (
        <>
            <Tab.Pane eventKey="about1">
                <h4>Personal Info</h4>
                <hr />
                <Row className="mb-2">
                    <div className="col-3">
                        <h6>About Me:</h6>
                    </div>
                    <div className="col-9">
                        <p className="mb-0">{user.summary}</p>
                    </div>
                </Row>
                <Row className="mb-2">
                    <div className="col-3">
                        <h6>Email:</h6>
                    </div>
                    <div className="col-9">
                        <p className="mb-0">{user.email}</p>
                    </div>
                </Row>

                <Row className="mb-2">
                    <div className="col-3">
                        <h6>Birth Date:</h6>
                    </div>
                    <div className="col-9">
                        <p className="mb-0">{formatDate(user.birthDate)}</p>
                    </div>
                </Row>
                <Row className="mb-2">
                    <div className="col-3">
                        <h6>Promotion:</h6>
                    </div>
                    <div className="col-9">
                        <p className="mb-0">{user.promotion}</p>
                    </div>
                </Row>

                <Row className="mb-2">
                    <div className="col-3">
                        <h6>Joined:</h6>
                    </div>
                    <div className="col-9">
                        <p className="mb-0"> {formatDate(user.ceatedAt)}</p>
                    </div>
                </Row>
                <Row className="mb-2">
                    <div className="col-3">
                        <h6>Domaine d'etude:</h6>
                    </div>
                    <div className="col-9">
                        <p className="mb-0">{user.domain}</p>
                    </div>
                </Row>
            </Tab.Pane>
        </>
    );
}
