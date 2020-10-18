import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

const Connected = (props) => {

  const { messages: { CONNECTED } } = getIntl();

  return (
    <Element name="connected-study">
      <section {...props} className={`${props.className} section-connected`}>
        <h2><FormattedMessage id={CONNECTED.title} /></h2>
        <p><FormattedMessage id={CONNECTED.text} /></p>
        <p><i><FormattedMessage id={CONNECTED.listSubtitle} /></i></p>
        <ul>
          { CONNECTED.list.map((text, i) => <li key={i}><FormattedMessage id={CONNECTED.list[i]} /></li>) }
        </ul>
      </section>
    </Element>
  )
}

export default Connected;