import React from "react";
import "./homepage.css";
import heroBanner from "../../../src/assets/herobanner.jpg";
import scribble from "../../../src/assets/scribble.svg";
import { IoLocationOutline } from "react-icons/io5";
import solutionsImg1 from "../../assets/solutions1.jpg";
import solutionsImg2 from "../../assets/solutions2.jpg";

const Homepage = () => {
  return (
    <div className="hompage__container">
      <div className="homepage__left__container">
        <div className="homepage__desc">
          <img src={scribble} alt="scribble" />
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="schedule__bar">
          <div className="location__icon">
            <IoLocationOutline
              color="#989898"
              style={{ marginRight: "0.5rem" }}
            />
            <span>City</span>
          </div>

          <span>Location</span>
          <button>Schedule Visit</button>
        </div>
      </div>
      <div className="homepage__right__container">
        <img src={heroBanner} alt="hero banner" className="hero__banner" />
        <img
          src={solutionsImg1}
          alt="hero banner"
          className="solutions__img_1"
        />
        <img
          src={solutionsImg2}
          alt="hero banner"
          className="solutions__img_2"
        />
        <h1>Co Working</h1>
      </div>
    </div>
  );
};

export default Homepage;
