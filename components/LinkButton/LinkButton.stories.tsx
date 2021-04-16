import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import LinkButton from '.';

import Container from 'components/Container';

export default {
  title: 'Components/LinkButton',
  argTypes: {
    block: { control: 'boolean', defaultValue: false },
    isActive: { control: 'boolean', defaultValue: false },
    isWarning: { control: 'boolean', defaultValue: false },
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
  return (
    <LinkButton
      onClick={() => {
        console.log('clicked');
      }}
      {...args}
    >
      Se alle resturanter
    </LinkButton>
  );
};

export const Default = Template.bind({});
