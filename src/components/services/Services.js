import React from "react";
import "./services.css";
import banner from "../../../src/assets/servicebanner.jpg";
import calender from "../../../src/assets/calender.png";
import { Link } from "react-router-dom";

const Services = ({ isRowReverse }) => {
  return (
    <div
      className="services__container"
      style={isRowReverse ? { flexDirection: "row-reverse" } : null}
    >
      <div
        className="services__left__container"
        style={isRowReverse ? { marginRight: "0rem" } : null}
      >
        <img src={banner} alt="service banner" className="service__hero" />
        <img src={calender} alt="service banner" className="service__cal" />
      </div>
      <div
        className="services__right__container"
        style={isRowReverse ? { marginRight: "10rem" } : null}
      >
        <h4>SERVICES</h4>
        <p>Lorem ipsum dolor sit amet </p>
        <span>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum. You need to be sure
          there isn’t anything embarrassing hidden in the middle of text.
        </span>
        <Link to="/details">
          <button>View Availability</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
