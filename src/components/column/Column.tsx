import type { CSSProperties, ReactNode } from 'react';
import styles from './Column.module.css';

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnProps {
  children: ReactNode;
  sm?: ColumnSpan;
  md?: ColumnSpan;
  lg?: ColumnSpan;
}

type ColumnStyle = CSSProperties & {
  '--col-width-sm'?: string;
  '--col-width-md'?: string;
  '--col-width-lg'?: string;
};

const getColumnWidth = (span: ColumnSpan): string => `${(span / 12) * 100}%`;

export const Column = ({ children, sm, md, lg }: ColumnProps) => {
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
    <div className={classes.join(' ').trim()} style={style}>
      {children}
    </div>
  );
};
