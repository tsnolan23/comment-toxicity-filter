import React from "react";

import "./style.css";

const Intro = () => (
  <div className="Intro">
    <h1 className="Intro__Title">Fighting Toxicity with Perspective API</h1>
    <p className="Intro__Desc">
      When the form is submitted, we send the comment off to the Perspective API
      to determine the probability that it was intended to be toxic. We compare
      that probability to a threshold we deem "okay", and if it exceeds that, we
      reject the comment as toxic. Try it below by entering a variety of
      comments and see which ones are rejected!
    </p>
  </div>
);

export default Intro;
