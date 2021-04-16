import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import LED from '.';

import Container from 'components/Container';

export default {
  title: 'Components/LED',
  argTypes: {
    active: { control: 'boolean' },
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
  return <LED {...args} />;
};

export const Default = Template.bind({});
