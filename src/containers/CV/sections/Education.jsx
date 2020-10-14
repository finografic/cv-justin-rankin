import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';
import { GoLinkExternal } from "react-icons/go";

export default function Education (props) {

  const { messages: { EDUCATION } } = getIntl();

  return (
    <Element name="education">
      <section  {...props} className={`${props.className} section-education`}>
        <h2><FormattedMessage id={EDUCATION.title} /></h2>
        <p>
          <strong>
            <a href={EDUCATION.university.url} target="_blank" rel="noopener noreferrer">
              <FormattedMessage id={EDUCATION.university.name} /> 
              {/*<IconExternalLinkAlt className="icon-www" /> */}
              <GoLinkExternal className="icon-www" /> 
            </a>
          </strong><br />
          <strong><FormattedMessage id={EDUCATION.diploma} /></strong><br />
          <i><FormattedMessage id={EDUCATION.location} /></i><br />
          <FormattedMessage id={EDUCATION.text} />
        </p>
      </section>
    </Element>
  )
}
