import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';
import { Testbox } from '../testbox/Testbox';

const meta = {
  title: 'Components/Box',
  component: Box,
  decorators: [
    (Story) => (
      <Testbox backgroundColor="lightblue">
        <Story />
      </Testbox>
    ),
  ],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3].map((a) => (
          <Testbox backgroundColor="lightgreen">
            <Box padding="xl">
              <h1>{a}</h1>
            </Box>
          </Testbox>
        ))}
      </>
    ),
    gap: 'xs',
  },
};
