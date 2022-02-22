import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children}) => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    let location = useLocation();

    if(!userInfo.email){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;