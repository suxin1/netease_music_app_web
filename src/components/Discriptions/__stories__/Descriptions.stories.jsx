import React from "react";

import {Descriptions, Item} from "../Descriptions";

export default {
  title: "UI/Descriptions",
  component: Descriptions,
}

export const Horizontal = (args) => {
  return (
    <Descriptions {...args} columns={3}>
      <Item title="title">value</Item>
      <Item title="title">value</Item>
      <Item title="title">value</Item>
      <Item title="title" span={2}>value</Item>
      <Item title="title">value</Item>
      <Item title="title" span={3}>value</Item>
    </Descriptions>
  )
};
Horizontal.args = {};
