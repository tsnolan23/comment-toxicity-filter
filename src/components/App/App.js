import React from "react";

import "./style.css";
import CommentForm from "../CommentForm";

const App = () => (
  <div className="App">
    <CommentForm onSubmit={() => alert("Your comment was not toxic!")} />
  </div>
);

export default App;
