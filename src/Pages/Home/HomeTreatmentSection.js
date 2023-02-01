import React, { useContext } from 'react';
import treatment from "../../assets/images/treatment.png";
import { ThemeContext } from '../../Contexts/ThemeContext';

const HomeTreatmentSection = () => {
  const {dark} = useContext(ThemeContext);

    return (
        <div className="hero min-h-screen px-40 treatment ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:ml-12">
            <h1 className={`text-3xl lg:text-5xl font-bold ${dark? "text-accent" : "text-secondary" }`}>
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white uppercase">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeTreatmentSection;