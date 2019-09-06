import React from "react";
import Cards from "./Card";

const Players = props => {
  return (
    <div className="player-wrapper">
      {props.players.map(data => (
        <Cards value={data} />
      ))}
    </div>
  );
};

export default Players;
