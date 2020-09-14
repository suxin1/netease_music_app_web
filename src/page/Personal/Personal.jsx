/* global linkState */
import React, {Component} from "react";
import logo from "../../logo.svg";
import {Page} from "../../components/Page";

export class Personal extends Component {
  state = {
    warn: "",
  };
  componentDidMount() {
    // this.props.login({phone: "13540239926", password: "ggg123456"})
  }

  render() {
    const {data: {playlist}} = this.props;
    return (
      <Page topWhiteSpace={true} background="#f8f8f8">

      </Page>
    );
  }
}
