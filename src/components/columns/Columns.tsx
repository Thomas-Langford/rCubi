import styles from './Columns.module.css';
import { Box } from '../box/Box';
import { getClassString } from '../../utilities/cssUtils';
import type { LayoutProps, StyleProps } from '../../types/propTypes';
import type { ReactNode } from 'react';

interface ColumnsProps extends LayoutProps, StyleProps {
  children: ReactNode;
}

/**
 * `Columns` is the wrapper component for a 12 track grid that allows the child
 * `Column` components to resize to span a different number of columnsat 3
 * breakpoints based on the viewport width:
 * - small (sm): <768px
 * - medium (md): 768px-1023px
 * - large (lg): >1023px
 *
 * Column accepts `sm`, `md`, and `lg` props representing the number of grid columns
 * occupied at each. If a breakpoint is omitted, the nearest smaller breakpoint
 * value is inherited. If the current breakpoint is smaller than the smallest
 * specified breakpoint, columns will use default behavior.
 *
 * Column components will grow to fill remaining space within the Columns
 * equally by default (if no span values are supplied)
 *
 * `<Columns>` <i>must</i> be the direct parent of one or more `<Column>` components.
 *
 * If the number of columns occupied by child `<Column>` exceed 12, they will wrap to the
 * next row.
 */
export const Columns = ({ className, ...props }: ColumnsProps) => {
  return (
    <Box {...props} className={getClassString([styles.columns, className])} />
  );
};
