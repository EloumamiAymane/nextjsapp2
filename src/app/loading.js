import {BounceLoader} from "react-spinners";
import {Container} from "react-bootstrap";

export default function loading(){
    const override= {
        display: "block",
        margin: "auto",
        borderColor: "red",
        position:"relative",
        top:"350px"
    };
    return (
        <Container className="p-0">
            <BounceLoader color="#36d7b7" cssOverride={override}/>
        </Container >

    )
}
