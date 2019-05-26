import React from "react";

import "./style.css";
import CommentForm from "../CommentForm";
import Intro from "../Intro";

const App = () => (
  <div className="App">
    <Intro />
    <CommentForm onSubmit={() => alert("Your comment was not toxic!")} />
  </div>
);

export default App;
