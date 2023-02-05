import axios from "axios";
import React, { useState }  from "react";
import Form from 'react-bootstrap/Form';
import NavBar from "./NavBar";
const FormData = require('form-data');

const ReportPothole = () => {
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [image, setImage] = useState("")

    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    function handleApi(){
        console.log(email, address)
        const formData = new FormData()
        formData.append("testImage", image)
        formData.append("email", email)
        formData.append("address", address)
        formData.append("pincode", pincode)
        formData.append("city", city)
        formData.append("state", state)
        // console.log(formData);   
        axios.post("http://localhost:9002/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div className="">
            <NavBar/>
            <div class="container h-100 mt-5">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-10 col-md-8 col-lg-6">
                    <Form className="d-flex flex-column" onSubmit={handleApi} encType="multipart/form-data">
                    <h1>Fill the Details</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" 
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control as="textarea" 
                            value={address}
                            onChange = {(e) => setAddress(e.target.value)} />
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control as="textarea" rows={1}
                            value={pincode}
                            onChange = {(e) => setPincode(e.target.value)}
                            />
                            <Form.Label>City</Form.Label>
                            <Form.Control as="textarea"  rows={1}
                            value={city}
                            onChange = {(e) => setCity(e.target.value)}/>
                            <Form.Label>State</Form.Label>
                            <Form.Control as="textarea"  rows={1}
                            value={state}
                            onChange = {(e) => setState(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image of the Pothole</Form.Label>
                            <Form.Control type="file" name="testImage"
                            onChange={handleImage}  
                            />
                        </Form.Group>
                        <input type="submit" value="Upload File" />
                        {/* <button type="submit" onSubmit={handleApi}>Post</button> */}
                    </Form>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPothole;