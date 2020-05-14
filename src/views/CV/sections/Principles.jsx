import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function Principles (props) {

  return (
    <Element name="principles">
      <section {...props} className={`${props.className} section-principles`}>
      <h2><FormattedMessage id="Principles.title" /></h2>
        <ul>
          <FormattedMessage id="Principles.list">
            {(listItems)=>{
              var output = [];
              listItems.forEach((item, index) => {
                output.push(<li>{item}</li>);
              });
              return output;
            }}
          </FormattedMessage>
        </ul>
      </section>
    </Element>
  )
}
