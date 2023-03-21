import axios from "axios";
import React, { useEffect, useState } from "react";
import PotholeCard from "./PotholeCard";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";

const Display = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:9002/api/getAll")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []);

    const filteredBanglore = data && data.filter(item => {
        return (
            item.city.toLowerCase().includes("banglore") 
        )
    });
    const filteredPune = data && data.filter(item => {
        return (
            item.city.toLowerCase().includes("pune") 
        )
    });
    const filteredDelhi = data && data.filter(item => {
        return (
            item.city.toLowerCase().includes("delhi") 
        )
    });
    const filterdMumbai = data && data.filter(item => {
        return(
            item.city.toLowerCase().includes("mumbai")
        )
    })

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

                <div className="container">
                <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <h3>Banglore</h3>
                        </div>
                        <div className="col row">
                            {potholesBanglore}
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "banglore"}}>View All</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <h3>Delhi</h3>
                        </div>
                        <div className="col row">
                            {potholesDelhi}
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "delhi"}}>View All</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <h3>Mumbai</h3>
                        </div>
                        <div className="col row">
                            {potholesMumbai}
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "mumbai"}}>View All</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <h3>Pune</h3>
                        </div>
                        <div className="col row">
                            {potholesPune}
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center">
                            <Link to="/filteredPothole" state = {{from: "pune"}}>View All</Link>
                        </div>
                    </div>
                </div>
                {data.length > 8 && 
                <div className='text-center'>
                    <a className='p-3 rounded-pill btn btn-primary mt-3' href='/allPotholeCards'>VIEW ALL</a>
                </div>}
            {/* </Carousel> */}
         </div>
    )
}

export default Display;
