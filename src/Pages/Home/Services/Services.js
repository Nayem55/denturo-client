import React, { useContext } from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import { ThemeContext } from "../../../Contexts/ThemeContext";

const Services = () => {
  const {dark} = useContext(ThemeContext);

  return (
    <div className="services">
      <h2 className="text-center text-primary font-bold text-2xl uppercase">
        Our services
      </h2>
      <p className={`text-center text-4xl ${dark? "text-accent" : "text-secondary" }`}>Services We Provide</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 justify-items-center">
        <ServiceCard
          img={cavity}
          title="Cavity Filling"
          desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        ></ServiceCard>
        <ServiceCard
          img={fluoride}
          title="Fluoride Treatment"
          desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        ></ServiceCard>
        <ServiceCard
          img={whitening}
          title="Teeth Whitening"
          desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
