import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Select from '.';

export default {
  title: 'Components/Select',
  argTypes: {
    full: { control: 'boolean' },
    bold: { control: 'boolean' },
    inverted: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const options = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Really long text here pal!', value: '3' },
];

const Template: Story = (args) => {
  const [selected, setSelected] = useState('');

  return (
    <Select
      name="example"
      placeholder="Choose product"
      options={options}
      selected={selected}
      onChange={(e) => setSelected(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  full: false,
};

export const Full = Template.bind({});
Full.args = {
  full: true,
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
