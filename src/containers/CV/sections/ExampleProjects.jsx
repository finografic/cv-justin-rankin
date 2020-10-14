import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

export default function ExampleProjects (props) {

  const { messages: { PROJECTS } } = getIntl();

  return (
    <Element name="example-projects">
      <section {...props} className={`${props.className} section-example-projects`}>
        <h2><FormattedMessage id={PROJECTS.title} /></h2>
        { 
          PROJECTS.list.map((text, i) => 
            <div key={i}>
              <strong className="accent"><FormattedMessage id={PROJECTS.list[i].name} /></strong>
              <span> - </span>
              { 
                // PROJECTS.list[i].text.map((paragraph, k) => <p key={k}>{paragraph}</p>)
                PROJECTS.list[i].text.map((paragraph, k) => {
                  (i === 0) && <span>{paragraph}<br /></span>
                    || <div>{paragraph}</div>
                }) 
              }
              <span className="level"><FormattedMessage id={PROJECTS.list[i].text} /></span>
            </div>
          ) 
        }
      </section>
    </Element>
  );
}
