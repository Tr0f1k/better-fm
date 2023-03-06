import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/Scenarios.css';

function Scenarios() {
    const [scenarios, setScenarios] = useState([]);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

    useEffect(() => {
        async function fetchScenarios() {
            const response = await axios.get("http://localhost:4000/api/scenarios");
            setScenarios(response.data);
        }
        fetchScenarios();
    }, []);

    function handleBack() {
        if (currentScenarioIndex > 0) {
            setCurrentScenarioIndex(currentScenarioIndex - 1);
        }
    }

    function handleForward() {
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1);
        }
    }

    if (scenarios.length === 0) {
        return <div>Loading scenarios...</div>;
    }

    const currentScenario = scenarios[currentScenarioIndex];

    return (
        <div>
            <h1 className="top">Custom Scenarios:</h1>
            <div className="scenariosBox">
                <div className="scenariosItem">
                    <h2 className="top">{currentScenario.name}</h2>
                    <img src={require(`${currentScenario.imgurl}`)} alt="Scenario Image" className="scenariosImage"/>
                    <h2>Description:</h2>
                    <p>{currentScenario.description}</p>
                    <h2>Conditions:</h2>
                    <ul>
                        {currentScenario.condition.split('|').map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                    <h3>HARD MODE:</h3>
                    <p>{currentScenario.hard}</p>
                    <p>Difficulty: <img src={require(`${currentScenario.difurl}`)} alt="Scenario Image" className="difficultyImages"/></p>
                </div>
                <div className="scenariosItem">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleForward}>Forward</button>
                </div>
            </div>
        </div>
    );
}

export default Scenarios;
