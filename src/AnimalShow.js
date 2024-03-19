import React, { useState } from "react";
import "./AnimalShow.css";
//image
import bird from "./assets/svg/bird.svg";
import cat from "./assets/svg/cat.svg";
import cow from "./assets/svg/cow.svg";
import dog from "./assets/svg/dog.svg";
import horse from "./assets/svg/horse.svg";
import heart from "./assets/svg/heart.svg";
import gator from "./assets/svg/gator.svg";

const svgMap = {
  bird,
  cat,
  cow,
  gator,
  horse,
  heart,
  dog,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt={type} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
};

export default AnimalShow;
