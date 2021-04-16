import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Error from '.';

import Container from 'components/Container';

export default {
  title: 'Components/Error',
  argTypes: {
    text: { control: 'text', defaultValue: 'Skip to contents' },
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
    <Error>
      <p className="warning">{args.text}</p>
    </Error>
  );
};

export const Default = Template.bind({});
