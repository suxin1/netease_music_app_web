import React from 'react';

import { Button } from '../UI/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args}>{args.text || "Button"}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  text: "Primary",
  border: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  text: "Secondary"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  text: "Large"
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  text: "Small"
};
