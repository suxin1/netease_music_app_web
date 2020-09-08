import React from 'react';

import { Button } from '../UI/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color',},
    textColor: {control: 'color'},
    type: {},
    size: {}
  },
};

const Template = (args) => <Button {...args}>{"Button"}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: 'Button',
  border: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
