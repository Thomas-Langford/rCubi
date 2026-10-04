import type { ReactNode } from 'react';
import styles from './Columns.module.css';

interface ColumnsProps {
  children: ReactNode;
}

export const Columns = ({ children }: ColumnsProps) => {
  return <div className={styles.columns}>{children}</div>;
};
