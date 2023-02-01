import React from "react";

const HomeContact = () => {
  return (
    <div className="home-contact">
      <h1 className="text-primary font-bold">Contact Us</h1>
      <p className="text-white text-3xl lg:text-4xl mb-10">
        Stay contect with us
      </p>
      <input type="email" placeholder="Email Address" className="" />
      <input type="text" placeholder="Subject" className="" />
      <textarea type="email" placeholder="Your Messege" className="" />
      <button className="btn btn-primary text-accent font-bold mt-5 px-10">
        Submit
      </button>
    </div>
  );
};

export default HomeContact;
