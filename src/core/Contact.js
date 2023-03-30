// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiGithub } from '@mdi/js';

// import BS icons
import { Telephone, EnvelopeOpen, GeoAlt } from 'react-bootstrap-icons';

// import sub components
import ContactForm from './ContactForm';
import NavBar from './NavBar';
const Contact = ({title}) => {
   const reason = title;
	return (
        <div>
        <NavBar/>
		<Container fluid className="bg-white">
			<Row className="align-items-center min-vh-100">
				<Col lg={6} md={12} sm={12}>
					<div className="px-xl-20 px-md-8 px-4 py-8 py-lg-0">
						{/* content */}
						<div className="text-dark">
							<h1 className="display-4 fw-bold text-primary">{reason}</h1>
							<p className="lead text-dark">
								Fill in the form to the right to get in touch with someone on
								our team, and we will reach out shortly.
							</p>
							<div className="mt-8">
                                {reason !== "Become a Volunteer" &&
								<p className="fs-4 mb-4">
									If you are seeking support please visit our{' '}
									<Link to="#">support portal</Link> before reaching out
									directly.
								</p>
                                }
                                {reason === "Become a Volunteer" &&
								<p className="fs-4 mb-4">
									Join our team of dedicated volunteers and make a positive impact on our community! 
                                    As a volunteer, you'll have the opportunity to help repair potholes, organize community events, 
                                    and fundraise for our cause.
								</p>
                                }
								{/* Address */}
								<p className="fs-4">
									<Telephone size={16} className="text-primary me-2" /> +
									0123-456-7890
								</p>
								<p className="fs-4">
									<EnvelopeOpen size={16} className="text-primary me-2" />{' '}
									hello@geekui.com
								</p>
								<p className="fs-4 ">
									<GeoAlt size={17} className="text-primary me-2" /> 2652 Kooter
									Lane Charlotte, NC 28263
								</p>
							</div>

							{/* social media */}
							<div className="mt-10">
								{/*Facebook*/}
								<Link to="#" className="text-muted me-3">
									<Icon path={mdiFacebook} size={1} />
								</Link>
								{/*Twitter*/}
								<Link to="#" className="text-muted me-3">
									<Icon path={mdiTwitter} size={1} />
								</Link>
								{/*GitHub*/}
								<Link to="#" className="text-muted ">
									<Icon path={mdiGithub} size={1} />
								</Link>
							</div>
						</div>
					</div>
				</Col>

				{/* right side form section with background color */}
				<Col
					lg={6}
					className="d-lg-flex align-items-center w-lg-50 min-vh-lg-100 position-fixed-lg top-0 right-0"
				>
					<ContactForm />
				</Col>
			</Row>
		</Container>
        </div>
	);
};

export default Contact;
