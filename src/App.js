import "./styles/App.css";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Paper, Link } from "@material-ui/core";
import SeasonChallenges from "./SeasonChallenges";
import MatchChallenges from "./MatchChallenges";
import Scenarios from "./Scenarios";
import About from "./About";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("SeasonChallenges");

  const handleSeasonChallengesClick = () => {
    setSelectedComponent("SeasonChallenges");
  };

  const handleMatchChallengesClick = () => {
    setSelectedComponent("MatchChallenges");
  };

  const handleScenariosClick = () => {
    setSelectedComponent("Scenarios");
  };

  const handleAboutClick = () => {
    setSelectedComponent("About");
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Better FM</Typography>
          <Button color="inherit" onClick={handleSeasonChallengesClick}>
            Season Challenges
          </Button>
          <Button color="inherit" onClick={handleMatchChallengesClick}>
            Match Challenges
          </Button>
          <Button color="inherit" onClick={handleScenariosClick}>
            Scenarios
          </Button>
          <Button color="inherit" onClick={handleAboutClick}>
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Paper style={{color: "gray"}}>
        <div className="top">
          <h1>Better FM!</h1>
          <h2>Getting bored while playing FM? Try spicing it up with some interesting challenges!</h2>
          <br></br>
        </div>
      </Paper>
      {selectedComponent === "SeasonChallenges" && <SeasonChallenges />}
      {selectedComponent === "MatchChallenges" && <MatchChallenges />}
      {selectedComponent === "Scenarios" && <Scenarios />}
      {selectedComponent === "About" && <About />}
      <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" style={{ flexGrow: 1 }}>
        Better FM
        </Typography>
        <Typography variant="body1" style={{ marginRight: 16 }}>
        Made by Mihail Trofimov
        </Typography>
        <Link
          href="https://github.com/Tr0f1k"
          target="_blank"
          rel="noopener"
          color="inherit"
          style={{ marginRight: 16 }}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mihailtrofimov/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          LinkedIn
        </Link>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default App;

