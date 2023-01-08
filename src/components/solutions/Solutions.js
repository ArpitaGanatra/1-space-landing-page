import React from "react";
import "./solutions.css";
import Slider from "react-touch-drag-slider";
import solutionsImg1 from "../../assets/solutions1.jpg";
import solutionsImg2 from "../../assets/solutions2.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    url: solutionsImg1,
    title: "solutions slider image 1",
  },
  {
    url: solutionsImg2,
    title: "solutions slider image 2",
  },
];

const Solutions = () => {
  return (
    <div className="solutions__container">
      <div className="solutions__left__container">
        <h4>SOLUTIONS</h4>
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
      <div
        className="solutions__right__container"
        style={{ overflow: "hidden" }}
      >
        <Slider>
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Solutions;
