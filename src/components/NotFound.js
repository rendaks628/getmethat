import Col from "react-bootstrap/Col";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import error from "./error.jpg";

const NotFound = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => history.push("/"), 4000);
    }, [history]);
    return <Col><img src={error} alt="404"/></Col>;
};

export default NotFound;