import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './Stack';
import { Testbox } from '../testbox/Testbox';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  decorators: [
    (Story) => (
      <Testbox backgroundColor="lightblue">
        <Story />
      </Testbox>
    ),
  ],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3].map((_) => (
          <Testbox backgroundColor="lightgreen" />
        ))}
      </>
    ),
    gap: 'xs',
  },
};
