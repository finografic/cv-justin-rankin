/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import Color from 'color';
import { colors, layout } from 'styles';
import { styles } from './Button.styles';

const isColor = (strColor) => {
  try {
    return Color(strColor);
  } catch (error) {
    console.error(error);
  }
};

export const Button = ({
  type = 'button',
  variant = 'solid',
  color,
  label,
  icon,
  iconPos,
  iconScale = 1.4,
  ...props
}) => {
  // LABEL + ICON ================================================== //

  // ICON POSITION CORRECTION, IF NECESSARY
  if (iconPos && iconPos !== 'left' && iconPos !== 'right') iconPos = 'left';

  const Content = () => (
    <React.Fragment>
      {icon && (!iconPos || iconPos === 'left') && icon}
      {label && <span>{label}</span>}
      {icon && iconPos === 'right' && icon}
    </React.Fragment>
  );

  // GENERATE SMART COLOR-SCHEME =================================== //

  let colorAlt;
  let stylesColor;
  let hoverFactor = 0.25;
  if (color && colors[color]) {
    color = Color(colors[color]);
  } else if (color && isColor(color)) {
    color = Color(color);
  } else {
    color = colors.default ? Color(colors.default).lighten(0.75) : Color(colors.primary);
  }

  // GET BG COLOR LUMINOSITY AND INTELLIGENTLY SET TEXT+ICON COLOR
  colorAlt = color.luminosity() <= 0.7 ? Color('white') : Color(colors.text);

  // DIMENSIONS, PADDING ETC... ====================================== //

  let borderRadius;
  let buttonScale;
  let buttonPadding;

  // INCLUDE THESE SPECIFIC STYLES HERE
  // THAT DEPEND ON PRESENCE OF LABEL
  // OR ICON-ONLY:
  if (icon && !label) {
    borderRadius = '50%';
    buttonScale = 1.2;
    buttonPadding = '0.1em 0.33em';
  } else {
    borderRadius = layout.borderRadius;
    buttonScale = 0.9;
    buttonPadding = '0.33em 1.5em';
  }

  // GENERATE CSS, DEPENDING ON variant PROP ========================== //

  switch (variant) {
    case 'outline':
      stylesColor = css`
        & {
          background-color: ${color.alpha(0).string()};
          color: ${color.hex()};
          border-color: ${color.hex()};
          padding: ${buttonPadding};
          border-radius: ${borderRadius};
          transform: scale(${buttonScale});
        }
        &:not([disabled]):hover {
          background-color: ${color.alpha(hoverFactor).string()};
          color: ${color.darken(hoverFactor).hex()};
          border-color: ${color.darken(hoverFactor).hex()};
        }
      `;
      break;
    case 'clear':
      stylesColor = css`
        & {
          background-color: ${color.alpha(0).string()};
          color: ${color.hex()};
          border-color: ${color.alpha(0).string()};
          padding: ${buttonPadding};
          border-radius: ${borderRadius};
          transform: scale(${buttonScale});
        }
        &:not([disabled]):hover {
          background-color: ${color.alpha(hoverFactor).string()};
          color: ${color.darken(hoverFactor).hex()};
          border-color: ${color.alpha(0).string()};
        }
      `;
      break;
    case 'solid':
    default:
      stylesColor = css`
        & {
          background-color: ${color.hex()};
          color: ${colorAlt.hex()};
          border-color: ${color.hex()};
          padding: ${buttonPadding};
          border-radius: ${borderRadius};
          transform: scale(${buttonScale});
        }
        &:not([disabled]):hover {
          background-color: ${color.darken(hoverFactor).hex()};
          color: ${colorAlt.hex()};        <Drawer />
      `;
      break;
  }

  const sytlesIconOnly = css`
    padding: 0.33em 0.5em;
  `;

  // =============================================================== //

  // CSS STYLES
  const buttonStyles = new Set();
  buttonStyles.add(styles);
  buttonStyles.add(stylesColor);
  !label && buttonStyles.add(sytlesIconOnly);
  iconScale &&
    buttonStyles.add(
      css`
        svg {
          transform: scale(${iconScale});
        }
        svg + span {
          margin-left: calc(0.4em * ${iconScale});
        }
        span + svg {
          margin-left: calc(0.4em * ${iconScale});
        }
      `,
    );

  // =============================================================== //

  return (
    <button type={type} aria-label={label} {...props} css={[...buttonStyles]}>
      <Content />
    </button>
  );
};

export const ButtonLink = (props) => (
  <Link to={props.to}>
    <Button {...props} />
  </Link>
);
