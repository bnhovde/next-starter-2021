import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Notifications from '.';
import Flex from '../Flex';

const items = [
  {
    id: '123',
    title: 'Notification title',
    text: 'Action has been completed',
  },
  {
    id: '234',
    isAlert: true,
    title: 'Notification title',
    text: 'Action has been completed',
  },
  {
    id: '345',
    title: 'Notification title',
    text: 'Action has been completed',
  },
];

export default {
  title: 'Components/Notification',
  argTypes: {
    items: {
      control: 'array',
      defaultValue: items.slice(0, 1),
    },
  },
} as Meta;

const Template: Story = (args) => (
  <div style={{ height: '100vh' }}>
    <Flex align="center" justify="center" full>
      <Notifications
        items={args.items}
        onDismiss={() => {
          console.log('dismiss');
        }}
      />
    </Flex>
  </div>
);

export const Default = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  items: items,
};
