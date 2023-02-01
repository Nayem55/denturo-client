import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import MyAppointment from "../../Pages/Dashborad/MyAppointment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup"
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

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
            }
            
        ]
    },
])

export default router;