import axios from "axios";
import React, { useEffect, useState } from "react";
import PotholeCard from "./PotholeCard";
import 'react-multi-carousel/lib/styles.css';
import NavBar from "../core/NavBar";
import Footer from "../core/Footer";
import { Col, Form, InputGroup } from 'react-bootstrap';
import Pagination from "./Pagination";
import { API } from "../helper";

const AllPotholeCards = () => {
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 12;

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const [data, setData] = useState([]);
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
            <h1 className="text-center">The website provides a detailed compilation of all the <span className="text-primary">PotHoles </span>
              that have been identified and listed for public awareness and safety. </h1>
            <h5 className="text-center mt-2">You Can Search <span className='text-primary'> PotHoles </span>listed in your area</h5>
            <div className="d-flex justify-content-center">
            <div className="bg-white rounded-md-pill w-25 shadow rounded-3 mb-3 mt-3">
            <div className="p-md-2 p-4">
                <Form className="row g-1">
                    <Col md={12} sm={12}>
                        <InputGroup>
                            <InputGroup.Text id="searchJob" className="bg-transparent border-0 pe-0 ps-md-3 ps-md-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search text-muted" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search City or State or Address"
                                aria-label="city"
                                aria-describedby="searchPothole"
                                className="rounded-pill border-0 ps-3 form-focus-none"
                                onChange={(e) => {setSearch(e.target.value)}}
                            />
                        </InputGroup>
                    </Col>
                    
                </Form>
            </div>
            </div>
            </div>
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
