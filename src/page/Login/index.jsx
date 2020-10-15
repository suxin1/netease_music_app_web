import React, { Component } from "react";
import { Login } from "./Login";
import { login as loginAction } from "../../store/user/action";

import { connect } from "react-redux";

class LoginWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(params) {
    const { dispatchLogin, history } = this.props;
    dispatchLogin(params)
      .then((res) => {
        history.push("/personal");
      })
      .catch((error) => {});
  }

  render() {
    return <Login {...this.props} onSubmit={this.handleLogin} />;
  }
}

export default connect((state) => ({}), {
  dispatchLogin: loginAction,
})(LoginWrapper);
