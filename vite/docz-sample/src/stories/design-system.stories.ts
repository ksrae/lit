import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';
import { DesignSystem, DesignSystemProps } from './design-system';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Web-component/DesignSystem',
  tags: ['false'],
  render: (args) => DesignSystem(args),
  argTypes: {
		className: ['primary', 'default'],
  },
  args: { onClick: fn() },
} satisfies Meta<DesignSystemProps>;

export default meta;
type Story = StoryObj<DesignSystemProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
		className: 'primary'
  },
};
export const Default: Story = {
  args: {
		className: 'default'
  },
};
