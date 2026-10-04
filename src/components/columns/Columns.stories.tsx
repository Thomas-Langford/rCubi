import type { Meta, StoryObj } from '@storybook/react-vite';
import { Columns } from './Columns';
import { Column } from '../column/Column';
import { Testbox } from '../testbox/Testbox';

const meta = {
  title: 'Components/Columns',
  component: Columns,
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Column>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column>
          <Testbox backgroundColor="lightgreen" />
        </Column>
      </>
    ),
  },
};
