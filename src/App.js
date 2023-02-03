import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import Home from "./Home"


function App() {
  return (
	<Routes>
		<Route path = "/" element={<Home/>}/>
		<Route path = "/sign-in" element = {<SignIn/>}/>
		<Route path = "/sign-up" element = {<SignUp/>}/>
	</Routes>
  );
}

export default App;
