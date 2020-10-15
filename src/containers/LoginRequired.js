/* 用户访问需要登陆的页面时需要：
 *  1，弹出登录框。
 *  2, 跳转道登陆页面。
 * 时，可以用此组件，并做修改已合相应需求。
 * 用法：LoginRequiredWrapper(Component);
 */

import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function LoginRequired({ isLoggedIn, children }) {
  return <>{isLoggedIn ? children : <Redirect to="/login" />}</>;
}

const mapStateToProps = (state) => {
  const {
    loginState: { isLoggedIn },
  } = state;
  return {
    isLoggedIn,
  };
};
const LoginRequiredConnected = connect(mapStateToProps)(LoginRequired);

export default function LoginRequiredWrapper(WrappedComponent) {
  return (props) => (
    <LoginRequiredConnected {...props}>
      <WrappedComponent {...props} />
    </LoginRequiredConnected>
  );
}
