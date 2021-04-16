import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useContext } from 'react';
import { NotificationsController } from '.';
import Main from '../Main';
import Button from '../Button';
import Block from '../Block';
import Flex from '../Flex';
import { UiProvider } from 'context/UiContext';
import UiContext from 'context/UiContext';

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
  title: 'Modules/Notifications',
} as Meta;

const Inner: React.FC = () => {
  const { addNotification } = useContext(UiContext);

  const trigger = (isAlert?: boolean) => {
    addNotification({
      title: 'En feil oppsto',
      text: 'Notification text goes here, can be any length!',
      isAlert: isAlert,
    });
  };

  return (
    <div style={{ height: '80vh' }}>
      <Flex align="center" justify="center" full column>
        <Button onClick={() => trigger()}>Trigger notification</Button>
        <Block top={4}>
          <Button onClick={() => trigger(true)}>Trigger alert notification</Button>
        </Block>
      </Flex>
    </div>
  );
};

const Template: Story = () => (
  <UiProvider>
    <Main>
      <NotificationsController />
      <Inner />
    </Main>
  </UiProvider>
);

export const Default = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  items: items,
};
