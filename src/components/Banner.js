import Row from "react-bootstrap/Row";
import logo from "./logo.jpg";


const Banner = () => {

    return (
        <Row>
        <img src={logo} alt="Logo" style={{ height: '400px' }}/>
        </Row>
    )
};

export default Banner;