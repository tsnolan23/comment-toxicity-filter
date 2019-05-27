import React from "react";
import { get } from "lodash";

import "./style.css";
import Card from "../Card";

const INTENTS = [
  {
    id: "TOXICITY",
    label: "Toxicity"
  },
  {
    id: "INSULT",
    label: "Insult"
  },
  {
    id: "FLIRTATION",
    label: "Flirtation"
  },
  {
    id: "THREAT",
    label: "Threat"
  }
];

const Results = ({ results }) => {
  const getProbability = intent => {
    const value = get(results, [intent, "summaryScore", "value"]);
    return value ? value.toFixed(2) : "--";
  };
  return (
    <Card>
      {INTENTS.map(intent => (
        <div className="Results__Row" key={intent.id}>
          <h3 className="Results__Intent">{intent.label}</h3>
          <div>{getProbability(intent.id)}</div>
        </div>
      ))}
    </Card>
  );
};

Results.defaultProps = {
  results: {}
};

export default Results;
