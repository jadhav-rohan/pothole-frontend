// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
// import media files
import CTAInstructor from '../assets/images/png/5236.jpg';
import { useState } from 'react';
import axios from 'axios';

const BecomeVolunteer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();

      axios.post("http://localhost:9002/api/addVolunteer", {name, email, mobile})
      .then((res) => {
        console.log(res);
        alert(res.data.message)
      })
  }

  return (
    <section className="mb-8 mt-5">
    <Container className="rounded-4 bg-light">
      <Row className="align-items-center">
        <Col lg={6} xs={12} className="">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img src={CTAInstructor} alt="" className="img-fluid m-0 w-75"/>
              <div className="position-absolute bottom-0 start-0 mb-1">
                {/* <img src={Dollor} alt=""/> */}
              </div>
              <div className="me-n4 position-absolute top-0 end-0">
                {/* <img src={Graph} alt=""/> */}
              </div>
            </div>
          </div>
        </Col>
        <Col lg={5} xs={12}>
          <div className="text-dark p-3">
            <h2 className="h1 text-dark"> Become a<span className='text-primary'>  Volunteer</span> today</h2>
            <p className="mb-0">Instructors from around the world teach millions of students on Geeks. We provide the tools
              and skills to teach what you love.</p>
            <Link to="#" className="btn btn-primary mt-4 " onClick={handleShow}>Start Contributing Today</Link>
            
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Become a Volunteer</Modal.Title>
              </Modal.Header>
              <Modal.Body className='bg-light'>We'll get in touch with you soon!
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" 
                  class="form-control" 
                  id="name" 
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" 
                  class="form-control" 
                  id="email" 
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="number">Contact Number</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  id="number" 
                  placeholder='Enter number'
                  onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
              </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        </Col>
      </Row>
    </Container>
    <hr className="mt-8 mb-3" />
  </section>
  )
}

export default BecomeVolunteer