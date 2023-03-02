import "./styles/MatchChallenges.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MatchChallenges() {
  const [selectedN, setSelectedN] = useState(0);
  const [selectedDm, setSelectedDm] = useState(1);
  const [selectedDl, setSelectedDl] = useState(4);
  const [data, setData] = useState([]);

  const handleSelectN = (event) => {
    setSelectedN(event.target.value);
  };

  const handleSelectDm = (event) => {
    setSelectedDm(event.target.value);
  };

  const handleSelectDl = (event) => {
    setSelectedDl(event.target.value);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/matchChallenges", {
        params: { n: selectedN, dm: selectedDm, dl: selectedDl },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="matchComp">
      <div className={'selectBox'}>
        <div className={'selectItem'}>
          <label htmlFor="selectN">Select number of challenges:</label>
          <select id="selectN" value={selectedN} onChange={handleSelectN}>
            <option value={0}></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className={'selectItem'}>
          <label htmlFor="selectDm">Select minimum difficulty:</label>
          <select id="selectDm" value={selectedDm} onChange={handleSelectDm}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className={'selectItem'}>
          <label htmlFor="selectDl">Select maximum difficulty:</label>
          <select id="selectDl" value={selectedDl} onChange={handleSelectDl}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
      </div>
      <br></br>
      <div className={'randomButton'}>
        <button onClick={handleClick}>Random!!!</button>
      </div>
      <br></br>
      <div className={'challengeBox'}>
        {data.map((row) => (
          <div className={'challengeItem'} key={row.id}>
            <img src={require(`${row.imgurl}`)} className={'challengeImages'}></img>
            <h2>{row.name}</h2>
            <h3>{row.description}</h3>
            <h4>Difficulty: <img src={require(`${row.difurl}`)} className="difficultyImages"></img></h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchChallenges;

