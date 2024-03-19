import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

const getRanomAnimal = () => {
  const animals = ["bird", "cat", "cow", "gator", "horse", "dog"];

  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRanomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
};

export default App;
