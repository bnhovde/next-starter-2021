import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Icon from '.';

export default {
  title: 'Components/Icon',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'regular', 'large'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  <>
    <Icon name="example" type={args.type} size={args.size} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  type: 'avatar',
};
