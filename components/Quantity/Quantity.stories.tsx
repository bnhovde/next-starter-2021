import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Quantity from '.';

export default {
  title: 'Components/Quantity',
  argTypes: {
    minAmount: { control: 'number', defaultValue: 0 },
    maxAmount: { control: 'number', defaultValue: 100 },
    isSingleItem: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState(0);
  return (
    <Quantity
      id="example"
      label="aria label"
      value={value}
      onAdd={() => setValue(value + 1)}
      onRemove={() => setValue(value - 1)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  isSingleItem: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
