import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import ButtonGroup from '.';

export default {
  title: 'Components/ButtonGroup',
  argTypes: {
    isToggle: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '340px', margin: '60px auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const toggleOptions = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
];

const options = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
];

const Template: Story = (args) => {
  const [selected, setSelected] = useState('2');
  return (
    <ButtonGroup
      name="example"
      options={args.isToggle ? toggleOptions : options}
      onChange={(e) => setSelected(e.currentTarget.value)}
      selected={selected}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const Toggle = Template.bind({});
Toggle.args = {
  isToggle: true,
};
