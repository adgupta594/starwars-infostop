import React from "react";
import "./card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={props.character.image}
        alt={props.character.name}
        height={180}
        width={180}
      />
      <h2>{props.character.name}</h2>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Homeworld: {props.character.homeworld}</p>
      <a href={props.character.wiki} target="_blank">
        More Info...
      </a>
    </div>
  );
};

export default Card;
