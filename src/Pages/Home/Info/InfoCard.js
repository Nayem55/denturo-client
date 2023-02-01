import React from "react";

const InfoCard = ({img , cardTitle , cardText , bg}) => {
  return (
    <div>
      <div className={`card lg:card-side shadow-xl lg:py-8 ${bg}`}>
        <figure className="pl-0 lg:pl-5 pt-8 lg:pt-0">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body text-white ">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
