// import node module libraries
import axios from 'axios';
import { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { API } from '../helper';
const ContactForm = () => {
	
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [mobile, setMobile] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault();

        axios.post(`${API}/api/addVolunteer`, {firstName, lastName, email, message, mobile})
        .then((res) => {
            toast(res.data.message)
            setFirstName("")
            setLastName("")
            setMessage("")
            setMobile("")
            setEmail("")
            // console.log(res.data.message)
        }).catch((err) => {
            console.log(err)
        })
    }

	return (
        <>
        <ToastContainer/>
		<div className="px-4 px-xl-20 py-8 py-lg-0">
			{/* form section */}
			<div id="form" className='p-5'>
				<Form>
					<Row>
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formFirstName">
								<Form.Label>
									First Name:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="text" placeholder="First Name" required 
                                value={firstName}
                                onChange={(e) => {setFirstName(e.target.value)}}
                                />
							</Form.Group>
						</Col>
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formLastName">
								<Form.Label>
									Last Name:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="text" placeholder="Last Name" required
                                value={lastName} 
                                onChange={(e) => {setLastName(e.target.value)}}/>
							</Form.Group>
						</Col>

						{/* Email */}
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Label>
									Email:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="email" placeholder="Email" required
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}} />
							</Form.Group>
						</Col>

						{/* Phone Number */}
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formFirstName">
								<Form.Label>
									Phone Number:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="number" placeholder="Phone" required
                                value={mobile}
                                onChange={(e) => {setMobile(e.target.value)}} />
							</Form.Group>
						</Col>
						
						{/* Messages */}
						<Col md={12} sm={12}>
							<Form.Group className="mb-3" controlId="formMessages">
								<Form.Label>Message:</Form.Label>
								<Form.Control as="textarea" placeholder="Messages" rows={3} 
                                value= {message}
                                onChange={(e) => {setMessage(e.target.value)}}/>
							</Form.Group>
						</Col>

						{/* button */}
						<Col md={12} sm={12}>
							<Button variant="primary" type="submit" onClick={handleSubmit}>
								Submit
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
        </>
	);
};
export default ContactForm;
