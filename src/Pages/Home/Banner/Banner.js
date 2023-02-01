import React from "react";
import { useContext } from "react";
import chair from '../../../assets/images/chair.png'
import { ThemeContext } from "../../../Contexts/ThemeContext";


const Banner = () => {
  const {dark} = useContext(ThemeContext);
  return (
    <div>
      <div className="banner">
        <div className="banner-text lg:mr-16">
          <h1 className={`${dark? "text-accent" : "text-secondary" }`}>A better life starts with a beautiful smile</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary text-white font-bold">
            GET STARTED
          </button>
        </div>
        <img src={chair} alt="" />
      </div>
    </div>
  );
};

export default Banner;
