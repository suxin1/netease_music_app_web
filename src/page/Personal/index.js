import React, {Component} from "react";
import logo from "../../logo.svg";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {layoutPicker} from "../../app/router";
import Page from "../../components/Page";

class Personal extends Component {
  render() {
    return (
      <Page topWhiteSpace={true}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Page>
    );
  }
}

export default Personal;
