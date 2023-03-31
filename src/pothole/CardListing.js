import axios from "axios";
import React, { useEffect, useState } from "react";
import PotholeCard from "./PotholeCard";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { API } from "../helper";


const Display = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get(`${API}/api/getAll`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []);
    console.log(data)
    function filter(c){
        return data && data.filter(item => {
            return item.city.toLowerCase().includes(c)
        })
    }

    const filteredBanglore = filter("banglore")
    const filterdMumbai = filter("mumbai")
    const filteredPune = filter("pune")
    const filteredDelhi = filter("delhi")

    // console.log(filteredPune)

    const potholesBanglore = filteredBanglore && filteredBanglore.slice(0,4).map((p,i) => (
        <PotholeCard key={i} 
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}/>
    ));

    const potholesPune = filteredPune && filteredPune.slice(0,4).map((p,i) => (
        <PotholeCard key={i} 
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}/>
    ));

    const potholesDelhi = filteredDelhi && filteredDelhi.slice(0,4).map((p,i) => (
        <PotholeCard key={i} 
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}/>
    ));

    const potholesMumbai = filterdMumbai && filterdMumbai.slice(0,4).map((p,i) => (
        <PotholeCard key={i} 
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}/>
    ));

    return (
        <div className="row" style={{marginTop: "16%"}}>
            <h2 className="text-center"><span className="text-primary">PotHoles</span> from Big Cities</h2>
                <div className="container m-5">
                <div className="row">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="mb-1 mt-1">
                                    <h3 className="mb-1 text-secondary">Potholes from <span className="text-primary">Banglore</span></h3>
                                </div>
                            </Col>
                        </Row>
                        <Col className="col row" lg={10} xs={8} xl={10} md={10}>
                            {potholesBanglore}
                        </Col>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "banglore"}}>View All</Link>
                        </div> 
                    </div>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                                <div className="mb-1 mt-5">
                                    <h3 className="mb-1 text-secondary">Potholes from <span className="text-primary">Delhi</span></h3>
                                </div>
                            </Col>
                        </Row>
                    <div className="row">
                    <Col className="col row" lg={10} xs={8} xl={10} md={10}>
                            {potholesDelhi}
                        </Col>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "delhi"}}>View All</Link>
                        </div>
                    </div>
                    <div className="row">
                    <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="mb-1 mt-5">
                                    <h3 className="mb-1 text-secondary">Potholes from <span className="text-primary">Mumbai</span></h3>
                                </div>
                            </Col>
                        </Row>
                        <Col className="col row" lg={10} xs={8} xl={10} md={10}>
                            {potholesMumbai}
                        </Col>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "mumbai"}}>View All</Link>
                        </div>
                    </div>
                    <div className="row">
                    <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="mb-1 mt-5">
                                    <h3 className="mb-1 text-secondary">Potholes from <span className="text-primary">Pune</span></h3>
                                </div>
                            </Col>
                        </Row>
                        <Col className="col row" lg={10} xs={8} xl={10} md={10}>
                            {potholesPune}
                        </Col>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "pune"}}>View All</Link>
                        </div>
                    </div>
                </div>
                {data.length > 8 && 
                <div className='text-center'>
                    <a className='pl-3 btn text-white mt-3' style={{"background": "#419be0"}} href='/allPotholeCards'>VIEW ALL</a>
                </div>}
            {/* </Carousel> */}
         </div>
    )
}

export default Display;
