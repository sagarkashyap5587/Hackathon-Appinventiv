import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {
    
    const isToken =  localStorage.getItem("token");

    return !isToken ? <>{children}</> : Navigate("/profile");
}

export default PublicRoute;