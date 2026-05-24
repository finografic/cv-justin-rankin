import type { IconProps } from '@finografic/icons';
import type { Interpolation } from '@emotion/react';
import type { ReactElement, ReactNode } from 'react';

export type ContactSvgIconProps = IconProps & {
  css?: Interpolation;
};

/** Inline SVG contact mark — paths use `currentColor` for theme tinting. */
export function ContactSvgIcon({
  css,
  className = 'icon',
  children,
  viewBox = '0 0 24 24',
  ...props
}: ContactSvgIconProps & { children: ReactNode }): ReactElement {
  return (
    <svg
      aria-hidden
      className={className}
      css={css}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}
