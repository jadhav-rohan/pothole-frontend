import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from "../helper";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

import {
	Image,
	Card,
	Row,
	Col,
	ListGroup,
} from 'react-bootstrap';
import "tachyons";
import 'tippy.js/animations/scale.css';
import NavBar from '../core/NavBar';
const SinglePothole = () => {
    const [data, setData] = useState("")
    const params = useParams();
    const postid = params.id;

    useEffect(() => {
        axios.get(`${API}/api/getSinglePothole/`+postid)
        .then((newData) =>{ 
        setData(newData)
        // console.log("single pothole: ",newData);
    })
    }, [])

    
    var address, city, pincode, state, image, lat, lng;
    if(data && data.data && data.data.data){
      image = data.data.data.image.url;
      address = data.data.data.address;
      city = data.data.data.city;
      pincode = data.data.data.pincode;
      state = data.data.data.state;
      lat = data.data.data.latitude;
      lng = data.data.data.longitude;
    }

    // console.log(lat, lng)
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`
    })
    
   
  return (
    <>
    <NavBar/>
    <div className=' d-flex justify-content-center'>
    <div className="col-md-3" style={{marginTop: "20px"}}>
      <div className="dib bg-white-90 b--light-silver br-2 mr3 card grow">
          <Image
              src={image}
              alt=""
              className="card-img-top rounded-top-md "
          />
          <Card.Body>
              <h3 className="h6">
                  <Link to="#" className="text-inherit text-decoration-none">
                      {city}
                  </Link>
              </h3>
              <ListGroup as="ul" bsPrefix="list-inline" >
                  <ListGroup.Item as="li" bsPrefix="list-inline-item">
                      Address: {address}
                      {/* {address.length} */}
                      
                  </ListGroup.Item>
              </ListGroup>
              <ListGroup as="ul" bsPrefix="list-inline" className="mb-2">
                  <ListGroup.Item as="li" bsPrefix="list-inline-item">
                      State: {state}
                  </ListGroup.Item>
              </ListGroup>
          </Card.Body>
          <Card.Footer>
              <Row className="align-items-center g-0 ml-2 mb-2">
                  <Col className="col ms-2">
                      <span>Pincode: {pincode}</span>
                  </Col>
              </Row>
          </Card.Footer>
      </div>
    </div> 
    </div>
    <div className='text-center mt-5'>
        <h3 className='text-primary'>Get Directions</h3>
        <iframe id='iframeId' className='w-50 rounded border border-primary'></iframe>
    </div>
    </>
  )
}

export default SinglePothole;