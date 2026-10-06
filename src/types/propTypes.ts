import type { CSSProperties } from 'react';
import type {
  AlignItems,
  FlexDirection,
  JustifyContent,
  Spacing,
} from './cssTypes';

export interface PaddingProps {
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

export interface SizeProps {
  /**
   * How wide the box will be. Accepts any standard CSS width unit. If left blank,
   * the HTML default is 'auto'
   */
  width?: string;

  /**
   * How tall the box will be. Accepts any standard CSS width unit.  If left blank,
   * the HTML default is 'auto'
   */
  height?: string;
}

export interface LayoutProps extends SizeProps, PaddingProps {
  /** Controls the margin on all sides of the component */
  margin?: Spacing;

  /** Controls the margin on the left and right sides of the component */
  marginX?: Spacing;

  /** Controls the margin on the top and bottom sides of the component */
  marginY?: Spacing;

  /** Controls the margin on the top of the component */
  marginTop?: Spacing;

  /** Controls the margin on the right of the component */
  marginRight?: Spacing;

  /** Controls the margin on the bottom of the component */
  marginBottom?: Spacing;

  /** Controls the margin on the left of the component */
  marginLeft?: Spacing;
}

export interface FlexProps {
  /**
   * Determines the main axis of the flex box.  If left blank,
   * the HTML default is 'row'
   */
  flexDirection?: FlexDirection;

  /**
   * Defines the alignment of child elemts along the main axis. If left blank,
   * the HTML default is 'flex-start'
   */
  justifyContent?: JustifyContent;

  /**
   * Defines the default behavior for how flex items are laid out along the
   * cross axis on the current line. If left blank, the HTML default is 'stretch'
   */
  alignItems?: AlignItems;

  /** Controls the white space between child rows and columns */
  gap?: Spacing;

  /** Controls the white space between child rows*/
  rowGap?: Spacing;

  /** Controls the white space between child columns */
  columnGap?: Spacing;
}

export interface StyleProps {
  /** Custom CSS class(es) to apply */
  className?: string;

  /** Custom inline styling to apply */
  style?: CSSProperties;
}
