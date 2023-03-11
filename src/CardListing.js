import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Display = () => {

    // const responsive = {
    //     superLargeDesktop: {
    //       breakpoint: { max: 5000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 4
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:9002/api/getAll")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err, "it has an error"));
    }, []);

    const potholes = data && data.slice(0,8).map((p,i) => (
        <Card key={i} 
        image={p.image.url} 
        email={p.email}
        address={p.address} 
        pincode={p.pincode} 
        city={p.city} 
        state={p.state}/>
    ));
    

    return (
      
      
        <div className="row">
            {/* <Carousel responsive={responsive}> */}
            <h2 className="text-center">Potholes Listed </h2>
                {potholes}
                {data.length > 8 && 
                <div className='text-center'>
                    <a className='p-3 rounded-pill btn btn-primary mt-3' href='/allPotholeCards'>VIEW ALL</a>
                </div>}
            {/* </Carousel> */}
         </div>
        
        
    )
}

export default Display;
