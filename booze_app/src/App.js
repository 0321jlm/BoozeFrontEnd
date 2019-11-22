import React from "react";
import axios from "axios";

import "./App.css";
import "../src/index.css";

import Booz from "./components/Booz.js";
import NewBooz from "./components/NewBooz.js";

let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      url: "",
      booz: [],
      addBooz: ""
    };
    this.handleNewBooz = this.handleNewBooz.bind(this);
  }

  async handleNewBooz(aBooz) {
    console.log("new", aBooz);
    const addBooz = {
      rating: "",
      comments: "",
      details: aBooz
    };

    console.log("handle new booz entered: ", addBooz);
    // event.preventDefault();
    console.log("baseURL: ", baseURL);
    const response = await axios.post(`${baseURL}/booz`, addBooz);
    this.setState({
      details: aBooz,
      rating: "",
      comments: ""
    });
    // console.log("this state: ", this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>BOOZ HEADER</h1>
        <Booz />
        <NewBooz handleNewBooz={this.handleNewBooz} />
      </div>
    );
  }
}

export default App;
