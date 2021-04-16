import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Input from '.';

import Container from 'components/Container';

export default {
  title: 'Components/Input',
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Telefonnummer' },
    value: { control: 'text', defaultValue: '' },
    error: { control: 'text', defaultValue: '' },
    success: { control: 'text', defaultValue: '' },
    helpText: { control: 'text', defaultValue: '' },
    full: { control: 'boolean', defaultValue: true },
    disabled: { control: 'boolean', defaultValue: false },
  },
  decorators: [
    (Story) => (
      <Container>
        <div style={{ marginTop: '60px' }}>
          <Story />
        </div>
      </Container>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <Input
      name="example-input"
      placeholder="Telefonnummer"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  value: '+34 788 78',
  error: 'Invalid phone number',
};

export const Success = Template.bind({});
Success.args = {
  value: '41 42 45 97',
  success: 'Code has been sent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
