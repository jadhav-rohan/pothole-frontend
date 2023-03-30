// import node module libraries
import React from 'react';
import { Card, Row, Col, Image,ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ item }) => {
	const role = localStorage.getItem("role");
	// console.log(role)
	const desc = item.description.slice(0, 200);
	return (
		<div>
			{
			role !== "94227" && 
			<Card className="mb-4 shadow-lg">
			<Link to={`/blog/article-single/${item._id}`}>
				<Card.Img
					variant="top"
					src={item.image.url}
					className="rounded-top-md img-fluid"
				/>
			</Link>
			{/* Card body  */}
			<Card.Body>	
				<h3>
					<Link
						to={`/blog/article-single/${item._id}`}
						className="text-inherit text-decoration-none text-dark"
					>
						{item.title}
					</Link>
				</h3>
				<div>
				<p> {desc} </p>
				</div>
				{/*  Media content  */}
				<Row className="align-items-center g-0 mt-4">
					<Col className="col lh-1">
						<h5 className="mb-1">{item.author}</h5>
						<p className="fs-6 mb-0">{item.date}</p>
					</Col>
					<Col className="col-auto">
						<p className="fs-6 mb-0">{item.time} Min Read</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
		}
		{role === "94227" && 
		<Card className="mb-4 shadow-lg">
			<Link to={`/blog/article-single/edit/${item._id}`}>
				<Card.Img
					variant="top"
					src={item.image.url}
					className="rounded-top-md img-fluid"
				/>
			</Link>
			{/* Card body  */}
			<Card.Body>	
				<h3>
					<Link
						to={`/blog/article-single/edit/${item._id}`}
						className="text-inherit text-decoration-none text-dark"
					>
						{item.title}
					</Link>
				</h3>
				<p> {desc} </p>
				{/*  Media content  */}
				<Row className="align-items-center g-0 mt-4">
					<Col className="col lh-1">
						<h5 className="mb-1">{item.author}</h5>
						<p className="fs-6 mb-0">{item.date}</p>
					</Col>
					<Col className="col-auto">
						<p className="fs-6 mb-0">{item.time} Min Read</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>}
		
		</div>
	);

	
};

// Typechecking With PropTypes
BlogCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default BlogCard;
