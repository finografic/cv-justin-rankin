/** @jsx jsx */
import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';
import { jsx } from '@emotion/core';
import { styles } from './Principles.styles';

export default function Principles (props) {

  const { messages: { PRICIPLES } } = getIntl();

  return (
    <Element name="principles">
      <section {...props} className={`${props.className} section-principles`} css={styles}>
        <h2><FormattedMessage id={PRICIPLES.title} /></h2>
        <ul>
          { 
            PRICIPLES.list.map((text, i) => 
              <li key={i}>
                <strong><FormattedMessage id={PRICIPLES.list[i].label} /></strong>
                <span className="colon"> </span>
                <FormattedMessage id={PRICIPLES.list[i].text} />
              </li>
            ) 
          }
        </ul>
      </section>
    </Element>
  )
}
