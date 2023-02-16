import React from "react";
import Display from "./Display";

import FindPothole from "./FindPothole";
import NavBar from "./NavBar";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <FindPothole/>
            <Display/>
        </div>
    )
}
export default Home;