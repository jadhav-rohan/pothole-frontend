// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Form, Button, Nav } from 'react-bootstrap';


// import sub components
import BlogCard from './BlogCard';
import BlogCardFullWidth from './BlogCardFullWidth';

// import data files

import NavBar from '../core/NavBar';
import Footer from '../core/Footer';
import axios from 'axios';
import BlogSection from './BlogSection';

const BlogListing = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:9002/api/getAllBlogs")
		.then((res) => setData(res.data))
		.catch((err) => console.log(err, "it has errror"))
	}, [])

	// const blogs = data && data.map((p, i) => {
	// 	<BlogCard key = {i}
	// 	image = {p.image.url}
	// 	title = {p.title}
	// 	author = {p.author}
	// 	description = {p.description}
	// 	date = {p.date}
	// 	time = {p.time}
	// 	/>
	// })
	
	return (
		<Fragment>
			{/* Page header */}
            <NavBar/>
			<div className="pt-9 pb-9 bg-light p-4">
				<Container>
					<Row>
						<Col
							lg={{ span: 10, offset: 1 }}
							xl={{ span: 8, offset: 2 }}
							md={12}
							sm={12}
						>
							<div className="text-center mb-5">
								<h1 className="display-2 fw-bold">Blogs Newsroom</h1>
								<p className="lead">
									Our features, journey, tips and us being us. Lorem ipsum dolor
									sit amet, accumsan in, tempor dictum neque.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			{/* Content */}
			<div className="pb-8 bg-white">
				

				<Container>
					<Row>
						{/* Show first article in full width  */}
						{/* {data.filter(function (dataSource) {
							return dataSource.id === 1;
						}).map((item, index) => (
							<Col xl={12} lg={12} md={12} sm={12} key={index}>
								<BlogCardFullWidth item={item} />
							</Col>
						))} */}

						{data.slice(0, 1).map((item, index) => (
								<Col xl={12} lg={12} md={12} sm={12} key={index} className="d-flex">
									<BlogCardFullWidth item={item} />
								</Col>
						))}

						{/* Show remaining articles in 3 column width  */} 
							{data.slice(1, 10).map((item, index) => (
								<Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
									<BlogCard item={item} />
								</Col>
						))}


					</Row>
				</Container>
			</div>
            <Footer/>
		</Fragment>
	);
};

export default BlogListing;
