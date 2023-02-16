import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import UserProfile from "./authentication/UserProfile";
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
	</Routes>
  );
}

export default App;
