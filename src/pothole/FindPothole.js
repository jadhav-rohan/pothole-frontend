import axios from "axios";
import React, { useEffect, useState } from "react";
import PotholeCard from "./PotholeCard";
import 'react-multi-carousel/lib/styles.css';
import NavBar from "../core/NavBar";
import Footer from "../core/Footer";
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import Pagination from "./Pagination";
import { API } from "../helper";

const AllPotholeCards = () => {
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([]);
    const postPerPage = 12;

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    useEffect(() => {
        axios
        .get(`${API}/api/getAll`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []);

    const filtered = data.filter(item => {
        return (
            item.city.toLowerCase().includes(search.toLowerCase()) ||
            item.state.toLowerCase().includes(search.toLowerCase()) ||
            item.address.toLowerCase().includes(search.toLowerCase()) ||
            item.pincode.toLowerCase().includes(search.toLowerCase())
        )
    });
    
    var f = filtered.slice(firstPostIndex, lastPostIndex);


    const potholes = f.length > 0 && f.map((p, i) => (
        <PotholeCard 
        key={i}
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}
        />
    ));

    return (
        <div>
            
            <NavBar/>
            <div className="bg-light p-4">
            <Col lg={8} md={10} xs={12}>
                <div>
                <div className="mb-4">
                    <h1 className=" fw-bold mb-4">You can search <span className="text-primary">PotHoles </span>here</h1>
                </div>
            <div className="bg-white rounded-md-pill shadow rounded-3 mb-4 w-100">
            <div className="p-md-2 p-4">
                <Form className="row g-1">
                    <Col md={3} sm={12}>
                        {/* input group job title */}
                        <InputGroup>
                            <InputGroup.Text id="searchJob" className="bg-transparent border-0 pe-0 ps-md-3 ps-md-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search text-muted" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search City"
                                aria-label="Search City"
                                aria-describedby="searchCity"
                                className="rounded-pill border-0 ps-3 form-focus-none"
                                onChange={(e) => {setSearch(e.target.value)}}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={3} sm={12}>
                        {/* input group job title */}
                        <InputGroup>
                            <InputGroup.Text id="searchJob" className="bg-transparent border-0 pe-0 ps-md-3 ps-md-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search text-muted" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search State"
                                aria-label="Search State"
                                aria-describedby="serachState"
                                className="rounded-pill border-0 ps-3 form-focus-none"
                                onChange={(e) => {setSearch(e.target.value)}}
                            />
                        </InputGroup>
                    </Col>
                   
                    <Col md={4} sm={12} >
                        {/* input group location */}
                        <InputGroup>
                            <InputGroup.Text id="location" className="bg-transparent border-0 pe-0 ps-md-3 ps-md-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt  text-muted" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search Address or Pincode"
                                aria-describedby="location"
                                className="rounded-pill border-0 ps-3 form-focus-none"
                                onChange={(e) => {setSearch(e.target.value)}}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={2} sm={12} className="text-end d-grid">
                        {/* button */}
                        <Button type="submit" className="rounded-pill">Search</Button>
                    </Col>
                </Form>
            </div>
        </div>
        </div>
        </Col>
        {/* </div> */}
            <div className="row m-3">
                {potholes}
                <Pagination
                totalPosts={data.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                />
            </div>
            </div>
         <Footer/>
         </div>
        
    )
}

export default AllPotholeCards;
