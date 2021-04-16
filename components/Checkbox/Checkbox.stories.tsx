import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Checkbox from '.';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    errorMessage: { control: 'text' },
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
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      name="test"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? setChecked(true) : setChecked(false);
      }}
      checked={checked}
      label="Ekstra"
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
