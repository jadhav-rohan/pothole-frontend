import React, { useState } from "react";
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

import axios from "axios"
// import media files
import Logo from '../assets/images/brand/logo/logo-icon.svg';
import NavBar from "../core/NavBar";
const SignUp = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
		e.preventDefault();
        if( name && email && password){
				axios.post("http://localhost:9002/api/signup", {name, email, password})
				.then((res) => {
					// console.log(res.data.message)
					alert(res.data.message)
					navigate("/sign-in")
				})
        	}
        }

    return(
        <Fragment>
            <NavBar/>
			<div className="bg-light">
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card>
						<Card.Body className="p-6">
							<div className="mb-4">
								<Link to="/">
									<Image src={Logo} className="mb-4" alt="" />
								</Link>
								<h1 className="mb-1 fw-bold">Sign up</h1>
								<span>
									Already have an account?{' '}
									<Link to="/sign-in" className="ms-1">
										Sign in
									</Link>
								</span>
							</div>
							{/* Form */}
							<Form>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/* User Name */}
										<Form.Label>User Name</Form.Label>
										<Form.Control
											type="text"
											// id="username"
											placeholder="User Name"
											value={name}
                                            onChange={(e) => setName(e.target.value)}
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* email */}
										<Form.Label>Email </Form.Label>
										<Form.Control
											type="email"
											// id="email"
											placeholder="Email address here"
											value={email}
                                            onChange = {(e) => setEmail(e.target.value)}
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Password */}
										<Form.Label>Password </Form.Label>
										<Form.Control
											type="password"
											// id="password"
											placeholder="**************"
											value={password}
                                            onChange={(e) => setPassword(e.target.value)}
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Checkbox */}
										{/* <Form.Check type="checkbox" id="check-api-checkbox">
											<Form.Check.Input type="checkbox" />
											<Form.Check.Label>
												I agree to the
												<Link to="/pages/terms-and-conditions">
													Terms of Service{' '}
												</Link>{' '}
												and{' '}
												<Link to="/pages/terms-and-conditions">
													Privacy Policy.
												</Link>
											</Form.Check.Label>
										</Form.Check> */}
									</Col>
									<Col lg={12} md={12} className="mb-0 d-grid gap-2">
										{/* Button */}
										
										<Button variant="primary" type="submit" onClick={register}>
											Sign in
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
							<div className="mt-4 text-center">
								{/* Facebook */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-facebook"
								>
									<i className="fab fa-facebook"></i>
								</Link>{' '}
								{/* Twitter */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-twitter"
								>
									<i className="fab fa-twitter"></i>
								</Link>{' '}
								{/* LinkedIn */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-linkedin"
								>
									<i className="fab fa-linkedin"></i>
								</Link>{' '}
								{/* GitHub */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-github"
								>
									<i className="fab fa-github"></i>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			</div>
		</Fragment>
    )
}

export default SignUp;