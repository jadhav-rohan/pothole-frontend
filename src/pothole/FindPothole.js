// import node module libraries
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// import media files

import Asphalt from '../assets/images/png/asphalt.png';
import Highway from '../assets/images/png/highway.png';
import Street from '../assets/images/png/street.png';


const FindPothole = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
      axios
      .get("http://localhost:9002/api/getAll")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  const cities = new Set();
  const newData = [...data.map((p, i) => {
    cities.add(p.city);
  })]
  
  return (
    <section className="bg-light py-lg-14 py-12 bg-cover mb-3 ">
      {/* container */}
      <Container style={{marginTop: "10%"}}>
        <Row className="align-items-center">
          <Col lg={6} sm={12}>
            <div>
              <div className="text-center text-md-start">
                {/* heading */}
                <h1 className=" display-2 fw-bold  mb-3">Find & Report<span className='text-primary'> PotHoles</span> in your City, State.</h1>
                {/* lead */}
                <p className="lead">The largest network to find and report 
                <span className='text-primary'><a href = "/allPotholeCards" className='text-decoration-none'> PotHoles</a></span> in your city.</p>
              </div>
              <div className="mt-8">
                <span className=" fs-4">Currently listing {data.length} potholes from {cities.size} cities</span>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 1 }} sm={12} className="text-center">
            <div className="position-relative">
            <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Asphalt}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src = {Street}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src = {Highway}
                    alt="Third slide"
                  />
                </Carousel.Item>
            </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FindPothole