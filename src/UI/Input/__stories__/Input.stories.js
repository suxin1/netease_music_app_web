import React from "react";
import { Input } from "../index";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "小尺寸输入框",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "默认（中型）尺寸输入框",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "大尺寸输入框",
};
