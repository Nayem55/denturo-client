import React from "react";
import doctor from "../../assets/images/doctor-small.png";

const HomeAppointment = () => {
  return (
    <section className="homeAppointment">
      <div>
        <img className="doctor mt-[-130px]" src={doctor} alt=""></img>
      </div>
      <div className="appointmentDesc">
        <h3 className="text-primary text-xl font-bold">Appointment</h3>
        <p className="text-3xl text-accent mt-5">Make an appointment Today</p>
        <p className="mt-5 text-accent">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white mt-8 uppercase">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HomeAppointment;
