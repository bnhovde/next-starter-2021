import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import ShowMore from '.';

export default {
  title: 'Components/ShowMore',
  argTypes: {
    openByDefault: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  return (
    <ShowMore name="example" {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas ea non, vel debitis
        ratione alias cum ad, incidunt deserunt, quam veritatis sed. Eius molestias repellat, ullam
        consequatur adipisci quasi.
      </p>
    </ShowMore>
  );
};

export const Default = Template.bind({});
Default.args = {
  openByDefault: false,
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  openByDefault: true,
};
