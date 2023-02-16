import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Display = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:9002/api/getAll")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []);
    
    if(data){
        console.log(data[0]?.image?.url)
    }
    return (
            <div className="row">
                {
                    data && data.map((p,i) => (
                        
                        <Card key={i} image={p.image.url} email={p.email} address={p.address} pincode={p.pincode} 
                        city={p.city} state={p.state}/>
            
                    ))
                } 
            </div>
    )
}



export default Display;
