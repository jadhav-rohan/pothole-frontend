// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

// import media files
import AppStore from '../assets/images/svg/appstore.svg';
import PlayStore from '../assets/images/svg/playstore.svg';

const FooterWithLinks = () => {
	return (
		<Fragment className= "bg-white">
			{/*  footer */}
            
			<section className="p-2 footer bg-white" style={{"marginTop": "10rem"}}>
				<Container>
					<Row>
						<Col lg={4} md={6} sm={12}>
							{/* about company  */}
							<div className="mb-4">
								{/* <Image src={FooterLogo} alt="" /> */}
								<div className="mt-4">
									<p>
                                    Welcome to our pothole repairing website! We provide a range of services related to pothole 
                                    repair and maintenance for roads and other paved surfaces. Our website offers information on the 
                                    causes of potholes, methods of repair, and the services we offer. 
                                    Contact us today to learn how we can help keep your roads and surfaces safe and well-maintained..
									</p>
									{/* social media */}
									<div className="fs-4 mt-4">
										<Link to="#" className="mdi mdi-facebook text-muted me-2">
											{/* <Icon size={0.7} /> */}
										</Link>
										<Link to="#" className="mdi mdi-twitter text-muted me-2">
											{/* <Icon path={} size={0.7} /> */}
										</Link>
										<Link to="#" className="mdi mdi-instagram text-muted ">
											{/* <Icon path={} size={0.7} /> */}
										</Link>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
							<div className="mb-4">
								{/* list */}
								<h3 className="fw-bold mb-3">Company</h3>
								<ListGroup
									as="ul"
									bsPrefix="list-unstyled"
									className="nav nav-footer flex-column nav-x-0"
								>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/about" className="nav-link">
											About
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/blog" className="nav-link">
											Blogs
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Contact
										</Link>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col lg={2} md={3} sm={6}>
							<div className="mb-4">
								{/* list  */}
								<h3 className="fw-bold mb-3">Support</h3>
								<ListGroup
									as="ul"
									bsPrefix="list-unstyled"
									className="nav nav-footer flex-column nav-x-0"
								>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Help and Support
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/becomeVolunteer" className="nav-link">
											Become a Volunteer
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											FAQ’s
										</Link>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col lg={3} md={12} sm={12}>
							{/* contact info */}
							<div className="mb-4">
								<h3 className="fw-bold mb-3">Get in touch</h3>
								<p>339 McDermott Points Hettingerhaven, NV 15283</p>
								<p className="mb-1">
									Email: <Link to="#">support@geeksui.com</Link>
								</p>
								<p>
									Phone:{' '}
									<span className="text-dark fw-semi-bold">
										(000) 123 456 789
									</span>
								</p>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center g-0 border-top py-2 mt-6">
						{/* Desc  */}
						<Col lg={4} md={5} sm={12}>
							<span>© 2023 PotHole Hero PVT LTD All Rights Reserved</span>
						</Col>
						{/*  Links  */}
						<Col
							lg={8}
							md={7}
							sm={12}
							className="d-md-flex justify-content-end"
						>
							<nav className="nav nav-footer">
								<Link className="nav-link ps-0" to="#">
									Privacy Policy
								</Link>
								{/* <Link className="nav-link px-2 px-md-3" to="#">
									Cookie Notice{' '}
								</Link> */}
								{/* <Link className="nav-link d-none d-lg-block" to="#">
									Do Not Sell My Personal Information{' '}
								</Link> */}
								<Link className="nav-link" to="#">
									Terms of Use
								</Link>
							</nav>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default FooterWithLinks;
