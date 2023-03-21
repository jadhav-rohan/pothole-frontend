import { Link } from "react-router-dom";
import React from "react";

import {
	Image,
	Card,
	Row,
	Col,
	ProgressBar,
	ListGroup,
	Badge
} from 'react-bootstrap';

// import tippy tooltip
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';

const PotholeCard = ({image, email, address, pincode, city, state}) => {
  
  return (
  
    // <div className="col-md-3" style={{marginTop: "20px"}}>
    //         <div className="card">
    //             <div className="card-body">
    //                 <div className="card-img-actions"> <img src={image} className="card-img img-fluid"  alt=""/> </div>
    //             </div>
    //             <div className="card-body bg-light text-center">
    //                 <div className="mb-2">
    //                     <h2 className="font-weight-semibold mb-2">{city} </h2> <a href="#" className="text-muted" data-abc="true"></a>
    //                     <h6>Address: {address}, {state}</h6>
    //                     <h4><span className="text-primary">Pincode</span>: {pincode}</h4>
    //                 </div>
    //                 <h3 className="mb-0 font-weight-semibold"></h3>
    //                 {/* <Link to={city}><h6>Details</h6></Link> */}
    //             </div>
    //         </div>
    //   </div>

    <div className="col-md-3" style={{marginTop: "20px"}}>
    <Card className={`mb-2 card-hover`}>
    <Link to="#">
        <Image
            src={image}
            alt=""
            className="card-img-top rounded-top-md"
        />
    </Link>
    {/* Card body  */}
    <Card.Body>
        <h3 className="h4 mb-2 text-truncate-line-2 ">
            <Link to="#" className="text-inherit text-decoration-none">
                {city}
            </Link>
        </h3>
        <ListGroup as="ul" bsPrefix="list-inline" className="mb-3">
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
                Address: {address}
            </ListGroup.Item>
        </ListGroup>
        <ListGroup as="ul" bsPrefix="list-inline" className="mb-3">
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
                State: {state}
            </ListGroup.Item>
        </ListGroup>
    </Card.Body>
    <Card.Footer>
        <Row className="align-items-center g-0">
            <Col className="col ms-2">
                <span>Pincode: {pincode}</span>
            </Col>
        </Row>
    </Card.Footer>
</Card>
</div>
    
  );
}

export default PotholeCard;