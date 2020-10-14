import React from 'react';
import { Element} from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';
import { GoLinkExternal } from "react-icons/go";

export default function WorkExperience (props) {

  const { messages: { EXPERIENCE, words } } = getIntl();

  return (
    <Element name="work-experience">
      <section  {...props} className={`${props.className} section-work-experience`}>
      <h2><FormattedMessage id={EXPERIENCE.title} /></h2>
        {  
          EXPERIENCE.list.map((job, i) => {
            return (
              <p key={i}>
                <h3>
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id={job.company} /><GoLinkExternal className="icon-www" /> 
                  </a>
                </h3>
                <strong><FormattedMessage id={job.position} /></strong><br />
                <i><FormattedMessage id={job.time} /> / <FormattedMessage id={job.location} /></i><br />
                { job.text.map((paragraph, k) => <div key={k}><FormattedMessage id={job.text[k]} /></div>) }
                <div style={{marginBottom:'15px'}}>
                  <strong><FormattedMessage id={words['Technologies']} />: </strong>
                  <FormattedMessage id={job.technologies} />
                </div>
              </p>
            );
          })
        }
      </section>
    </Element>
  )
}
