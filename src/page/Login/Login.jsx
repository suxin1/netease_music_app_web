import React, { Component } from "react";
import linkState from "linkstate";

import { uiConfigure } from "../../config/styleConstants";
import { Page } from "../../components/Page";
import { Logo } from "../../components/Logo";

import {
  LoginFormContainer,
  LogoContainer,
  LimitedInput,
  LimitedButton,
} from "./styled";

const { theme } = uiConfigure;

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  };

  render() {
    return (
      <Page background={theme.primary}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LoginFormContainer onSubmit={this.handleSubmit}>
          <LimitedInput
            size="large"
            placeholder="手机号"
            onChange={linkState(this, "phone")}
          />
          <LimitedInput
            size="large"
            placeholder="密码"
            type="password"
            onChange={linkState(this, "password")}
          />
          <LimitedButton size="large" type="secondary">
            登陆
          </LimitedButton>
        </LoginFormContainer>
      </Page>
    );
  }
}
