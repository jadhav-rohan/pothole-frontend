import { Link } from "react-router-dom";
import React from "react";

import {
	Image,
	Card,
	Row,
	Col,
	ListGroup,
} from 'react-bootstrap';
import "tachyons";
import 'tippy.js/animations/scale.css';

const PotholeCard = ({item, image, address, pincode, city, state}) => {
  const addr = address.slice(0, 20)
  return (

    <div className="col-md-3" style={{marginTop: "20px"}}>
    {/* <Card className=""> */}
    <div className="dib bg-white-90 b--light-silver br-2 mr3 card grow">
    <Link 
    to={`/getSinglePothole/${item._id}`}
    >
        <Image
            src={image}
            alt=""
            className="card-img-top rounded-top-md "
        />
    </Link>
    {/* Card body  */}
    <Card.Body>
        <h3 className="h6">
            <Link to="#" className="text-inherit text-decoration-none">
                 {city}
            </Link>
        </h3>
        <ListGroup as="ul" bsPrefix="list-inline" >
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
                Address: {addr}
                {/* {address.length} */}
                {address.length > 20 && " ....."}
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
{/* </Card> */}
</div> 
  );
}

export default PotholeCard;