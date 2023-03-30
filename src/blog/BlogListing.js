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
import { isAuthenticated } from '../authentication/helper/auth';

const BlogListing = () => {
	const [data, setData] = useState([]);
	const role = localStorage.getItem("role");
	useEffect(() => {
		axios.get("http://localhost:9002/api/getAllBlogs")
		.then((res) => setData(res.data))
		.catch((err) => console.log(err, "it has errror"))
	}, [])

	useEffect(() => {
		if(localStorage.getItem("role") === "0"){
			
		} 
	}, [])
	
	
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
								<h2 className="display-2 fw-bold">Blogs <span className='text-primary'>Newsroom</span></h2>
								{role !== "94227" && <p className="lead">
									Here you can find informative Blogs related to <span className='text-primary'>PotHoles</span>
								</p>
								}
								{role === "94227" && <p className="lead">
									Tap on the Blog Card to Edit the Blog
								</p>}
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			{/* Content */}
			<div className="pb-8 bg-white">
				<Container>
					<Row>
						{data.slice(0, 1).map((item, index) => (
								<Col xl={12} lg={12} md={12} sm={12} key={index} className="d-flex">
									<BlogCardFullWidth item={item} />
								</Col>
						))}
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
