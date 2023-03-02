import React from "react";
import { Link } from "react-router-dom";
import Works from "./Works";
import Features from "./Features";
import Review from "./Reviews";
import CallAction from "./CallAction";
import Processe from "./Processe";

import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="hero_banner">
        <div className="main_banner_content">
          <h1>
            Simplifying tasks after a loved one passes, so you can focus on what
            matters
          </h1>
          <p>We guide you through all the steps you need to take immediately</p>
          <Link
            className="custom_btn btn btn-primary banner_button"
            to="/auth/signup"
          >
            Get Started
          </Link>
        </div>
      </section>
      {/* <Benefits />
        <Help />
        <Works />
        <FreeCell /> */}
      <Processe />
      <Works />
      <Features />
      <CallAction />
      <Review />
    </div>
  );
};

export default Home;
