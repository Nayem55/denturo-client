import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import "../Pages/Dashborad/Dashboard.css";
import useAdmin from "../Hooks/useAdmin";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";


const DashboardLayout = () => {
  const [user] = useAuthState(auth);
  const [isAdmin] = useAdmin(user.email);
  const {dark} = useContext(ThemeContext);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className={`drawer-content ${dark? "dashboard-dark" : "dashboard-light"}`}>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-secondary">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 lg:w-80 text-base-content bg-secondary mt-20 lg:mt-0">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add A Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
