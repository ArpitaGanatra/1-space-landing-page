import React from "react";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// FaFacebook
import "./footer.css";

const Footer = () => {
  return (
    // <div></div>
    <div className="footer__container">
      <div className="footer__company__info">
        <h2>1-Space </h2>
        <p>There are many variations of passages of Lorem Ipsum available.</p>
      </div>
      <div className="footer__stack">
        <h4>Lorem Ipsum</h4>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
      </div>
      <div className="footer__stack">
        <h4>Lorem Ipsum</h4>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum</span>
      </div>
      <div className="footer__socials">
        <h4>Lorem Ipsum</h4>
        <div className="icon__container">
          <div className="icon">
            <CgFacebook color="#fd5b2f" />
          </div>
          <div className="icon">
            <AiOutlineTwitter color="#fd5b2f" />
          </div>
          <div className="icon">
            <AiOutlineDribbble color="#fd5b2f" />
          </div>
          <div className="icon">
            <FaLinkedinIn color="#fd5b2f" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
