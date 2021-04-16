import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Block from 'components/Block';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '.';

export default {
  title: 'Components/Modal',
  argTypes: {
    name: { control: 'text', defaultValue: 'example-modal' },
    title: { control: 'text', defaultValue: 'Modal title' },
    isOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => (
  <Modal name={args.name} {...args}>
    {args.title && <ModalHeader title={args.title} />}
    <ModalBody width="min">
      <Block>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate molestias
          consequatur ullam, et pariatur nobis? Eos earum nam ipsam reiciendis adipisci possimus
          amet quisquam, repudiandae, iure facilis odio aspernatur!
        </p>
      </Block>
      <Block top={2}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate molestias
          consequatur ullam, et pariatur nobis? Eos earum nam ipsam reiciendis adipisci possimus
          amet quisquam, repudiandae, iure facilis odio aspernatur!
        </p>
      </Block>
      <Block top={2}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate molestias
          consequatur ullam, et pariatur nobis? Eos earum nam ipsam reiciendis adipisci possimus
          amet quisquam, repudiandae, iure facilis odio aspernatur!
        </p>
      </Block>
    </ModalBody>
    <ModalFooter confirmText="Submit" />
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
