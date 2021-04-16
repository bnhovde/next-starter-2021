import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '.';

import Container from 'components/Container';

export default {
  title: 'Components/Button',
  argTypes: {
    disabled: { control: 'boolean' },
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

const Template: Story = (args) => <Button {...args}>Velg denne</Button>;

export const Default = Template.bind({});
Default.args = {
  full: false,
  disabled: false,
};

export const Full = Template.bind({});
Full.args = {
  full: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  full: false,
  disabled: true,
};
