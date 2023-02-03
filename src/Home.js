import React from "react";
import FindPothole from "./FindPothole";
import NavBar from "./NavBar";
// import Process from "./Process";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <FindPothole/>
            {/* <Process/> */}
        </div>
    )
}
export default Home;