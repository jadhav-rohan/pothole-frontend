import React from "react";
import PotholeCard from "./Card";

import FindPothole from "./FindPothole";
import NavBar from "./NavBar";
// import Process from "./Process";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <FindPothole/>
            <PotholeCard/>
            {/* <Process/> */}
        </div>
    )
}
export default Home;