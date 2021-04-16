import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Drawer from '.';

export default {
  title: 'Components/Drawer',
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => (
  <Drawer {...args}>
    <p></p>
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
