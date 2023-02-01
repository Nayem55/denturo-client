import React from "react";
import "./Footer.css";
import footer from "../../../assets/images/footer.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer
        style={{
          background: `url(${footer})`,
          backgroundSize: "cover",
        }}
        className=" p-5 lg:px-40 "
      >
       <div className="flex justify-between footer">
       <div className="flex flex-col">
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
       </div>
        <div className="text-center pt-16 lg:p-16 mb-12 lg:mb-0">
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
