import type { Meta, StoryObj } from '@storybook/react-vite';
import { Columns } from '../columns/Columns';
import { Column } from './Column';
import { Testbox } from '../testbox/Testbox';

const meta = {
  title: 'Components/Column',
  component: Column,
  decorators: [
    (Story) => (
      <Columns>
        <Story />
      </Columns>
    ),
  ],
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Column>
        <Testbox backgroundColor="lightgreen" />
      </Column>
    ),
  },
};
