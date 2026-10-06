import type { CSSProperties, ReactNode } from 'react';
import styles from './Box.module.css';
import {
  getClassString,
  getMarginClassname,
  getPaddingClassname,
  getSpacingClassname,
} from '../../utilities/cssUtils';
import type { FlexProps, LayoutProps, StyleProps } from '../../types/propTypes';

export interface BoxProps extends LayoutProps, FlexProps, StyleProps {
  children: ReactNode;
}

type BoxStyle = CSSProperties & {
  '--box-flex-direction': string | undefined;
  '--box-justify-content': string | undefined;
  '--box-align-items': string | undefined;
};

/**
 * The most basic layout primitive. This wraps flexbox behavior and
 * provides a number of convenient props for consistent styling, though manual
 * styling can be supplied through the `className` and `style` props.
 *
 * See the following link for an excellent explanation on all flexbox
 * properties, including those this component exposes:
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
export const Box = ({
  children,
  width,
  height,
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
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  className,
  style,
}: BoxProps) => {
  const padTopSpacing = paddingTop ?? paddingY ?? padding ?? undefined;
  const padRightSpacing = paddingRight ?? paddingX ?? padding ?? undefined;
  const padBottomSpacing = paddingBottom ?? paddingY ?? padding ?? undefined;
  const padLeftSpacing = paddingLeft ?? paddingX ?? padding ?? undefined;

  const marginTopSpacing = marginTop ?? marginY ?? margin ?? undefined;
  const marginRightSpacing = marginRight ?? marginX ?? margin ?? undefined;
  const marginBottomSpacing = marginBottom ?? marginY ?? margin ?? undefined;
  const marginLeftSpacing = marginLeft ?? marginX ?? margin ?? undefined;

  const classes = getClassString([
    styles.box,
    getSpacingClassname('gap', gap),
    getSpacingClassname('row-gap', rowGap),
    getSpacingClassname('column-gap', columnGap),
    getPaddingClassname('top', padTopSpacing),
    getPaddingClassname('right', padRightSpacing),
    getPaddingClassname('bottom', padBottomSpacing),
    getPaddingClassname('left', padLeftSpacing),
    getMarginClassname('top', marginTopSpacing),
    getMarginClassname('right', marginRightSpacing),
    getMarginClassname('bottom', marginBottomSpacing),
    getMarginClassname('left', marginLeftSpacing),
    className,
  ]);

  const inlineStyles: BoxStyle = {
    '--box-flex-direction': flexDirection,
    '--box-justify-content': justifyContent,
    '--box-align-items': alignItems,
    width,
    height,
    ...(style ?? {}),
  };

  return (
    <div className={classes} style={inlineStyles}>
      {children}
    </div>
  );
};
