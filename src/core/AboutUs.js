import React from 'react'
import { Col, Row } from 'react-bootstrap';
import NavBar from './NavBar';


const AboutUs = () => {
  return (
		<div>
            <NavBar/>
            <Row className='bg-light'>
                <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} className="mb-12 mt-5">
                    {/* caption */}
                    <h1 className="display-2 fw-bold mb-3">
                        Hi there, we’re <span className="text-primary">PotHole Hero</span>
                    </h1>
                    {/* para  */}
                    <h2 className='text-primary'>About Us</h2>
                    <p className="h5 mb-3">
                    Our team of dedicated professionals includes trained technicians, 
                    engineers, and customer service representatives who work together to 
                    provide fast and efficient pothole repair services. We use the latest 
                    equipment and materials to ensure that our repairs are long-lasting and 
                    effective.
                    </p>
                    <p className="mb-0 h4 text-body lh-lg">
                        <h2 className='text-primary'>Our Mission</h2>
                        <div className='h5'>
                            <li>
                            Our mission is to provide safe and well-maintained roads by 
                            repairing potholes efficiently and effectively.
                            </li>
                            <li>
                            Our mission is to make it easy for citizens to report potholes 
                            and track the progress of repairs, ensuring transparent and 
                            accountable road maintenance.
                            </li>
                        </div>
                    </p>
                    <p className="mb-0 h4 text-body lh-lg">
                        <h2 className='text-primary'>Our Terget</h2>
                        <div className='h5'>
                            <li>Our target is to reduce the number of potholes on the
                            roads by 50% within the next year.
                            </li>
                            <li>We aim to respond to pothole reports within 24 hours and 
                            complete repairs within 72 hours.
                            </li>
                        </div>
                    </p>
                </Col>
            </Row>
        </div>
	);
};

export default AboutUs;