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

/**
 * By default, each `<Column>` will expand to fill the remaining space equally
 */
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
        <Column>
          <Testbox backgroundColor="lightgreen" />
        </Column>
      </>
    ),
  },
};

/**
 * Column widths can be defined via the `sm` prop. If no `md` or `lg`
 * width are supplied, then the `sm` width will apply across all breakpoints.
 *
 * If the same width is desired for all breakpoints, provide a value for `sm`
 */
export const SmallBreakpoint: Story = {
  args: {
    children: (
      <>
        <Column sm={1}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column sm={2}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column sm={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column sm={6}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
      </>
    ),
  },
};

/**
 * Columns will resize at each breakpoint to the provided width. If no width is
 * provided for a breakpoint, it will default to the next smallest breakpoint
 * that is provided. If no smaller breakpoint is provided, it will use default
 * behavior instead.
 *
 * Columns will wrap to the next row if they exceed 12 columns
 *
 * A common use case is to make the small breakpoint the full width, the medium
 * break point half the width, and the large breakpoint 1/3 or 1/4 width.
 */
export const AllBreakpoints: Story = {
  args: {
    children: (
      <>
        <Column sm={12} md={6} lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column sm={12} md={6} lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column sm={12} md={6} lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column sm={12} md={6} lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
      </>
    ),
  },
};

/**
 * Columns will use default behavior if no column width prop is supplied
 * for the current breakpoint or smaller. (i.e. current breakpoint is md, but
 * only a lg width is provided)
 */
export const DefaultBehaviorOnPropOmission: Story = {
  args: {
    children: (
      <>
        <Column lg={6}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column lg={12}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
      </>
    ),
  },
};

/**
 * Columns can be nested within each other. Inner `<Columns>` components can
 * still use the full 12 tracks.
 */
export const ColumnNesting: Story = {
  args: {
    children: (
      <>
        <Column lg={6}>
          <Columns>
            {Array.from({ length: 12 }).map((_, i) => (
              <Column sm={1}>
                <Testbox backgroundColor="lightgreen">{i + 1}</Testbox>
              </Column>
            ))}
          </Columns>
        </Column>
        <Column lg={3}>
          <Columns>
            {Array.from({ length: 4 }).map((_, i) => (
              <Column sm={3}>
                <Testbox backgroundColor="lightgreen">{i + 1}</Testbox>
              </Column>
            ))}
          </Columns>
        </Column>
        <Column lg={3}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
        <Column lg={12}>
          <Testbox backgroundColor="lightgreen" />
        </Column>
      </>
    ),
  },
};
