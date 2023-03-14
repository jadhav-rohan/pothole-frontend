import axios from "axios";
import React, { useState }  from "react";
import Form from 'react-bootstrap/Form';
import NavBar from "../core/NavBar";

const AddBlog = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
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
            const {data} = await axios.post('http://localhost:9002/api/addBlog', {title, description, author, time, date, image})
            if (data){
                setTitle('');
                setDescription('');
                setAuthor('');
                setTime('');
                setDate('')
                setImage('');
                alert('Blog added successfully')
            }
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="">
            <NavBar/>
            <div class="container h-100 mt-5">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-10 col-md-8 col-lg-6">
                    <Form className="d-flex flex-column" onSubmit={handleApi} encType="multipart/form-data">
                    <h1>Fill the Details</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" placeholder="Title" 
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
    )
}

export default AddBlog;