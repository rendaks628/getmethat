import axios from "axios";
import {Fragment, useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Controller} from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";





const CreateAd = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [preview, setPreview] = useState(null);
   const defaultValues = {
       title: "",
       cover: "",
       short_description: "",
       body: ""
   };

   const {
       register,
       handleSubmit,
       formState,
       reset,
       control,
       setValue,
       setError: formError
   } = useForm({defaultValues});

   const {errors} = formState;
   

   

   const {push} = useHistory()

   const onSubmit = async data => {
       try{
           setLoading(true);
           const {
               data: {id}
           } = await axios.post(`${process.env.REACT_APP_GETMETHAT_API}/ads`, data, {
               headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}
           });
           setLoading(false);
           reset();
           push(`/ads/${id}`);
       } catch (error) {
           if(error.response) {
               setError(error.response.data.error);
               setTimeout(() => setError(null), 4000);
               setLoading(false);
           } else {
               setError("Network error");
               setTimeout(() => setError(null), 4000);
               setLoading(false);
           }
       }
   };

 const uploadPicture = async e => {
     const formData = new FormData();
     formData.append("image", e.target.files[0]);
     try {
         const {
             data: {location}
         } = await axios.post(`${process.env.REACT_APP_GETMETHAT_API}/image-upload`, formData, {
             headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
         });
         setPreview(location);
         setValue("cover", location);
     } catch (error) {
         if(error) {
             formError("cover", {type: "manual", message: error.response.data.error});
         } else {
             formError("cover", {type: "manual", message: error.message});
         }
     }
 };

 if (loading) return <Spinner animation="border" variant="primary" />;

 return (
 
 
    
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
     
 )
};

export default CreateAd;