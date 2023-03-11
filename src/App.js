import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import AllPotholeCards from "./AllPotholeCards";
import ForgetPassword from "./authentication/ForgetPassword";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import UserProfile from "./authentication/UserProfile";
import BecomeVolunteer from "./BecomeVolunteer";
import AddBlog from "./blog/AddBlog";

import BlogArticleSingle from "./blog/BlogArticleSingle";
import BlogListing from "./blog/BlogListing";
import Data from "./blog/Data";
import PotholeCard from "./Card";
import Home from "./Home"
import ReportPothole from "./ReportPothole";


function App() {
  return (
	<Routes>
		<Route path = "/" element={<Home/>}/>
		<Route path = "/sign-in" element = {<SignIn/>}/>
		<Route path = "/sign-up" element = {<SignUp/>}/>
		<Route path = "/report" element = {<ReportPothole/>}/>
		<Route path = "/user-details" element = {<UserProfile/>}/>
		<Route path = "/card" element = {<PotholeCard/>}/>
		<Route path = "/forget-password" element = {<ForgetPassword/>}/>
		<Route path = "/blog" element = {<BlogListing/>}/>
		<Route path = "/addBlog" element = {<AddBlog/>}/>
		<Route path = "/allPotholeCards" element = {<AllPotholeCards/>}/>
		{/* <Route path = "/blog/article-single/:id" element = {<BlogArticleSingle/>}/> */}
		<Route path = "/blog/article-single/:id" element = {<Data/>}/>
		<Route path = "/about" element = {<AboutUs/>}/>
		<Route path = "/becomeVolunteer" element = {<BecomeVolunteer/>}/>
	</Routes>
  );
}

export default App;
