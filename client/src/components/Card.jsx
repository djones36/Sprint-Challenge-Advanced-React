import React from "react";
import { Card } from "semantic-ui-react";

const Cards = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.value.name}</Card.Header>
      <Card.Meta>{props.value.country}</Card.Meta>
      <Card.Meta>{props.value.searches}</Card.Meta>
      <Card.Description>Soccer Player</Card.Description>
    </Card.Content>
  </Card>
);

export default Cards;
