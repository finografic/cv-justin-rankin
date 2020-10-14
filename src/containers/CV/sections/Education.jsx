import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';
import { GoLinkExternal } from "react-icons/go";

// DEPRECATED: ALL @fortawesome/FontAwesome on npmjs.com EXPIRED !!
// NEW: SVG VERSIONS (SVGs are still FontAwesome v5)
// import { ReactComponent as IconExternalLinkAlt } from 'assets/icons/external-link-alt.svg';

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
