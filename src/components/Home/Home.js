import React from "react";
import Services from "../services/Services";
import Solutions from "../solutions/Solutions";
import Homepage from "../homepage-banner/Homepage";
import Benefits from "../benefits/Benefits";

const Home = () => {
  return (
    <>
      <Homepage />
      <Services isRowReverse={false} />
      <Services isRowReverse={true} />
      <Solutions />
      <Benefits />
    </>
  );
};

export default Home;
