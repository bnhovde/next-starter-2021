import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Loader from '.';

import Container from 'components/Container';

export default {
  title: 'Components/Loader',
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: Story = () => {
  return <Loader />;
};

export const Default = Template.bind({});
