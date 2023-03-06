import "./styles/Challenges.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardMedia, Accordion, AccordionDetails, AccordionSummary, Button } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SeasonChallenges() {
  const [selectedN, setSelectedN] = useState(1);
  const [selectedDm, setSelectedDm] = useState(1);
  const [selectedDl, setSelectedDl] = useState(5);
  const [data, setData] = useState([]);
  const [previousData, setPreviousData] = useState([]);
  const [challengeSetNum, setChallengeSetNum] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [clicked, setClicked] = useState(false);

  //Handle selecting the amount of challenges
  const handleSelectN = (event) => {
    setSelectedN(event.target.value);
  };

  //Handle selecting the minimal difficulty of challenges
  const handleSelectDm = (event) => {
    setSelectedDm(event.target.value);
  };

  //Handle selecting the maximal difficulty of challenges
  const handleSelectDl = (event) => {
    setSelectedDl(event.target.value);
  };

  //Fetching data from API
  const fetchData = () => {

    axios
      .get("http://localhost:4000/api/seasonChallenges", {
        params: { n: selectedN, dm: selectedDm, dl: selectedDl },
      })
      .then((response) => {
        const newSet = {
          challenges: response.data,
          totalDifficulty: response.data.reduce((acc, curr) => acc + curr.difficulty, 0)
        };
        setPreviousData([...previousData, newSet]);
  
        // Reset previously rendered cards
        setCurrentData([]);
        
        setData(response.data);
        setChallengeSetNum(challengeSetNum + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Handle clicking the "Random" button
  const handleClick = () => {
    fetchData();
    setClicked(true);
  };


  return (
    <div className="comp">
      <div className="title"><h1>Season Challenges</h1></div>
      <h2>Instructions:</h2>
    <ol>
      <li>Select the amount of challenges</li>
      <li>Select minimum and maximum difficulties</li>
      <li>Hit Random!!!</li>
      <li>Pray for the best (or worst)</li>
      <li>Play!</li>
    </ol>
      <div className={'selectBox'}>
        <div className={'selectItem'}>
          <label htmlFor="selectN">Select number of challenges:</label>
          <select id="selectN" value={selectedN} onChange={handleSelectN}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className={'selectItem'}>
          <label htmlFor="selectDm">Select minimum difficulty:</label>
          <select id="selectDm" value={selectedDm} onChange={handleSelectDm}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className={'selectItem'}>
          <label htmlFor="selectDl">Select maximum difficulty:</label>
          <select id="selectDl" value={selectedDl} onChange={handleSelectDl}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
      <br></br>
      <div className={"randomButton"}>
      <Button onClick={handleClick}>Random!!!</Button>
    </div>
    <br></br>
  <div className={"challengeBox"}>
    {data.map((row, index) => (
      <Card
        key={row.id}
        className={clicked ? "card-animation" : ""}
      >
        <CardContent>
          <CardMedia
            component="img"
            className="challengeImages"
            style={{ maxWidth: "50%", margin: "auto" }}
            image={require(`${row.imgurl}`)}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
          >
            {row.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            {row.description}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            <CardMedia
              component="img"
              style={{ maxWidth: "50%", margin: "auto" }}
              image={require(`${row.difurl}`)}
            />
          </Typography>
        </CardContent>
      </Card>
  ))}
</div>
    <br></br>
  <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">Previous Challenges:</Typography>
    </AccordionSummary>
    {previousData.map((set, index) => (
  <Accordion key={index}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">Challenge Set #{index + 1}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {set.challenges.map((row, i) => (
        <div key={i}>
          <h4>{row.name}</h4>
          <h4>{row.description} &nbsp;</h4>
          <h4>Difficulty: {row.difficulty}</h4>
        </div>
      ))}
      <h2>Total difficulty: {set.totalDifficulty}</h2>
    </AccordionDetails>
  </Accordion>
))}
</Accordion>
  </div>
);
}

export default SeasonChallenges;

