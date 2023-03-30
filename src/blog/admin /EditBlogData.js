// import node module libraries
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Image,ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import EditBlog from './EditBlog';

const EditBlogData = () => {

    const [details, setDetails] = useState([]);

	const params = useParams()
	const postid = params.id;
    
    useEffect(() => {   
        fetch("http://localhost:9002/api/getSingleBlog/"+postid)
        .then((response)=>response.json())
        .then((newData)=>{  
            setDetails(newData)})
    }, [])
	// console.log(	details)
	// if(details.data){
	// 	console.log("here")
	// }
	return (
		<div>
			{details.data && 
			<div>
				{/* <h1>Heer {details.data.title}</h1> */}
				<EditBlog item = {details}/>
			</div>
			}
		</div>
	);


	
};

export default EditBlogData;
