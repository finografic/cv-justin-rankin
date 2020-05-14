import React from "react";
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, } from '@fortawesome/pro-regular-svg-icons';
import { FormattedMessage } from 'react-intl';

export default function Education (props) {

  return (
    <Element name="education">
      <section  {...props} className={`${props.className} section-education`}>

      <h2><FormattedMessage id="Education.title" /></h2>
        <p>
          <strong>
            <FormattedMessage id="Education.university">
              {(university) => {
                return (<a href={university.url} target="_blank" rel="noopener noreferrer">
                  {university.name}
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="icon-www" />
                </a>);
              }}
            </FormattedMessage>
          </strong><br />
          <strong><FormattedMessage id="Education.diploma" /></strong><br />
          <i><FormattedMessage id="Education.location" /></i><br />
          <FormattedMessage id="Education.text" />
        </p>
      </section>
    </Element>
  )
}
