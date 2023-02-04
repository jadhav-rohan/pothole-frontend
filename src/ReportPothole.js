import axios from "axios";
import React, { useState }  from "react";
import Form from 'react-bootstrap/Form';
import NavBar from "./NavBar";
// const FormData = require('form-data');

const ReportPothole = () => {
    
    const [values, setValues] = useState({
        email: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
        photo: "",
        formData: "",
      });

      const {email, address, pincode, city, state, formData} = values;

      const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: ""});
        axios.post("http://localhost:9002/add", values)
        .then(res => {
            alert(res.data.message);
        }).catch(err => alert("Failed"))
      };

      const handleChange = (name) => (event) => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      };

    return(
        <div className="">
            <NavBar/>
            <div class="container h-100 mt-5">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-10 col-md-8 col-lg-6">
                    <Form className="d-flex flex-column">
                    <h1>Fill the Details</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" onChange={handleChange("email")} placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control as="textarea" onChange={handleChange("address")}rows={1}/>
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control as="textarea" onChange={handleChange("pincode")}rows={1}/>
                            <Form.Label>City</Form.Label>
                            <Form.Control as="textarea" onChange={handleChange("city")} rows={1}/>
                            <Form.Label>State</Form.Label>
                            <Form.Control as="textarea" onChange={handleChange("state")} rows={1}/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image of the Pothole</Form.Label>
                            <Form.Control type="file" onChange={handleChange("photo")}/>
                        </Form.Group>
                        <button type="submit" onClick={onSubmit}>Post</button>
                    </Form>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPothole;