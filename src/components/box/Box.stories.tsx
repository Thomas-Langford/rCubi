import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';
import type { Spacing } from '../../types/cssTypes';

const meta = {
  title: 'Components/Box',
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * At it's simplest, the Box is a div with the CSS property `display: flex`.
 */
export const Default: Story = {
  args: {
    children: 'box content',
  },
};

/**
 * The flex direction will set the 'main axis' and the order in which child
 * elements are displayed. Child elements
 *
 * `row` and `row-reverse` use a horizontal main axis, meaning child elements will
 * will be placed beside each other in a single column
 *
 * `column` and `column-reverse` use a vertical main axis, meaning child elements will
 * be placed on top of each other in a single column
 */
export const FlexDirectionColumn: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    flexDirection: 'column',
  },
};

export const FlexDirectionRow: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    flexDirection: 'row',
  },
};

/**
 * Justify content determines how remaining space along the main axis is distributed
 * before, between, and after the flex items. This prop will not do anything if
 * all the space on the main axis is used (i.e. with a `width: 100%` flex item)
 *
 * If no value is specified `flex-start` is used by default.
 *
 * `flex-start` will place all flex items next to each other with no space in
 * between at the 'start' of the main axis. (left for row, right for row-reverse,
 * top for column, and bottom for column-reverse)
 */
export const JustifyContentFlexStart: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    justifyContent: 'flex-start',
  },
};

/**
 * `flex-end` will place all flex items next to each other with no space in
 * between at the 'end' of the main axis
 */
export const JustifyContentFlexEnd: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    justifyContent: 'flex-end',
  },
};

/**
 * `center` will center the flex items on the main axis.
 */
export const JustifyContentCenter: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    justifyContent: 'center',
  },
};

/**
 * `space-between` will allocate equal space between each flex item, but will not
 * allocate any space before the first item or after the last item.
 */
export const JustifyContentSpaceBetween: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    justifyContent: 'space-between',
  },
};

/**
 * `space-around` will allocate equal space before and after each flex item.
 */
export const JustifyContentSpaceAround: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    justifyContent: 'space-around',
  },
};

/**
 * `space-evenly` will allocate equal space between each item, as well as
 * before the first item and after the last item
 */
export const JustifyContentSpaceEvenly: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    justifyContent: 'space-evenly',
  },
};

/**
 * `alignItems` determines how extra space in the <b>cross axis</b> (the axis perpendicular to the main axis)
 * is distributed. Note that if no extra space is available in the cross
 * axis, the value of this prop will not do anything.
 *
 * By default, `alignItems` is set to `stretch` which will cause flex items to expand to
 * fill the cross axis.
 */
export const AlignItemsStretch: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    alignItems: 'stretch',
    height: '10rem',
  },
};

/**
 * `flex-start` will align flex items at the start of the cross axis
 */
export const AlignItemsFlexStart: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    alignItems: 'flex-start',
    height: '10rem',
  },
};

/**
 * `flex-start` will align flex items at the end of the cross axis
 */
export const AlignItemsFlexEnd: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    alignItems: 'flex-end',
    height: '10rem',
  },
};

/**
 * `center` will allocate equal space before and after the items
 */
export const AlignItemsCenter: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    alignItems: 'center',
    height: '10rem',
  },
};

/**
 * `baseline` will align the text baselines of each flex item.
 */
export const AlignItemsBaseline: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid', paddingTop: `${i}rem` }}>
        box content {i + 1}
      </Box>
    )),
    alignItems: 'baseline',
    height: '10rem',
  },
};

/**
 * Gap uses a set of 6 predefined padding sizes for consistent styling:
 * - `none`
 * - `xs`: 8px
 * - `sm`: 12px
 * - `md`: 16px
 * - `lg`: 24px
 * - `xl`: 32px
 *
 * The `gap` prop defines the amount of whitespace between each row and column within
 * the box
 */
export const Gap: Story = {
  args: {
    children: Array.from({ length: 21 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    gap: 'xl',
    style: { flexWrap: 'wrap' },
  },
};

/**
 * `rowGap` will only add whitespace between rows
 */
export const RowGap: Story = {
  args: {
    children: Array.from({ length: 21 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    rowGap: 'xl',
    style: { flexWrap: 'wrap' },
  },
};

/**
 * `columnGap` will only add whitespace between rows
 */
export const ColumnGap: Story = {
  args: {
    children: Array.from({ length: 21 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    columnGap: 'xl',
    style: { flexWrap: 'wrap' },
  },
};

/**
 * Padding uses a set of 6 predefined padding sizes for consistent styling:
 * - `none`
 * - `xs`: 8px
 * - `sm`: 12px
 * - `md`: 16px
 * - `lg`: 24px
 * - `xl`: 32px
 *
 * The `padding` prop will set the padding for all 4 sides of the box.
 * If a `paddingX`, `paddingY`, `paddingTop`, `paddingBottom`, `paddingRight`, or `paddingLeft`
 * is also defined, those values will take priority the padding value for their respective
 * side(s)
 */
export const Padding: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box padding={val} style={{ border: 'solid' }}>{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

/**
 * Sets paddingTop and paddingBottom. If `paddingTop` or `paddingBottom` are also
 * supplied, then those will take priority for their respective side.
 */
export const PaddingY: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box paddingY={val} style={{ border: 'solid' }}>{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

/**
 * Sets paddingLeft and paddingRight. If `paddingLeft` or `paddingRight` are also
 * supplied, then those will take priority for their respective side.
 */
export const PaddingX: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box paddingX={val} style={{ border: 'solid' }}>{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const PaddingTop: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          paddingTop={val}
          style={{ border: 'solid' }}
        >{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const PaddingRight: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          paddingRight={val}
          style={{ border: 'solid' }}
        >{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const PaddingBottom: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          paddingBottom={val}
          style={{ border: 'solid' }}
        >{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const PaddingLeft: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          paddingLeft={val}
          style={{ border: 'solid' }}
        >{`${val} padding`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

/**
 * Margin uses a set of 6 predefined margin sizes for consistent styling:
 * - `none`
 * - `xs`: 8px
 * - `sm`: 12px
 * - `md`: 16px
 * - `lg`: 24px
 * - `xl`: 32px
 *
 * The `margin` prop will set the margin for all 4 sides of the box.
 * If a `marginX`, `marginY`, `marginTop`, `marginBottom`, `marginRight`, or `marginLeft`
 * is also defined, those values will take priority the margin value for their respective
 * side(s)
 */
export const Margin: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box margin={val} style={{ border: 'solid' }}>{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

/**
 * Sets marginTop and marginBottom. If `marginTop` or `marginBottom` are also
 * supplied, then those will take priority for their respective side.
 */
export const MarginY: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box marginY={val} style={{ border: 'solid' }}>{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

/**
 * Sets marginLeft and marginRight. If `marginLeft` or `marginRight` are also
 * supplied, then those will take priority for their respective side.
 */
export const MarginX: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box marginX={val} style={{ border: 'solid' }}>{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const MarginTop: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box marginTop={val} style={{ border: 'solid' }}>{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const MarginRight: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          marginRight={val}
          style={{ border: 'solid' }}
        >{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const MarginBottom: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          marginBottom={val}
          style={{ border: 'solid' }}
        >{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

export const MarginLeft: Story = {
  args: {
    children: (['none', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(
      (val) => (
        <Box
          marginLeft={val}
          style={{ border: 'solid' }}
        >{`${val} margin`}</Box>
      )
    ),
    alignItems: 'flex-start',
  },
};

/**
 * The `className` prop allows for user defined CSS classes to be applied to the box.
 * In this example, the `gap-md` class has been applied to the box.
 */
export const ClassName: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    className: 'gap-md',
  },
};

/**
 * The `style` prop allows for custom inline styling to be applied to the box.
 */
export const Style: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <Box key={i + 1} style={{ border: 'solid' }}>
        box content {i + 1}
      </Box>
    )),
    style: { backgroundColor: 'pink' },
  },
};
