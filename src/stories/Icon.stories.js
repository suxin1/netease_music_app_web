import React from "react";
import svgIcon from "./assets/repo.svg";
import Icon from "../UI/Icon";

export default {
  title: "UI/Icon",
  component: Icon
}

export const IconWithTitle = (args) => <Icon label="按钮"><img src={svgIcon} alt=""/></Icon>
