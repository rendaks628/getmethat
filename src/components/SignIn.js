import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import{AuthContext} from "../context/AuthContext";
import {useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {Redirect, useLocation} from "react-router-dom";



const SignIn = () => {
  const {loading, IsAuthenticated, error, signIn } = useContext(AuthContext);
  
  const defaultValues = {
    email:"",
    password:""
  };

   const {
     register,
     handleSubmit,
     formState: {errors},
   } = useForm({defaultValues});

   const onSubmit = async data => await signIn(data); 

   if(IsAuthenticated) return <Redirect to="/"/>
   if(loading) return <Spinner animation="border" variant="primary"/>
   return  (
       <Container>
       <Col md={4}>
   <Form onSubmit={handleSubmit(onSubmit)} style={{border: " 10px solid pink " }}  >
   <Row>{error && <Alert variant="danger">{error}</Alert>}</Row>
    <Form.Group className="mb-3" controlId="email">
      <Form.Label><h4 style={{color: "pink"}}>YOUR EMAIL ADDRESS:</h4></Form.Label>
      <Form.Control 
      type="email" 
      placeholder="Enter email"
      {...register("email",{required: "Email is required"})} />
      {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="password">
      <Form.Label><h4 style={{color: "pink"}}>PASSWORD:</h4></Form.Label>
      <Form.Control
       type="password"
       placeholder="Password" 
      {...register("password", {required: "Password is required"})} />
      {errors.password && <Alert variant="danger">{errors.password.message}</Alert>}
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    
  </Form>
  </Col>
  </Container>
   
)
};


export default SignIn;