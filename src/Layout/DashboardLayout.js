import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import '../Pages/Dashborad/Dashboard.css'

const DashboardLayout = () => {
    const { user } = useAuthState(auth);
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-black bg-opacity-20">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-secondary">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                        <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                        

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;