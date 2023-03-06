import "./styles/Challenges.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardMedia } from "@material-ui/core";

function MatchChallenges() {
  const [selectedN, setSelectedN] = useState(0);
  const [selectedDm, setSelectedDm] = useState(1);
  const [selectedDl, setSelectedDl] = useState(5);
  const [data, setData] = useState([]);
  const [previousData, setPreviousData] = useState([]);
  const [challengeSetNum, setChallengeSetNum] = useState(1);

  //Handle selecting the amount of challenges
  const handleSelectN = (event) => {
    setSelectedN(event.target.value);
  };

  //Handle selecting minimal difficulty of challenges
  const handleSelectDm = (event) => {
    setSelectedDm(event.target.value);
  };

  //Handle selecting maximal difficulty of challenges
  const handleSelectDl = (event) => {
    setSelectedDl(event.target.value);
  };

  //Fetching data from API
  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/matchChallenges", {
        params: { n: selectedN, dm: selectedDm, dl: selectedDl },
      })
      .then((response) => {
        const newSet = {
          challenges: response.data,
          totalDifficulty: response.data.reduce((acc, curr) => acc + curr.difficulty, 0)
        };
        setPreviousData([...previousData, newSet]);
        setData(response.data);
        setChallengeSetNum(challengeSetNum + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Handle clicking "Random" button
  const handleClick = () => {
    fetchData();
  };


  return (
    <div className="comp">
      <div className="title"><h1>Match Challenges</h1></div>
      <div className={'selectBox'}>
        <div className={'selectItem'}>
          <label htmlFor="selectN">Select number of challenges:</label>
          <select id="selectN" value={selectedN} onChange={handleSelectN}>
            <option value={0}></option>
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
      <button onClick={handleClick}>Random!!!</button>
    </div>
    <br></br>
    <div className={"challengeBox"}>
      {data.map((row) => (
        <Card key={row.id}>
          <CardContent>
          <CardMedia
            component="img"
            className="challengeImages"
            style={{ maxWidth: "50%", margin: "auto" }}
            image={require(`${row.imgurl}`)}
          />
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {row.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              {row.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
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
    <h3 className="title">Previous Challenge Sets:</h3>
    {previousData.map((set, index) => (
  <div key={index}>
    <h2>Challenge Set #{index + 1}:</h2>
    {set.challenges.map((row, i) => (
      <div key={i}>
        <h4>{row.name}</h4>
        <h4>{row.description}</h4>
        <h4>Difficulty: {row.difficulty}</h4>
      </div>
    ))}
    <h2>Total difficulty: {set.totalDifficulty}</h2>
  </div>
))}
  </div>
);
}

export default MatchChallenges;



