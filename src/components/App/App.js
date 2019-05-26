import React from "react";

import "./style.css";
import CommentForm from "../CommentForm";
import Intro from "../Intro";
import GitHubLink from "../GitHubLink";

const App = () => (
  <div className="App">
    <GitHubLink />
    <Intro />
    <CommentForm onSubmit={() => alert("Your comment was not toxic!")} />
  </div>
);

export default App;
