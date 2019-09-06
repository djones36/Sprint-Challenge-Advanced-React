import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("player ", res.data);
        this.ListeningStateChangedEvent({ players: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>test</h1>
      </div>
    );
  }
}

export default App;
