import axios from "axios";
import React, { useState }  from "react";
import Form from 'react-bootstrap/Form';
import NavBar from "../core/NavBar";

const ReportPothole = () => {

    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [image, setImage] = useState("")
    console.log(image);
    function handleImage(e){
        const file = e.target.files[0];
        TransformFile(file)
    }

    const TransformFile = (file) => {
        const render = new FileReader();

        if(file){
            render.readAsDataURL(file)
            render.onloadend = () => {
                setImage(render.result)
            }
        }else{
            setImage("")
        }
    }

    const handleApi = async (e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post('http://localhost:9002/api/addPothole', {email, address, pincode, city, state, image})
            if (data){
                setEmail('');
                setAddress('');
                setPincode('');
                setCity('');
                setState('')
                setImage('');
                alert('product created successfully')
            }
            console.log(data);
        } catch (error) {
            console.log(error)
        }
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
                        <input className="btn btn-primary" type="submit" value="Upload File" />
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPothole;