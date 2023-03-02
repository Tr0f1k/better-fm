import "./styles/App.css";
import React, { useState } from "react";
import SeasonChallenges from "./SeasonChallenges";
import MatchChallenges from "./MatchChallenges";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("SeasonChallenges");

  const handleSeasonChallengesClick = () => {
    setSelectedComponent("SeasonChallenges");
  };

  const handleMatchChallengesClick = () => {
    setSelectedComponent("MatchChallenges");
  };

  return (
    <div>
      <div className={"top"}>
        <h1>Better FM!</h1>
        <h2>Getting bored while playing FM? Try spicing it up with some interesting challenges!</h2>
        <div>
          <button onClick={handleSeasonChallengesClick}>Season Challenges</button>
          <button onClick={handleMatchChallengesClick}>Match Challenges</button>
        </div>
        <br></br>
      </div>
      {selectedComponent === "SeasonChallenges" && <SeasonChallenges />}
      {selectedComponent === "MatchChallenges" && <MatchChallenges />}
    </div>
  );
}

export default App;
