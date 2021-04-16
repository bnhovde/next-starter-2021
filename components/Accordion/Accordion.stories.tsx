import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Accordion from '.';

import Container from 'components/Container';

export default {
  title: 'Components/Accordion',
  argTypes: {
    openByDefault: { control: 'boolean' },
    gray: { control: 'boolean' },
    white: { control: 'boolean' },
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
    <Accordion name="example" text="Show more details" {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas ea non, vel debitis
        ratione alias cum ad, incidunt deserunt, quam veritatis sed. Eius molestias repellat, ullam
        consequatur adipisci quasi.
      </p>
    </Accordion>
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
