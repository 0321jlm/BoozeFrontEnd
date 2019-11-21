import React from "react";

// import axios from "axios";

import "./App.css";
import "../src/index.css";

// import Booz from "./components/Booz.js";
import NewBooz from "./components/NewBooz.js";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3001";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

// console.log("current base URL:", baseURL);

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

  handleNewBooz(aBooz) {
    console.log("handle new booz entered: ", aBooz);
    // console.log("this.sate.booz: ", this.state.booz);
    // this.setState({
    //   booz: [...this.state.booz, aBooz]
    // });
  }

  render() {
    return (
      <div className="App">
        <h1>BOOZ HEADER</h1>
        {/* <Booz /> */}
        <NewBooz handleNewBooz={this.handleNewBooz} />
      </div>
    );
  }
}

export default App;
