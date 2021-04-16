import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import A11yButton from '.';

import Container from 'components/Container';

export default {
  title: 'Components/A11yButton',
  argTypes: {
    text: { control: 'text', defaultValue: 'Error message' },
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
  return <A11yButton text={args.text} />;
};

export const Default = Template.bind({});
