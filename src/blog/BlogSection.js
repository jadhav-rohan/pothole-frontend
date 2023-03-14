// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

// import sub components
import BlogCard from './BlogCard';

// import data files

import axios from 'axios';

const BlogSection = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:9002/api/getAllBlogs")
		.then((res) => setData(res.data))
		.catch((err) => console.log(err, "it has errror"))
	}, [])

	return (
		<Fragment>
			<div className="pb-8">
				<Container>
                <h1 className='mb-3 text-center'>Latest Blogs</h1>
					<Row className='mt-2'>
						{/* Show remaining articles in 3 column width  */}
						{data.slice(0, 3).map((item, index) => (
							<Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
								<BlogCard item={item} />
							</Col>
						))}
					</Row>
                    <div className='text-center'>
                    <a className='p-3 rounded-pill btn btn-primary' href='/blog'>VIEW ALL</a>
                    </div>
				</Container>
			</div>
		</Fragment>
	);
};

export default BlogSection;
