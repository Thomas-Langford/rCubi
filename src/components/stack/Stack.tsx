import type { ReactNode } from 'react';
import { Box, type BoxProps } from '../box/Box';
import type { LayoutProps, StyleProps } from '../../types/propTypes';

export interface StackProps extends LayoutProps, StyleProps {
  children: ReactNode;
}

/**
 * Aligns child components vertically in a stack.
 *
 * See `Box` documentation for details on props.
 *
 * Shorthand for `<Box flexDirection: 'column'>`.
 */
export const Stack = ({ ...props }: BoxProps) => {
  return <Box {...props} flexDirection="column" />;
};
