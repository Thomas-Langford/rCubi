import type { CSSProperties, ReactNode } from 'react';
import styles from './Box.module.css';
import {
  type AlignItems,
  type FlexDirection,
  type JustifyContent,
  type Spacing,
} from '../../types/cssTypes';
import {
  getClassString,
  getPaddingClassname,
  getSpacingClassname,
} from '../../utilities/cssUtils';

interface BoxProps {
  children: ReactNode;

  /**
   * Determines the main axis of the flex box.
   * 'row' will lay out child components side by side
   * 'row-reverse' will lay out child components side by side in reverse order
   * 'column' will lay out child components in a vertical stack
   * 'column-reverse' will lay out child components in a vertical stack in reverse order
   */
  flexDirection?: FlexDirection;

  /** This defines the alignment along the main axis. */
  justifyContent?: JustifyContent;

  /** This defines the default behavior for how flex items are laid out along the cross axis on the current line */
  alignItems?: AlignItems;

  /** Controls the white space between child rows and columns */
  gap?: Spacing;

  /** Controls the white space between child rows*/
  rowGap?: Spacing;

  /** Controls the white space between child columns */
  columnGap?: Spacing;

  /** Controls the padding on all sides of the component */
  padding?: Spacing;

  /** Controls the padding on the left and right sides of the component */
  paddingX?: Spacing;

  /** Controls the padding on the top and bottom sides of the component */
  paddingY?: Spacing;

  /** Controls the padding on the top of the component */
  paddingTop?: Spacing;

  /** Controls the padding on the right of the component */
  paddingRight?: Spacing;

  /** Controls the padding on the bottom of the component */
  paddingBottom?: Spacing;

  /** Controls the padding on the left of the component */
  paddingLeft?: Spacing;
}

type BoxStyle = CSSProperties & {
  '--box-flex-direction': string | undefined;
  '--box-justify-content': string | undefined;
  '--box-align-items': string | undefined;
};

export const Box = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  rowGap,
  columnGap,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: BoxProps) => {
  const padTopSpacing = paddingTop ?? paddingY ?? padding ?? undefined;
  const padRightSpacing = paddingRight ?? paddingX ?? padding ?? undefined;
  const padBottomSpacing = paddingBottom ?? paddingY ?? padding ?? undefined;
  const padLeftSpacing = paddingLeft ?? paddingX ?? padding ?? undefined;

  const classes = getClassString([
    styles.box,
    getSpacingClassname('gap', gap),
    getSpacingClassname('row-gap', rowGap),
    getSpacingClassname('column-gap', columnGap),
    getPaddingClassname('top', padTopSpacing),
    getPaddingClassname('right', padRightSpacing),
    getPaddingClassname('bottom', padBottomSpacing),
    getPaddingClassname('left', padLeftSpacing),
  ]);

  const style: BoxStyle = {
    '--box-flex-direction': flexDirection,
    '--box-justify-content': justifyContent,
    '--box-align-items': alignItems,
  };

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
