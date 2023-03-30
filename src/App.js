import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./core/AboutUs";
import "./index.css"

import ForgetPassword from "./authentication/ForgetPassword";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import UserProfile from "./authentication/UserProfile";
import BecomeVolunteer from "./core/BecomeVolunteer";
import AddBlog from "./blog/AddBlog";
import BlogListing from "./blog/BlogListing";
import Data from "./blog/Data";

import Home from "./core/Home"
import AllPotholeCards from "./pothole/FindPothole";
import ReportPothole from "./pothole/ReportPothole";
import EmailVerify from "./authentication/EmailVerify";
import FilteredPothole from "./pothole/FilteredPothole";
import EditBlog from "./blog/admin /EditBlog";
import AdminDashboard from "./blog/admin /EditBlogData";
import EditBlogData from "./blog/admin /EditBlogData";
import SimpleSlider from "./Demo";

import ContactForm from "./core/ContactForm";
import Contact from "./core/Contact";
import PrivacyPolicy from "./core/PrivacyPolicy";



function App() {
  return (
	
	<Routes>
		<Route path = "/" element={<Home/>}/>
		<Route path = "/sign-in" element = {<SignIn/>}/>
		<Route path = "/sign-up" element = {<SignUp/>}/>
		<Route path = "/report" element = {<ReportPothole/>}/>
		<Route path = "/forget-password" element = {<ForgetPassword/>}/>
		<Route path = "/blog" element = {<BlogListing/>}/>
		<Route path = "/addBlog" element = {<AddBlog/>}/>
		<Route path = "/allPotholeCards" element = {<AllPotholeCards/>}/>
		<Route path = "/blog/article-single/:id" element = {<Data/>}/>
		<Route path = "/blog/article-single/edit/:id" element = {<EditBlogData/>}/>
		<Route path = "/blog/article-single/edit" element = {<EditBlog/>}/>
		<Route path = "/editBlog" element = {<AdminDashboard/>}/>
		<Route path = "/about" element = {<AboutUs/>}/>
		<Route path = "/filteredPothole" element = {<FilteredPothole/>}/>
		<Route path = "/demo" element = {<SimpleSlider/>}/>
		<Route path="/:id/verify/:token" element={<EmailVerify />} />
		<Route path="/becomeVolunteer" element={<Contact title={"Become a Volunteer"} />} />
		<Route path="/contact" element={<Contact title={"Get in touch with us"} />} />
		<Route path="/privacypolicy" element={<PrivacyPolicy/>} />
		
	</Routes>
  );
}

export default App;
