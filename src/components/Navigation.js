import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.js";


const Navigation = () => {
 /* const {isAuthentificated, SignOut} = useContext(AuthContext);*/

return (

<Row className="mb-5 mt-5 align-items-end">
<Col>
<Nav className="justify-content-between" activeKey="/home">

<Nav.Item>
  <Nav.Link href="/"><h3>Home</h3></Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/ViewAllSearches"><h3>View all searches</h3></Nav.Link>
</Nav.Item>
{/*{isAuthentificated ? (
  <Nav.Link as={NavLink} to="/new"> Create new ad</Nav.Link>
  ) : ( 
    <> <Nav.Link as={NavLink} to="/signUp" exact>SignUp</Nav.Link><Nav.Link as={NavLink} to="/signIn" exact>SignIn</Nav.Link></>)}*/}

<Nav.Item>
  {/*<Button onClick={SignOut}>Sign Out</Button>*/}
  <Button as={Link} to ="/auth/signUp" className="border ">Sign Up</Button>
  <Button as={Link} to = "/auth/signIn" className="border">Sign In</Button>
</Nav.Item>
</Nav>
</Col>







</Row>
)
};

export default Navigation;