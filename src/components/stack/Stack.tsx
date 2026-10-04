import type { ReactNode } from 'react';
import { type Spacing } from '../../types/cssTypes';
import { Box } from '../box/Box';

interface StackProps {
  children: ReactNode;
  gap?: Spacing;
  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
}

export const Stack = ({
  children,
  gap,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: StackProps) => {
  return (
    <Box
      flexDirection="column"
      gap={gap}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
    >
      {children}
    </Box>
  );
};
