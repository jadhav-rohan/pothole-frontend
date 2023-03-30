// import node module libraries
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';


// import media files

import Asphalt from '../assets/images/png/1p.jpg';
import Highway from '../assets/images/png/2p.jpg';
import Street from '../assets/images/png/3p.jpg';


const IntroPothole = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",paddingTop: "3px", height: "25px", borderRadius:"1rem",width: "25px", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",paddingTop: "3px", height: "25px", borderRadius:"1rem",width: "25px", background: "black" }}
        onClick={onClick}
      />
    );
  }

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

  var settings = {
    dots: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
   
  };

  const [nextIcon, setNextIcon] = useState(<span className='bg-dark'></span>)
  const [prevIcon, setPrevIcon] = useState(<span className='glyphicon glyphicon-glass'></span>)
  return (
    <section className="bg-light py-lg-14 py-12 bg-cover mb-3 ">
      {/* container */}
      <Container style={{marginTop: "10%"}}>
        <Row className="align-items-center">
          <Col lg={4} sm={12}>
            <div>
              <div className="text-center text-md-start">
                {/* heading */}
                <h2 className=" display-3 fw-bold mb-3">Find & Report<span className='text-primary'> PotHoles</span> in your City, State.</h2>
                {/* lead */}
                <p className="lead">The largest network to find and report 
                <span className='text-primary'><a href = "/allPotholeCards" className='text-decoration-none'> PotHoles</a></span> in your city.</p>
              </div>
              <div className="mt-8">
                <span className=" fs-4">Currently listing {data.length} potholes from {cities.size} cities</span>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 2 }} sm={10} className="text-center">
            <div className="position-relative">
            {/* <Carousel variant="dark">
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
            </Carousel> */} 
            <div className='container w-100 p-5 rounded slick-dotted' style={{"background": "#419be0"}}>
            <Slider {...settings}>
              <div> 
                <img
                      className="d-block w-100"
                      src={Asphalt}
                      alt="First slide"
                />
              </div>
              <div>
                <img
                      className="d-block w-100"
                      src = {Street}
                      alt="Second slide"
                      
                  />
              </div>
              <div>
                <img
                      className="d-block w-100"
                      src = {Highway}
                      alt="Third slide"
                      
                />
              </div>
            </Slider>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default IntroPothole