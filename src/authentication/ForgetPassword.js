// import node module libraries
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';

// import media files
import Logo from '../assets/images/brand/logo/logo-icon.svg';
import axios from 'axios';
import NavBar from '../core/NavBar';

const ForgetPassword = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9002/api/forget-password", {email} ).then((res) => {
            alert(res.data.msg)
            console.log(res);
        }).catch((error) => {
            alert(error)
        })
        
    }

	return (
		<Fragment>
			<NavBar/>
			<div className='bg-light'>
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card>
						<Card.Body className="p-6">
							<div className="mb-4">
								<Link to="/">
									<Image src={Logo} className="mb-4" alt="" />
								</Link>
								<h1 className="mb-1 fw-bold">Forgot Password</h1>
								<span>Fill the form to reset your password.</span>
							</div>
							{/* Form */}
							<Form>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/*  email */}
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											id="email"
											placeholder="Enter your email"
											required
                                            onChange={(e) => setEmail(e.target.value)}
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3 d-grid gap-2">
										{/* Button */}
										<Button variant="primary" type="submit" onClick={handleSubmit}>
											Send Reset Link
										</Button>
									</Col>
								</Row>
								<span>
									Return to <Link to="/sign-in">Sign in</Link>
								</span>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			</div>
		</Fragment>
	);
};

export default ForgetPassword;
