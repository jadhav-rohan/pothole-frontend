import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogArticleSingle from './BlogArticleSingle'

const Data = () => {
  const [details, setDetails] = useState([])
	const params = useParams()
	const postid = params.id;

  useEffect(() => {
		fetch("http://localhost:9002/api/getSingleBlog/"+postid)
		.then((response)=>response.json())
		.then((newData)=>{
			console.log(newData.data);
			setDetails(newData)})
	}, [])
    
    const blog = details.data && 
    <BlogArticleSingle 
        image={details.data.image.url} 
        title={details.data.title}
        author={details.data.author} 
        description={details.data.description} 
    />
    

  return (
    <div>
        {blog}
    </div>
  )
}

export default Data