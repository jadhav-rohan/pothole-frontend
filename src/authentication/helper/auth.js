import { API } from "../../helper";

export const signout = (next) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      localStorage.clear()
      next();
  
      return fetch(`${API}/api/signout`, {
        method: "GET",
      })
        .then((response) => {
          console.log("SignOut Success!");
        })
        .catch((err) => console.log(err));
    }
};
  
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
      // return true;
    } else {
      return false;
    }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};


