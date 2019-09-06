import React from "react";
import CardExampleHeaderCard from "./Card";
import { Card } from "semantic-ui-react";
const Players = props => {
  return (
    <div className="player-wrapper">
      <Card.Group>
        {props.players.map(data => (
          <CardExampleHeaderCard value={data} key={data.id} />
        ))}
      </Card.Group>
    </div>
  );
};

export default Players;
