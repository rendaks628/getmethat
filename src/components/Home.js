import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import logo from "./logo.jpg";




const Home = () => {
    return(
    <Container>
    <Row>
    <Col className="mt-4">
    <Container>
    <Form style={{border: " 10px solid pink " }} >
 <Form.Group className="mb-3" >
   <Form.Label><h4 style={{color: "pink"}}>TITLE:</h4></Form.Label>
   <Form.Control type="text" placeholder="Tell people what you want to get" />
   
 </Form.Group>
 <Form.Group controlId="formFile" className="mb-3">
   <Form.Label><h5 style={{color: "pink"}}>Upload a picture:</h5></Form.Label>
   <Button className="btn primary ml-4">Upload</Button> (//https://medium.com/codex/use-a-button-to-upload-files-on-your-react-app-with-bootstrap-ef963cbe8280//)
   <Form.Control type="file" />
 </Form.Group>

 <Form.Group className="mb-3" >
   <Form.Label><h4 style={{color: "pink"}}>SHORT DESCRIPTION:</h4></Form.Label>
   <Form.Control as="textarea" placeholder="Describe shortly what you are looking for" />
 </Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label><h4 style={{color: "pink"}}>DETAILED DESCRIPTION:</h4></Form.Label>
   <Form.Control as="textarea" placeholder="Detailed description what you search for" />
 </Form.Group>
 
 <Button variant="primary" type="submit">
   Submit
 </Button>
</Form>
</Container>
</Col>
<Col className="mt-5">
    <Container>
    <Row><h2 style={{color: "pink"}}>What others search for:</h2></Row>
    <Carousel >
 <Carousel.Item>
   <img
     className="d-block w-100"
     src={logo}
     alt="First slide"
   />
   <Carousel.Caption>
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src={logo}
     alt="Second slide"
   />

   <Carousel.Caption>
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src={logo}
     alt="Third slide"
   />

   <Carousel.Caption>
     <h3>Third slide label</h3>
     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>
</Container>
</Col>
</Row>
</Container>
)
}

export default Home;