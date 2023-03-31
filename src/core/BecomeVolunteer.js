// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'react-bootstrap';
import CTAInstructor from '../assets/images/png/5236.jpg';

const BecomeVolunteer = () => {
  return (
    <section className="p-4 rounded-5" style={{"marginBottom": "10rem", "marginTop": "5rem", "background": "#419be0"}}>
    <Container className="rounded-pill" style={{"background": "#419be0"}}>
      <Row className="align-items-center">
        <Col lg={6} xs={12} className="">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img src={CTAInstructor} alt="" className="img-fluid m-0 w-75 rounded-2 p-3"/>
            </div>
          </div>
        </Col>
        <Col lg={6} xs={0}>
          <div className="text-light p-3">
            <h2 className="text-light mb-2"> Become a<span className=''>  Volunteer</span> today</h2>
            <p className="mb-0">Join our team of dedicated volunteers and make a positive impact on our community! 
            As a volunteer, you'll have the opportunity to help repair potholes, organize community events, 
            and fundraise for our cause. </p>
            <Link to="/becomeVolunteer" className="btn btn-light mt-4">Start Contributing Today</Link>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default BecomeVolunteer