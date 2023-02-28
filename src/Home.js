import React from "react";
import Display from "./Display";
import AboutUs from "./AboutUs";
import FindPothole from "./FindPothole";
import NavBar from "./NavBar";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <FindPothole/>
            <Display/>
            <AboutUs/>
        </div>
    )
}
export default Home;