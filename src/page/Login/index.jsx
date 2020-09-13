import React from "react";
import {Login} from "./Login";
import {login as loginAction} from "../../store/user/action";

import {connect} from "react-redux";


export default connect(
  (state) => ({}),
  {
    dispatchLogin: loginAction
  }
)(Login);
