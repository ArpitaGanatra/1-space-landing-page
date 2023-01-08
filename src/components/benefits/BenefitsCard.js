import React from "react";

const BenefitsCard = ({ image, heading, desc }) => {
  return (
    <div className="benefits-card__container">
      <img src={image} alt="event icon" />
      <h3>{heading}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default BenefitsCard;
