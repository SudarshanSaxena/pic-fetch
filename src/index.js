import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './components/bg.css';

export default class Index extends Component {
  render() {
    return <App></App>;
  }
}

ReactDOM.render(<Index />, document.querySelector("#root"));
