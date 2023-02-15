import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinning from '../../components/Spinning';
import { AuthContext } from '../../UserContext/UserContext';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinning></Spinning>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/' state={{ from: location }} replace ></Navigate>;
    }
};

export default PrivateRoute;