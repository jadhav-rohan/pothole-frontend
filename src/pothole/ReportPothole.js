import axios from "axios";
import React, { useEffect, useState }  from "react";
import { Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { isAuthenticated } from "../authentication/helper/auth";
import NavBar from "../core/NavBar";
import { API } from "../helper";

const ReportPothole = () => {
    
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [language, setLanguage] = useState('en');
  const [street, setStreet] = useState("")
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [location, setLocation] = useState("");
  const [subLocality, setSubLocality] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  //Validate if user is logged in or not
  const navigate = useNavigate();
  const role = localStorage.getItem("role")
  const user = isAuthenticated();
  const email = user.email;
  
  useEffect(() => {
    if(!role){
      navigate("/sign-in")
    }
  }, [])
  //*************************/

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(pos) {
          var longitude = pos.coords.longitude
          var latitude = pos.coords.latitude
          const acc = pos.coords.accuracy
          setLat(latitude)
          setLng(longitude)
          console.log(longitude, latitude)
    })
  }, [lat, lng])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
      params: { location: `${lat},${lng}`, language },
      headers: {
        'X-RapidAPI-Key': 'e7f376a8b1msh7cb0ab0ac6c7a84p19ce4ejsn86ca620bbfd7',
        'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
      }
    };
    setLoading(true);
    axios.request(options)
      .then(function (response) {
        setAddress(response.data.results[0].address);
        setCity(response.data.results[0].locality)
        setState(response.data.results[0].region)
        setPincode(response.data.results[0].postal_code)
        setStreet(response.data.results[0].street)
        setSubLocality(response.data.results[0].sublocality)
        console.log(response.data.results[0])
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [lat, lng, language]);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        console.log("first")
    }

    console.log(address)

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }
    
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
        setSubmitting(true);
        try {
            const {data} = await axios.post(`${API}/api/addPothole`, {email, address, pincode, city, state, image, street, lat, lng, subLocality})
            if (data){
                // setEmail('');
                setAddress('');
                setPincode('');
                setCity('');
                setState('')
                setImage('');
                toast.success('Product created Successfully!')
                setSubmitting(false);
            }
        } catch (error) {
            console.log(error)
        }
    }
   
    return(
        <>
        <ToastContainer/>
        <div>
            <NavBar/>
            {loading ? 
                <div className="text-center mt-5  text-primary">
                    <div className="m-5 p-5 h2">Detecting Location 📍</div>
                    <Spinner/>
                </div> : 
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
                            <Form.Control
                                id="state"
                                name="state"
                                // options={updatedStates()}
                                value={state}
                                required
                                onChange={(e) => setState(e.target.value)}
                            />
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                id="city"
                                name="city"
                                // options={updatedCities(stateToUpload.isoCode)}
                                value={city}
                                required
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control as="textarea" rows={1}
                            value={pincode}
                            required
                            onChange = {(e) => setPincode(e.target.value)}
                            />
                           
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image of the Pothole</Form.Label>
                            <Form.Control 
                            required
                            type="file" name="testImage"
                            onChange={handleImage}  
                            />
                        </Form.Group>
                        
                       
                
                        <button className="btn btn-primary" type="submit">
                            {!submitting ? "Submit" : <Spinner />}
                        </button>
                    </Form>
                    </div>
                </div>
            </div>
        }
        </div>
    
        </>
        
    )
}


export default ReportPothole;