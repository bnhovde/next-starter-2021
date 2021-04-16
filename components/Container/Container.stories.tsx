import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Container from '.';
import Block from 'components/Block';

export default {
  title: 'Layout/Container',
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: ['min', 'narrow', 'regular', 'wide', 'full'],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em 0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  <Container {...args}>
    <h2>Regular Container</h2>
    <Block top={2}>
      <strong>The Container component adds a max width and responsive side gutters</strong>
    </Block>
    <Block top={1}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam facilis voluptatibus
        aliquid velit cumque esse quod vitae. Consectetur cupiditate magnam laborum consequatur
        corporis dolorem iure tempore perspiciatis! Expedita, magni.
      </p>
    </Block>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  width: 'regular',
};
