import React, { useState } from "react";
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import media files
import Logo from '../assets/images/brand/logo/logo-icon.svg';
import NavBar from "../core/NavBar";
import axios from "axios";
import { isAuthenticated } from "./helper/auth";
const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
	
	const {user} = isAuthenticated();
	var role;
	// console.log(user)
	if(user){
		role = user.role;
	}

    const login = (e) => {
		e.preventDefault();
        axios.post("http://localhost:9002/api/login", {email, password})
        .then(res=> {
			// if(res.data){
			// 	console.log(res.data.error)
			// }
			// if(res.data.code === 400){
			// 	toast.error("Password does not match!");
			// }
			// else if(res.data.code === 404){
			// 	toast.error("User not registered!")
			// }
			if(res.data &&
				res.data.code >= 400 &&
				res.data.code <= 500){
					// console.log("first")
					// console.log(res)
					toast.error(res.data.message)
			}
			else{
				// navigate("/")
				toast.success(res.data.message);
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
												{/* Checkbox */}
												<div className="d-md-flex justify-content-between align-items-center">
													{/* <Form.Group
        className="mb-3 mb-md-0"
        controlId="formBasicCheckbox"
    >
    <Form.Check type="checkbox" label="Remember me" />
    </Form.Group> */}
													<Link to="/forget-password">
														Forgot your password?
													</Link>
												</div>
											</Col>
											<Col lg={12} md={12} className="mb-0 d-grid gap-2">
												{/* Button */}
												<Button variant="primary" type="submit" onClick={login}>
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
			</Fragment></>
	
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