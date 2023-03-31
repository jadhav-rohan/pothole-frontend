// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import "../index.css"
// import sub components
import BlogCard from './BlogCard';

// import data files

import axios from 'axios';
import { API } from '../helper';

const BlogSection = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`${API}/api/getAllBlogs`)
		.then((res) => setData(res.data))
		.catch((err) => console.log(err, "it has errror"))
	}, [])

	return (
		<Fragment>
			<div className="pb-8">
				<Container>
                <h4 className='mb-4 text-center'>LATEST BLOGS</h4>
					<Row className='mt-2'>
						{data.slice(0, 3).map((item, index) => (
							<Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
								<BlogCard item={item} />
							</Col>
						))}
					</Row>
                    <div className='text-center'>
                    <a className='pl-3 btn mt-3 text-white' style={{"background": "#419be0"}} href='/blog'>VIEW ALL</a>
                    </div>
				</Container>
			</div>
		</Fragment>
	);
};

export default BlogSection;
