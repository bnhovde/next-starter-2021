import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import ModalHeader from '.';

export default {
  title: 'Components/ModalHeader',
  argTypes: {
    title: { control: 'text', defaultValue: 'Modal title' },
  },
} as Meta;

const Template: Story = (args) => <ModalHeader title={args.title} />;

export const Default = Template.bind({});
