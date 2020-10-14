import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

export default function MyStack(props) {

  const { messages: { STACK } } = getIntl();

  return (
    <Element name="my-stack">
      <section {...props} className={`${props.className} section-my-stack`}>
      <h2><FormattedMessage id={STACK.title} /></h2>
        <div>
        <ul>
          { STACK.list.map((text, i) => <li key={i}><FormattedMessage id={STACK.list[i]} /></li>) }
        </ul>
        </div>
      </section>
    </Element>
  )
}
