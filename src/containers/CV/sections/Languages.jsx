import React from 'react';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import { useStore } from 'store';

export default function Languags (props) {

  let { state } = React.useContext(ContextGlobal);

  return (
    <Element name="languages">
      <section {...props} className={`${props.className} section-languages ${LOCALE}`} >
      <h2><FormattedMessage id="Languages.title" /></h2>
        <ul>
          <FormattedMessage id="Languages.list">
            {(listItems)=>{
              var output = [];
              listItems.forEach((item, index) => {
                output.push(<li>
                              <strong>{item.language}</strong>
                              <span className="colon">:</span>
                              <span className="level">{item.level}</span>
                            </li>);
              });
              return output;
            }}
          </FormattedMessage>
        </ul>
      </section>
    </Element>
  )
}
