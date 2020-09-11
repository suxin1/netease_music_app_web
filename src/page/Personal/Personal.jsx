/* global linkState */
import React, {Component} from "react";
import logo from "../../logo.svg";
import {Page} from "../../components/Page";

export class Personal extends Component {
  state = {
    warn: "",
  };
  componentDidMount() {
    this.props.login({phone: "13540239926", password: "ggg123456"})
  }

  render() {
    return (
      <Page topWhiteSpace={true}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.{this.state.warn}
          </p>
          <input onChange={linkState(this,"warn")}/>
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
