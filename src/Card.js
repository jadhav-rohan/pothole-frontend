import axios from "axios";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({image, email, address, pincode, city, state}) => {
  
  return (
    <>
    <div className="col-md-3" style={{marginTop: "50px"}}>
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src={image} className="card-img img-fluid"  alt=""/> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h2 className="font-weight-semibold mb-2">{city} </h2> <a href="#" className="text-muted" data-abc="true"></a>
                        <h6>Address: {address}, {state}</h6>
                        <h3>Pincode: {pincode}</h3>
                    </div>
                    <h3 className="mb-0 font-weight-semibold"></h3>
                    <Link to={city}><h6>Details</h6></Link>
                </div>
            </div>
      </div>
      </>
  );
}

export default Card;