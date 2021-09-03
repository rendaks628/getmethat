import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useForm} from "react-hook-form";
import {useState, Fragment, useContext} from "react";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect, useLocation } from 'react-router-dom';

const SignUp = () => {
   const location = useLocation();
   /*const {loading, isAuthentificated, error, signUp } = useContext(AuthContext);*/
   const defaultValues = {
     first_name: "",
     last_name: "",
     email:"",
     password:"",
     confirm_password:""
   };

   const {
     register,
     handleSubmit,
     formState:{errors},
     setError: formError
   } = useForm({defaultValues});

   return <div>Sign up</div>

/*const onSubmit = async data => await signUp(data);*/

  

/*if(isAuthentificated) return <Redirect to="/"/>*/
/*if (loading) return <Spinner animation="border" variant="primary"/>*/
 {/*return (
     <Container >
     <Col md={4}>
    <Form onSubmit={handleSubmit(onSubmit)} style={{border: " 10px solid pink " }} >
    <Row>{error && <Alert variant="danger">{error}</Alert>}</Row>
    <Form.Group className="mb-3" controlId="first_name">
      <Form.Label><h4 style={{color: "pink"}}>FIRST NAME:</h4></Form.Label>
      <Form.Control 
      type="text" 
      placeholder="First Name(required)" 
      {...register("first_name", {required: "First name is required"})}/>
      {errors.first_name && <Alert variant="danger">{errors.first_name.message}</Alert>}
   </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label><h4 style={{color: "pink"}}>LAST NAME:</h4></Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Last Name(required)"
      {...register("last_name",{required:"Last name is required"})} />
      {errors.last_name && <Alert variant="danger">{errors.last_name}</Alert>}
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label><h4 style={{color: "pink"}}>EMAIL:</h4></Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Email(required)"
        {...register("email",{required:"Email is required"})} /> 
        {errors.email && <Alert variant="danger">{errors.email}</Alert> }
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label><h4 style={{color: "pink"}}>PASSWORD:</h4></Form.Label>
        <Form.Control
         type="password" 
         placeholder="Password(required)"
         {...register("password",{required:"Password is required"})}/>
         {errors.password && <Alert variant="danger">{errors.password}</Alert>}
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label><h4 style={{color: "pink"}}>CONFIRM PASSWORD:</h4></Form.Label>
      <Form.Control
      type="password"
      placeholder= "Confirm password(required)"
      {...register("confirm_password",{required:"Please confirm your password"})}/>
      {errors.confirm_password && <Alert variant="danger">{errors.confirm_password}</Alert>}
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Col>
  </Container>
  )

*/}
};
export default SignUp;