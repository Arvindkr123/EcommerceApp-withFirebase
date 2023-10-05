import React from 'react'
import { Navigate } from 'react-router-dom';
import config from '../../Config/config';

const Admin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem('user'))
    // if (admin.user.email === config.mainAdmin) {
    if (admin.user.email === config.mainAdmin) {
        return children;
    } else {
        return <Navigate to={"/login"} />
    }
}

export default Admin