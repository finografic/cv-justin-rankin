import React from 'react';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import { useStore, getCurrentLocale } from 'store';
import getIntl from 'utils/getIntl';

export default function Languags (props) {

  const { state } = useStore();
  const { LOCALE } = getCurrentLocale();
  const { messages: { LANGUAGES } } = getIntl();

  return (
    <Element name="languages">
      <section {...props} className={`${props.className} section-languages ${LOCALE}`} >
        <h2><FormattedMessage id={LANGUAGES.title} /></h2>
        <ul>
          { 
            LANGUAGES.list.map((text, i) => 
              <li key={i}>
                <strong><FormattedMessage id={LANGUAGES.list[i].language} /></strong>
                <span className="colon">:</span>
                <span className="level"><FormattedMessage id={LANGUAGES.list[i].level} /></span>
              </li>
            ) 
          }
        </ul>
      </section>
    </Element>
  )
}
