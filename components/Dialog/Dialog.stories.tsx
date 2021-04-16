import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Dialog from '.';

export default {
  title: 'Components/Dialog',
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => (
  <Dialog isOpen={args.isOpen} title="Warning" message="Are you sure?" />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
