import React from 'react';
import PatientReviewCard from './PatientReviewCard';
import patient1 from "../../assets/images/people1.png";
import patient2 from "../../assets/images/people2.png";
import patient3 from "../../assets/images/people3.png";


const PatientReview = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 lg:py-20 lg:ymx-[40px]'>
            <PatientReviewCard img={patient1} name="Winson Henry"></PatientReviewCard>
            <PatientReviewCard img={patient2} name="Mary Smith"></PatientReviewCard>
            <PatientReviewCard img={patient3} name="Nancy Garcia"></PatientReviewCard>
        </div>
    );
};

export default PatientReview;