import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Login from './index';

const stories = storiesOf('Login', module)
    .addDecorator(centered);

stories.add(
    'Default',
    () => (<Login/>),
);
