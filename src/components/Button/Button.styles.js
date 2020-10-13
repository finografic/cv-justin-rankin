/** @jsx jsx */
import { css } from '@emotion/core';

export const styles = css`
  /* RESET */
  appearance: none;
  outline: none;
  background: none;
  border: none;
  position: relative;
  overflow: hidden;

  /* Center text */
  display: flex;
  justify-content: center;
  align-items: center;

  /* border */
  border-width: 2px;
  border-style: solid;
  margin: 0 0.1em !important;
  /* padding: 0.33em 1em; */
  /* border-radius: 5px; */

  /* TEXT */
  font-size: 1em;
  font-weight: 600;

  /* UX */
  transition: background-color 300ms ease, border-color 300ms ease;
  transform: scale(0.9);

  &:disabled {
    opacity: 0.33;
    cursor: default;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  /* ICON */
  svg {
    vertical-align: bottom;
  }

  svg + span {
    margin-left: 0.25em;
  }

  span + svg {
    margin-left: 0.25em;
  }
`;
