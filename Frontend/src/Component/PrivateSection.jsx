import React from "react";
import { Navigate,Outlet, useLocation } from "react-router-dom";

const PrivateSection=()=>{
    const auth=localStorage.getItem("User");
    const location = useLocation();
    
    return auth ? (
        <Outlet/>
    ):(
        <Navigate to="/login" state={{from :location}} replace />
    );
};
export default PrivateSection;