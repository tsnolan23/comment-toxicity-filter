import React, { useState } from "react";

import "./style.css";
import CommentForm from "../CommentForm";
import Intro from "../Intro";
import GitHubLink from "../GitHubLink";
import Results from "../Results";

const App = () => {
  const [results, setResults] = useState({});
  return (
    <div className="App">
      <GitHubLink />
      <Intro />
      <CommentForm onSubmit={(values, results) => setResults(results)} />
      <br />
      <Results results={results} />
    </div>
  );
};

export default App;
