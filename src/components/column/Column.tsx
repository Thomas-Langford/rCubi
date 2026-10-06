import type { CSSProperties, ReactNode } from 'react';
import styles from './Column.module.css';
import type { PaddingProps } from '../../types/propTypes';
import { Box } from '../box/Box';

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnProps extends PaddingProps {
  children: ReactNode;
  /** The number of columns to occupy at the small breakpoint */
  sm?: ColumnSpan;
  /** The number of columns to occupy at the medium breakpoint */
  md?: ColumnSpan;
  /** The number of columns to occupy at the large breakpoint */
  lg?: ColumnSpan;
}

type ColumnStyle = CSSProperties & {
  '--col-width-sm'?: string;
  '--col-width-md'?: string;
  '--col-width-lg'?: string;
};

const getColumnWidth = (span: ColumnSpan): string => `${(span / 12) * 100}%`;

/**
 * A single column.
 *
 * Occupies a number of columns of the parent container using the defined `sm`,
 * `md`, and `lg` props.
 *
 * If more than 12 columns are defined for a row, the columns will wrap to the next row
 */
export const Column = ({ children, sm, md, lg, ...props }: ColumnProps) => {
  const style: ColumnStyle = {
    '--col-width-sm': sm ? getColumnWidth(sm) : '0',
    '--col-width-md': md ? getColumnWidth(md) : '0',
    '--col-width-lg': lg ? getColumnWidth(lg) : '0',
  };

  const classes = [
    styles.column,
    sm !== undefined ? styles.sm : '',
    md !== undefined ? styles.md : '',
    lg !== undefined ? styles.lg : '',
  ];

  return (
    <Box {...props} className={classes.join(' ').trim()} style={style}>
      {children}
    </Box>
  );
};
