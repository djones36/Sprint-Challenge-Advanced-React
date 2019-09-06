import React from "react";
import Cards from "./Card";
import { Card } from "semantic-ui-react";
const Players = props => {
  return (
    <div className="player-wrapper">
      <Card.Group>
        {props.players.map(data => (
          <Cards value={data} key={data.id} />
        ))}
      </Card.Group>
    </div>
  );
};

export default Players;
