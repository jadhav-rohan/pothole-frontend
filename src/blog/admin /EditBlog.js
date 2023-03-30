import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../../core/NavBar";

const EditBlog = ({item}) => {
    const navigate = useNavigate()
        // useEffect(() => {
        //     if(localStorage.getItem("role") !== "94227"){
        //         navigate("/sign-in")
        //     } 
        // }, [])

    const [details, setDetails] = useState("")
    const params = useParams()
	const postid = params.id;
    // console.log(postid)
    useEffect(() => {   
        fetch("http://localhost:9002/api/getSingleBlog/"+postid)
        .then((response)=>response.json())
        .then((newData)=>{  
            setDetails(newData)})
    }, [])
    
    const [title, setTitle] = useState(item.data.title)
    const [description, setDescription] = useState(item.data.description)
    const [author, setAuthor] = useState(item.data.author)
    const [time, setTime] = useState(item.data.time)
    const [date, setDate] = useState(item.data.date)
    const [image, setImage] = useState("")      
    

    function handleImage(e){
        const file = e.target.files[0];
        TransformFile(file)
    }

    const TransformFile = (file) => {
    const render = new FileReader();

    if(file){
        render.readAsDataURL(file)
        render.onloadend = () => {
            setImage(render.result)
        }
    }else{
        setImage("")
    }
    }

    const handleApi = async (e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.put(`http://localhost:9002/api/${postid}`, {title, description, author, time, date, image})
            if (data){
                toast.success("Blog Edited Succesfully!");
            }
            // console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(image)   
  return (
    <>
        <ToastContainer/>
        <div className="bg-light">
            <NavBar/>
            <div className="container h-100 mt-5">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                    <Form className="d-flex flex-column" onSubmit={handleApi} encType="multipart/form-data">
                    <h1>Fill the Details</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text"
                            value={title}
                            onChange = {(e) => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" 
                            value={description}
                            onChange = {(e) => setDescription(e.target.value)} />
                            <Form.Label>Author</Form.Label>
                            <Form.Control as="textarea" rows={1}
                            value={author}
                            onChange = {(e) => setAuthor(e.target.value)}
                            />
                            <Form.Label>Date</Form.Label>
                            <Form.Control as="textarea"  rows={1}
                            value={date}
                            onChange = {(e) => setDate(e.target.value)}/>
                            <Form.Label>Time Required</Form.Label>
                            <Form.Control as="textarea"  rows={1}
                            value={time}
                            onChange = {(e) => setTime(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Blog Image</Form.Label>
                            <Form.Control type="file" name="testImage"
                            onChange={handleImage}  
                            />
                        </Form.Group>
                        <input className="btn btn-primary" type="submit" value="Upload File" />
                    </Form>
                    </div>
                </div>
            </div>
        </div> 
        </>
  );
};

export default EditBlog;