// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

// import media files
import AppStore from '../assets/images/svg/appstore.svg';
import PlayStore from '../assets/images/svg/playstore.svg';

const FooterWithLinks = () => {
	return (
		// <Fragment>
		<div className='' style={{"background": "#419be0", "margin": "-20px"}}>
			<hr className='mb-0' style={{"marginTop": "10rem"}}></hr>
			<div className="footer p-5" style={{"background": "#419be0"}}>
				<Container>
					<Row>
						<Col lg={4} md={6} sm={12}>
							{/* about company  */}
							<div className="mb-4">
								{/* <Image src={FooterLogo} alt="" /> */}
								<div className="mt-4 text-white">
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
							<div className="mb-4 text-white">
								{/* list */}
								<h3 className="fw-bold mb-3">Company</h3>
								<ListGroup
									as="ul"
									bsPrefix="list-unstyled"
									className="nav nav-footer flex-column nav-x-0"
								>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/about" className="nav-link text-white">
											About
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/blog" className="nav-link text-white">
											Blogs
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/report" className="nav-link text-white">
											Report a Pothole
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/allPotholeCards" className="nav-link text-white">
											Find a Pothole
										</Link>
									</ListGroup.Item>	
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/contact" className="nav-link text-white">
											Contact
										</Link>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col lg={2} md={3} sm={6}>
							<div className="mb-4">
								{/* list  */}
								<h3 className="fw-bold mb-3 text-white">Support</h3>
								<ListGroup
									as="ul"
									bsPrefix="list-unstyled"
									className="nav nav-footer flex-column nav-x-0"
								>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link text-white">
											Help and Support
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="/becomeVolunteer" className="nav-link text-white">
											Become a Volunteer
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link text-white">
											FAQ’s
										</Link>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col lg={3} md={12} sm={12}>
							{/* contact info */}
							<div className="mb-4 text-white">
								<h3 className="fw-bold mb-3">Get in touch</h3>
								<p>Head Office
								E803,HRC Ibbani Apartment, Arkavathy Layout, Jakkur, 
								Bengaluru, Karnataka 560064</p>
								<p className="mb-1 text-white">
									Email: <Link to="#" className='text-white'>info@potholehero.org</Link>
								</p>
								<p>
									Phone:{' '}
									<span className="text-dark fw-semi-bold text-white">
										(000) 123 456 789
									</span>
								</p>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center g-0 border-top py-2 mt-6">
						{/* Desc  */}
						<Col lg={4} md={5} sm={12}>
							<span className='text-white'>© 2023 A Part of Ashama Foundation All Rights Reserved</span>
						</Col>
						{/*  Links  */}
						<Col
							lg={8}
							md={7}
							sm={12}
							className="d-md-flex justify-content-end"
						>
							<nav className="nav nav-footer">
								<Link className="nav-link ps-0 text-white" to="/privacypolicy">
									Privacy Policy
								</Link>
								{/* <Link className="nav-link px-2 px-md-3" to="#">
									Cookie Notice{' '}
								</Link> */}
								{/* <Link className="nav-link d-none d-lg-block" to="#">
									Do Not Sell My Personal Information{' '}
								</Link> */}
								{/* <Link className="nav-link text-white" to="#">
									Terms of Use
								</Link> */}
							</nav>
						</Col>
					</Row>
				</Container>
			</div>
		{/* </Fragment> */}
		</div>
	);
};

export default FooterWithLinks;
