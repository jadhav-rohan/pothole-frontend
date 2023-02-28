import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "./helper/auth";
// import { useHistory } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    
    return(
      <div> 
        <span
          className="nav-link text-dark btn"
          onClick={() => {
          signout(() => {
          navigate("/sign-in")
          });
          }}>
          Signout
        </span>
      </div>
    )
}

export default UserProfile;