import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import Info from "./Info/Info";
import Services from "./Services/Services";
import HomeAppointment from "./HomeAppointment";
import Testimonial from "./Testimonial";
import HomeContact from "./HomeContact";
import HomeTreatmentSection from "./HomeTreatmentSection";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <HomeTreatmentSection></HomeTreatmentSection>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
      <HomeContact></HomeContact>
    </div>
  );
};
export default Home;
