import React from "react";
import "./benefits.css";
import BenefitsCard from "./BenefitsCard";
import eventIcon from "../../assets/Benefits/event.svg";
import armchairIcon from "../../assets/Benefits/armchair.svg";
import dumbbellIcon from "../../assets/Benefits/dumbbell.svg";
import internetIcon from "../../assets/Benefits/internet.svg";
import wifiIcon from "../../assets/Benefits/wifi.svg";

const benefitsCardDetails = [
  {
    img: eventIcon,
    heading: "Lorem Ipsum",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: armchairIcon,
    heading: "Lorem Ipsum",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: dumbbellIcon,
    heading: "Lorem Ipsum",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: internetIcon,
    heading: "Lorem Ipsum",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: wifiIcon,
    heading: "Lorem Ipsum",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits__container">
      <div className="benefits__heading__content">
        <h4>WHY CHOOSE US?</h4>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className="benefits__content">
        {benefitsCardDetails.map((details) => (
          <BenefitsCard
            image={details.img}
            heading={details.heading}
            desc={details.description}
          />
        ))}
        {/* <BenefitsCard /> */}
      </div>
    </div>
  );
};

export default Benefits;
