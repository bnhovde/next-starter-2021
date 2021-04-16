import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Card from '.';
import CardGrid from 'components/CardGrid';

export default {
  title: 'Components/Card',
  argTypes: {
    full: { control: 'boolean' },
    animated: { control: 'boolean' },
    outlined: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Card {...args} />;

const GridTemplate: Story = (args) => (
  <CardGrid>
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
  </CardGrid>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Text here',
};

export const Grid = GridTemplate.bind({});
Grid.args = {
  children: 'Text here',
};
