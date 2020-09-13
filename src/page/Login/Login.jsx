import React, {Component} from 'react';
import {uiConfigure} from "../../config/styleConstants";
import {Page} from "../../components/Page";
import {Logo} from "../../components/Logo";

import {
  LoginFormContainer,
  LogoContainer,
  LimitedInput,
  LimitedButton
} from "./styled";

const {theme} = uiConfigure;

export class Login extends Component {
  render() {
    return (
      <Page background={theme.primary}>
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        <LoginFormContainer>
          <LimitedInput placeholder="手机号"/>
          <LimitedInput placeholder="密码" type="password"/>
          <LimitedButton type="secondary">手机登陆</LimitedButton>
        </LoginFormContainer>
      </Page>
    )
  }
}




