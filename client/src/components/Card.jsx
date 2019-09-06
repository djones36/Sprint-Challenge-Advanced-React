import React from "react";
import { Card } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
const Cards = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.value.name}s</Card.Header>
      <Card.Meta>{props.value.country}</Card.Meta>
      <Card.Description>Searches: {props.value.searches}</Card.Description>
    </Card.Content>
  </Card>
);

export default Cards;
