import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    console.log(user?.email)
    const {data : bookings = []} = useQuery({
        queryKey: ['bookings' ,user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data = res.json();
            return data;
        }
    })
  return (
    <div className="m-10">
      <h1 className="text-xl ">My Appointments</h1>
      <div className="overflow-x-auto appointmentTable mt-10">
        <table className="w-full mb-10">
          <thead className="bg-secondary text-accent">
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
          </thead>
          <tbody>
            {
                bookings.map((booking , i)=><tr>
              <th>{i+1}</th>
              <td>{booking?.patient}</td>
              <td>{booking?.treatment}</td>
              <td>{booking?.appointmentDate}</td>
              <td>{booking?.slot}</td>
            </tr>) 
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
