import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function StudySources (props) {

  return (
    <Element name="connected-study">
      <section {...props} className={`${props.className} section-connected`}>
      <h2><FormattedMessage id="Connected.title" /></h2>
        <p>
          <FormattedMessage id="Connected.text" />
        </p>
        <p>
          <i><FormattedMessage id="Connected.resources" /></i>
        </p>
        <ul>
          <FormattedMessage id="Connected.list">
            {(listItems)=>{
              var output = [];
              listItems.forEach((item, index) => {
                output.push(<li>{item.label}</li>);
              });
              return output;
            }}
          </FormattedMessage>
        </ul>
      </section>
    </Element>
  )
}
