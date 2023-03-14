import React from "react";
import Display from "../pothole/CardListing"
import AboutUs from "./AboutUs";

import NavBar from "./NavBar";
import BecomeVolunteer from "./BecomeVolunteer";
import BlogSection from "../blog/BlogSection";
import CompaniesSection from "./CompaniesSection";
import FooterWithLinks from "./FooterWithLinks";
import FindPothole from "../pothole/FindPothole";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <div className="m-2 mt-0 p-2 bg-light">
                <FindPothole/>
                <Display/>
                <BecomeVolunteer/>
                <CompaniesSection/>
                <BlogSection/>
                {/* <AboutUs/> */}
                <FooterWithLinks/>
            </div>
        </div>
    )
}
export default Home;