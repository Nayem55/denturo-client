import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import BookingModal from "./BookingModal";
import Service from "./service";

const AvailableAppointments = ({ selected }) => {
  const date = format(selected, "PP");
  const [treatment, setTreatment] = useState(null);
  const {dark} = useContext(ThemeContext);
  const {data:services = [] , refetch } = useQuery({
    queryKey : ['appointments',date],
    queryFn : ()=> fetch(`https://doctors-portal-server-mu-flame.vercel.app/appointments?date=${date}`)
    .then((res) => res.json())
  })

  return (
    <div className="mx-8 md:mx-16 lg:mx:16">
      <p className="text-center text-primary text-xl mx-8 font-bold"> 
        Available Appointments on {format(selected, "PP")}
      </p>
      <p className={`text-center text-xl opacity-60 mb-8 lg:mb-16 ${dark?"text-accent":"text-secondary"}`}>
        Please select a service
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
            dark={dark}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal treatment={treatment} setTreatment={setTreatment} selected={selected} refetch={refetch}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
