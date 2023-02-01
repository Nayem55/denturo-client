import React from "react";
const PatientReviewCard = ({img , name}) => {
  return (
    <div className="patientCard p-12 shadow-xl">
      <p>
        It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to using
        Content here, content
      </p>
      <div className="flex items-center mt-12">
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-primary  ring-offset-2">
            <img className="patient" src={img} alt="" />
          </div>
        </div>
        <div className="ml-3">
        <p className="text-secondary font-bold text-xl">{name}</p>
        <p>California</p>
        </div>
      </div>
    </div>
  );
};

export default PatientReviewCard;
