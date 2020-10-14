import React from 'react';
import { Element} from 'react-scroll';
import { FormattedMessage } from 'react-intl';

// DEPRECATED: ALL @fortawesome/FontAwesome on npmjs.com EXPIRED !!
// NEW: SVG VERSIONS (SVGs are still FontAwesome v5)
import { ReactComponent as IconExternalLinkAlt } from 'assets/icons/external-link-alt.svg';

export default function WorkExperience (props) {

  return (
    <Element name="work-experience">
      <section  {...props} className={`${props.className} section-work-experience`}>
        <h2><FormattedMessage id="Experience.title" /></h2>
        <p>
          <FormattedMessage id="Experience.list">
            {(jobs)=>{
              var output = [];
              jobs.forEach((job, index) => {
                output.push( <h3>
                              <a href={job.url} target="_blank" rel="noopener noreferrer">
                                {job.company}<IconExternalLinkAlt className="icon-www" />
                              </a>
                            </h3>);
                output.push(<strong>{job.position}</strong>);
                output.push(<br />);
                output.push(<i>{job.time} / {job.location}</i>);
                output.push(<br />);
                job.text.forEach((p, index) => {
                  // TEXT ARRAY -> PARAGRAPHS
                  output.push(<div>{p}</div>);
                });
                output.push(<div style={{marginBottom:'15px'}}>
                              <strong><FormattedMessage id="words.Technologies" />: </strong>
                              {job.technologies}
                            </div>);
              });
              return output;
            }}
          </FormattedMessage>
        </p>
      </section>
    </Element>
  )
}
