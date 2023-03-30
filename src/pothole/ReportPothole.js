import axios from "axios";
import React, { useEffect, useState }  from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { isAuthenticated } from "../authentication/helper/auth";
import NavBar from "../core/NavBar";
import { Country, State, City }  from 'country-state-city';
import Select from "react-select";
const ReportPothole = () => {

    // const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [stateToUpload, setStateToUpload] = useState("")
    const [cityToUpload, setCityToUpload] = useState("")
    const [image, setImage] = useState("")
    // console.log(image);
    const navigate = useNavigate();
    const role = localStorage.getItem("role")
    const user = isAuthenticated();
    // console.log(user);
    useEffect(() => {
      if(!role){
        navigate("/sign-in")
      }
    }, [])
    
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
    const email = user.email;
    const handleApi = async (e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post('http://localhost:9002/api/addPothole', {email, address, pincode, city, state, image})
            if (data){
                // setEmail('');
                setAddress('');
                setPincode('');
                setCity('');
                setState('')
                setImage('');
                toast.success('Product created Successfully!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleSubmitState = (selectedOption) => {
        setStateToUpload(selectedOption)
        setState(selectedOption.name)
    }
    
    const handleSubmitCity = (selectedOption) => {
        setCityToUpload(selectedOption)
        setCity(selectedOption.name)
    }
    
    const updatedStates = (countryId) =>
      State
        .getStatesOfCountry("IN")
        .map((state) => ({ label: state.name, value: state.id, ...state }));
    
    const updatedCities = (stateId) =>
      City
        .getCitiesOfState("IN", stateId)
        .map((city) => ({ label: city.name, value: city.id, ...city }));

    return(
        <>
        <ToastContainer/>
        <div>
            <NavBar/>
            <div className="h-100 p-5 bg-light">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                    <Form className="d-flex flex-column" onSubmit={handleApi} encType="multipart/form-data">
                    <h1>Fill the Details</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control as="textarea" 
                            value={address}
                            onChange = {(e) => setAddress(e.target.value)} />
                            <Form.Label>State</Form.Label>
                            <Select
                                id="state"
                                name="state"
                                options={updatedStates()}
                                value={stateToUpload}
                                onChange={handleSubmitState}
                            />
                            <Form.Label>City</Form.Label>
                            <Select
                                id="city"
                                name="city"
                                options={updatedCities(stateToUpload.isoCode)}
                                value={cityToUpload}
                                onChange={handleSubmitCity}
                            />
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control as="textarea" rows={1}
                            value={pincode}
                            onChange = {(e) => setPincode(e.target.value)}
                            />
                           
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image of the Pothole</Form.Label>
                            <Form.Control type="file" name="testImage"
                            onChange={handleImage}  
                            />
                        </Form.Group>
                        
                       
                       
                        <input className="btn btn-primary" type="submit" value="Submit Details" />
                    </Form>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}


export default ReportPothole;