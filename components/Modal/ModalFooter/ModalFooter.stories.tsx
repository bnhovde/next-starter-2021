import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import ModalFooter from '.';

export default {
  title: 'Components/ModalFooter',
  argTypes: {
    confirmText: { control: 'text', defaultValue: 'Confirm' },
    cancelText: { control: 'text', defaultValue: '' },
  },
} as Meta;

const Template: Story = (args) => (
  <ModalFooter confirmText={args.confirmText} cancelText={args.cancelText} />
);

export const Default = Template.bind({});

export const WithCancel = Template.bind({});
WithCancel.args = {
  cancelText: 'Cancel',
};
