import React, { useState } from "react";
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import media files

import Logo from '../assets/images/brand/logo/logo-icon.svg';
import NavBar from "../core/NavBar";
import axios from "axios";
import { isAuthenticated } from "./helper/auth";
import { API } from "../helper";
const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
	
	const {user} = isAuthenticated();
	var role;
	if(user){
		role = user.role;
	}

    const login = (e) => {
		e.preventDefault();
        axios.post(`${API}/api/login`, {email, password})
        .then(res=> {
			if(res.data &&
				res.data.code >= 400 &&
				res.data.code <= 500){
					toast.error(res.data.message)
			}
			else{
				// navigate("/")
				toast.success(res.data.message, {autoClose: 2000});
				localStorage.setItem("jwt",JSON.stringify(res.data))
				localStorage.setItem("role",res.data.role)
				setEmail("")
				setPassword("")
			}	
        }).catch(err => {
			console.log(err)
		})
    }

	  const signInForm = () => {
		return(
		<>
		<ToastContainer />
		<Fragment>
				<div className="bg-light">
					<Row className="align-items-center justify-content-center g-0 min-vh-100">
						<Col lg={5} md={5} className="py-8 py-xl-0">
							<Card>
								<Card.Body className="p-6">
									<div className="mb-4">
										<Link to="/">
											<Image src={Logo} className="mb-4" alt="" />
										</Link>
										<h1 className="mb-1 fw-bold">Sign in</h1>
										<span>
											Don’t have an account?{' '}
											<Link to="/sign-up" className="ms-1">
												Sign up
											</Link>
										</span>
									</div>
									{/* Form */}
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												{/* Username or email */}
												<Form.Label>Username or email </Form.Label>
												<Form.Control
													type="email"
													id="email"
													placeholder="Email address here"
													value={email}
													onChange={(e) => setEmail(e.target.value)} />
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Password */}
												<Form.Label>Password </Form.Label>
												<Form.Control
													type="password"
													id="password"
													placeholder="**************"
													value={password}
													onChange={(e) => setPassword(e.target.value)} />
											</Col>
											<Col lg={12} md={12} className="mb-3">
												<div className="d-md-flex justify-content-between align-items-center">
													<Link to="/forget-password">
														Forgot your password?
													</Link>
												</div>
											</Col>
											<Col lg={12} md={12} className="mb-0 d-grid gap-2">
												<Button variant="primary" type="submit" onClick={login}>
													Sign in
												</Button>
											</Col>
										</Row>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</Fragment>
			</>
	
		)
	  }
    return(
        <div>
			<NavBar/>
			{signInForm()}
		</div>
    )
}

export default SignIn;