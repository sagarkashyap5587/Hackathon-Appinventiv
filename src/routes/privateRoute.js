import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const isToken =  localStorage.getItem("token");
    return isToken ? <>{children}</> : Navigate("/");
}

export default PrivateRoute;