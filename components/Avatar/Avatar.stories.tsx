import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Avatar from '.';

import Container from 'components/Container';

export default {
  title: 'Components/Avatar',
  argTypes: {
    initials: { control: 'text', defaultValue: 'AB' },
    theme: {
      control: {
        type: 'select',
        defaultValue: 'regular',
        options: ['regular', 'light', 'dark'],
      },
    },
  },
  decorators: [
    (Story) => (
      <Container>
        <div style={{ marginTop: '60px', maxWidth: '100px' }}>
          <Story />
        </div>
      </Container>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
