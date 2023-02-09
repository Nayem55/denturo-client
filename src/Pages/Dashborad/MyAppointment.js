import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const {data : bookings = []} = useQuery({
        queryKey: ['bookings' ,user?.email],
        queryFn: async ()=>{
            const res = await fetch(`https://doctors-portal-server-mu-flame.vercel.app/bookings?email=${user?.email}`,{
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = res.json();
            return data;
        }
    })
  return (
    <div className="m-5 mt-32 lg:m-10">
      <h1 className="text-xl lg:text-3xl ">My Appointments</h1>
      <div className="overflow-x-auto appointmentTable mt-10">
        <table className="w-full mb-10">
          <thead className="bg-secondary text-accent">
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
          </thead>
          <tbody>
            {
                bookings.map((booking , i)=><tr>
              <th>{i+1}</th>
              <td>{booking?.patient}</td>
              <td>{booking?.treatment}</td>
              <td>{booking?.appointmentDate}</td>
              <td>{booking?.slot}</td>
              <td>{
                !booking.paid ? <Link to={`/dashboard/payment/${booking?._id}`}>
                <button className="btn btn-primary btn-sm text-white m-2">Pay now</button>
                </Link> : <span className="text-secondary ml-4 font-bold">Paid</span>
              }</td>
            </tr>) 
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
