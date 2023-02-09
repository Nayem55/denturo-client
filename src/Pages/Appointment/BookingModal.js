import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from 'react-hot-toast';
import auth from "../../firebase.init";

const BookingModal = ({ treatment, selected ,setTreatment ,refetch }) => {
  const [user] = useAuthState(auth);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const slot = form.slot.value;
    const date = form.date.value;
    const booking={
        appointmentDate : date,
        treatment : treatment.name,
        patient : name,
        slot,
        email,
        number,
        price : treatment.price
    }

    fetch('https://doctors-portal-server-mu-flame.vercel.app/bookings' , {
      method: 'post',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.acknowledged){
        setTreatment(null);
        toast.success("Appointment Created Succesfully");
        refetch();
      }
      else{
        setTreatment(null);
        toast.error(data.messege);
      }
    })
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-secondary text-center font-bold">{treatment?.name}</h3>
          <form onSubmit={handleSubmit} className="form-control mt-6">
            <input
              type="text"
              name="date"
              readOnly
              value={format(selected, "PP")}
              className="input input-bordered bg-secondary bg-opacity-20 text-secondary font-bold mb-4"
            />
            <select name="slot" className="select select-bordered w-full bg-white text-secondary border-secondary mb-4 ">
              {treatment?.slots.map(slot=> <option value={slot}>{slot} </option>)}
            </select>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={user?.displayName}
              readOnly
              className="input input-bordered bg-white text-secondary border-secondary bg-opacity-20 placeholder-secondary mb-4"
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered bg-white text-secondary border-secondary bg-opacity-20 placeholder-secondary mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user?.email}
              readOnly
              className="input input-bordered bg-white text-secondary border-secondary bg-opacity-20 placeholder-secondary mb-4"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered bg-secondary text-white hover:bg-primary mb-4 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
