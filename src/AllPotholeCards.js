import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import 'react-multi-carousel/lib/styles.css';
import NavBar from "./NavBar";
import Footer from "./Footer";

const AllPotholeCards = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:9002/api/getAll")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []);

    const potholes = data && data.map((p,i) => (
        <Card key={i} 
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}/>
    ));
    

    return (
        <div>
            <NavBar/>
            <h1 className="text-center">All Potholes Listed on the Site</h1>
         <div className="row m-3">
                {potholes}
         </div>
         <Footer/>
         </div>
        
    )
}

export default AllPotholeCards;
