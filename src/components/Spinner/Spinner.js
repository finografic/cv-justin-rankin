/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import { styles } from './Spinner.styles';

export const Spinner = (loading = true) => (
  <div className="spinner">
    <BeatLoader css={styles} size={10} color="#000000" loading={loading} />
  </div>
);

export const SpinnerRoute = (loading = true) => (
  <div className="spinner spinner-page">
    <BeatLoader css={styles} size={10} color="#000000" loading={loading} />
  </div>
);
