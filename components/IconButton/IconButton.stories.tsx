import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import IconButton from '.';

import allIcons from 'constants/icons';

export default {
  title: 'Components/IconButton',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.keys(allIcons).map((i) => i),
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

const Template: Story = (args) => <IconButton name="example" {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'avatar',
};
