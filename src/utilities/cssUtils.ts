import type { Direction, Spacing } from '../types/cssTypes';

export const getClassString = (classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getSpacingClassname = (
  property: string,
  spacing: Spacing | undefined
) => {
  if (spacing === undefined || spacing === 'none') {
    return '';
  }

  return `${property}-${spacing}`;
};

export const getPaddingClassname = (
  direction: Direction,
  spacing: Spacing | undefined
) => {
  return getSpacingClassname(`padding-${direction}`, spacing);
};
