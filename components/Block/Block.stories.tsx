import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import BlockComponent from '.';

export default {
  title: 'Layout',
  argTypes: {
    top: {
      control: { type: 'range', min: 0, max: 7, step: 1 },
    },
    bottom: {
      control: { type: 'range', min: 0, max: 7, step: 1 },
    },
    topMobile: {
      control: { type: 'range', min: 0, max: 7, step: 1 },
    },
    bottomMobile: {
      control: { type: 'range', min: 0, max: 7, step: 1 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', overflow: 'auto', height: '100vh', background: '#f6f9fc' }}>
        <div style={{ overflow: 'auto', background: 'var(--col-2)' }}>
          <div className="sb-block-wrapper">
            <Story />
          </div>
        </div>
        <small style={{ marginTop: '40px' }}>
          * Block adds spacing to contents, colors added for illustrating size.
        </small>
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  const { top, topMobile, bottom, bottomMobile } = args;

  const topValue = topMobile ? [topMobile, top] : top;
  const bottomValue = bottomMobile ? [bottomMobile, bottom] : bottom;

  return (
    <BlockComponent top={topValue} bottom={bottomValue}>
      <p>Block contents</p>
    </BlockComponent>
  );
};

export const Block = Template.bind({});
Block.args = {
  top: 0,
  bottom: 0,
};
