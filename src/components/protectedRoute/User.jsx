import React from 'react'
import { Navigate } from 'react-router-dom';

const User = ({ children }) => {
    // const user = localStorage.getItem("user");
    if (localStorage.getItem("user")) {
        return children;
    } else {
        return <Navigate to={"/login"} />
    }
}

export default User;