import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import NavBar from '../NavBar';
import BlogCard from './BlogCard';

const BlogArticleSingle = ({title, description, author, image}) => {
	return (
		<div>
			<NavBar/>
			<div className='text-center mt-4 text-uppercase font-weight-bold'>
				<h1>{title}</h1>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				<img src={image} className="rounded w-75"/>
			</div>
			<Container>
				<div className='text-center mt-4'>
					<h2>Author: {author}</h2>
				</div>
				<hr className="mt-8 mb-3" />
				<div className='float-xl-left mb-3'>
					<div>{description}</div>
				</div>
			</Container>
			<Footer/>
		</div>
	);
};

export default (BlogArticleSingle);
