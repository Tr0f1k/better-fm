import "./styles/App.css";
import React from "react";
import SeasonChallenges from "./SeasonChallenges";

function App() {
  return (
    <div>
      <div className={'top'}>
        <h1>Better FM!</h1>
        <h2>Getting bored while playing FM? Try spicing it up with some interesting challenges!</h2>
      </div>
      <SeasonChallenges />
    </div>
  );
}

export default App;

