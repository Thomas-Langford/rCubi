import type { ReactNode } from 'react';
import { Box } from '../box/Box';

interface TestboxProps {
  children?: ReactNode;
  border?: boolean; // Whether the box has a border. Default is true
  backgroundColor?: string; // Background color. Default is white
  padding?: number; // Padding in px. Default is 0
}

/**
 * TESTING AND DEBUG ONLY
 * Used to render border and content visible for testing
 */
export const Testbox = ({
  children,
  border = true,
  backgroundColor = '#ffffff',
  padding = 0,
}: TestboxProps) => {
  return (
    <Box
      style={{
        border: border ? 'solid' : 'none',
        backgroundColor,
        padding: `${padding}px`,
        height: children === undefined ? '60px' : undefined,
        width: '100%',
      }}
    >
      {children ?? null}
    </Box>
  );
};
