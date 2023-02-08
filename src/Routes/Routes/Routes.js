import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashborad/AddDoctor";
import Alluser from "../../Pages/Dashborad/Alluser";
import ManageDoctors from "../../Pages/Dashborad/ManageDoctors";
import MyAppointment from "../../Pages/Dashborad/MyAppointment";
import Payment from "../../Pages/Dashborad/Payment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup"
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <PrivateRoute> <Appointment></Appointment> </PrivateRoute> 
            }
           
        ]
    },
    {
        path: '/dashboard' ,
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute> ,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute> <Alluser></Alluser> </AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            }
            
        ]
    },
])

export default router;