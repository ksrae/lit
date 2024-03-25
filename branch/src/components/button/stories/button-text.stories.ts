import type { Meta, StoryObj } from '@storybook/web-components';
import { ButtonText, ButtonProps } from './button-text';

const meta: Meta<ButtonProps> = {
  title: 'Web-component/Button',
  tags: ['false'],
  render: (args) => ButtonText(args),
  argTypes: {
    value: [],
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Text: Story = {
  args: {
    value: 'submit',
  },
};
