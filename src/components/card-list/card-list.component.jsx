import React from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CardList;
