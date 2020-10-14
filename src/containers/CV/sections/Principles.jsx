import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

export default function Principles (props) {

  const { messages: { PRICIPLES } } = getIntl();

  return (
    <Element name="principles">
      <section {...props} className={`${props.className} section-principles`}>
        <h2><FormattedMessage id={PRICIPLES.title} /></h2>
        <ul>
          { PRICIPLES.list.map((text, i) => <li key={i}><FormattedMessage id={PRICIPLES.list[i]} /></li>) }
        </ul>
      </section>
    </Element>
  )
}
