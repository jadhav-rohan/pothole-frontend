import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "./helper/auth";
// import { useHistory } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    return(
      

      <div>
        {isAuthenticated() ?  
        <span
                  className="nav-link text-dark btn"
                  onClick={() => {
                    signout(() => {
                      navigate("/sign-in")
                    });
                  }}
                >
                Signout
                </span> : <h1>LogIn</h1>
        }
      </div>



        // <div>
          
        //     {/* {isAuthenticated() && (
        //       <li className="nav-item">
        //         <span
        //           className="nav-link text-dark btn"
        //           onClick={() => {
        //             signout(() => {
        //               // history.push("/");
        //             });
        //           }}
        //         >
        //           Signout
        //         </span>
        //       </li>
        //     )} */}
        // </div>
    )
}

export default UserProfile;