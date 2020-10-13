/** @jsx jsx */
import { lighten, darken, mix } from 'polished';
import { palettes } from './palettes';

export const getPalette = (name) => palettes[name].colors;
export const base = getPalette('standard');

export const baseColors = {
  // ADJUST
  a: lighten(0.2, base[0]),
  b: darken(0, base[1]),
  c: darken(0, base[2]),
  d: darken(0, base[3]),
  info: '#2196f3',
  success: '#4FD885',
  warning: '#ff9800',
  danger: '#f44336',
  toner: '#dddddd',
};

export const colors = {
  // BASE
  a: baseColors.a,
  b: baseColors.b,
  c: baseColors.c,
  d: baseColors.d,

  // LIGHTS
  light: {
    a: lighten(0.2, baseColors.a),
    b: lighten(0.15, baseColors.b),
    c: lighten(0.1, baseColors.c),
    d: lighten(0.1, baseColors.d),
  },

  // DARKS
  dark: {
    a: darken(0.2, baseColors.a),
    b: darken(0.15, baseColors.b),
    c: darken(0.25, baseColors.c),
    d: darken(0.2, baseColors.d),
  },

  // BASE
  default: baseColors.a,
  primary: baseColors.b,
  secondary: baseColors.c,

  // GREYS
  grey: '#888888',
  greyXXLight: '#f6f6f6',
  greyXLight: '#eeeeee',
  greyLight: '#cccccc',
  greyMed: '#aaaaaa',
  greyDark: '#333333',

  // TEXT
  text: '#444444',
  textLight: '#777777',
  textXlight: '#999999',
  textXXlight: '#bbbbbb',

  info: mix(0.7, baseColors.info, baseColors.b),
  success: mix(0.9, baseColors.success, baseColors.b),
  warning: mix(0.8, baseColors.warning, baseColors.b),
  danger: mix(0.8, baseColors.danger, baseColors.b),
};
