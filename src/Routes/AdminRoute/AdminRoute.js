import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const AdminRoute = ({children}) => {
    let [user , loading] = useAuthState(auth);
    let [isAdmin, isAdminLoading] = useAdmin(user?.email);
    let location = useLocation();
    
    if(loading || isAdminLoading){
        return <div className='flex justify-center items-center h-[90vh]'><progress className="progress  w-56"></progress></div> ;
    }

    if (user && isAdmin) {
        return children;
    }
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;