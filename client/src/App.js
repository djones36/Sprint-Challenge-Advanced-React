import React from "react";
import "./App.css";
import axios from "axios";
import Players from "./components/Players";
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
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Worlds Top Soccer Players!</h1>
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
