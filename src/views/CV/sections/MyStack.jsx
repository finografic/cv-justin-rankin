import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function MyStack(props) {

  return (
    <Element name="my-stack">
      <section {...props} className={`${props.className} section-my-stack`}>
        <h2><FormattedMessage id="Stack.title" /></h2>
        <div>
          <ul>
            <FormattedMessage id="Stack.list">
              {(listItems) => {
                var output = [];
                listItems.forEach((item, index) => {
                  output.push(<li>{item}</li>);
                });
                return output;
              }}
            </FormattedMessage>
          </ul>
        </div>
      </section>
    </Element>
  )
}
