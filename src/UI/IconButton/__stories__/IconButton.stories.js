import React from "react";
import svgIcon from "../../../stories/assets/repo.svg";

import Icon from "../../Icon";
import IconButton from "../IconButton";

export default {
  title: "UI/IconButton",
  component: IconButton,
};

export const IconWithTitle = (args) => (
  <IconButton
    label="按钮"
    icon={
      <Icon size="small">
        <img src={svgIcon} alt="" />
      </Icon>
    }
  />
);
