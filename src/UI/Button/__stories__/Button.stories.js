import React, { Fragment } from "react";

import { Button } from "../Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    type: {},
  },
};

const Template = (args) => {
  return (
    <>
      <div>
        <Button size="large" {...args}>
          Button
        </Button>
        <Button size="medium" {...args}>
          Button
        </Button>
        <Button size="small" {...args}>
          Button
        </Button>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
  border: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
  border: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
