import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<h1 class=" mx-8 text-sky-400 inline-block align-middle">
        Test React
        </h1>
        );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);