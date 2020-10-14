import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

// DEPRECATED: ALL @fortawesome/FontAwesome on npmjs.com EXPIRED !!
// NEW: SVG VERSIONS (SVGs are still FontAwesome v5)
import { ReactComponent as IconPhone } from 'assets/icons/phone.svg';
import { ReactComponent as IconEnvelope } from 'assets/icons/envelope.svg';
import { ReactComponent as IconGlobe } from 'assets/icons/globe.svg';
import { ReactComponent as IconLinkedinIn } from 'assets/icons/linkedin-in.svg';

export default function Contact (props) {

  return (
    <Element name="contact">
      <section {...props} className={`${props.className} section-contact`}>
        {/* <h2>CONTACT</h2> */}
        <h2><FormattedMessage id="Contact.title" /></h2>
        <ul className="no-bullets">
          <li style={{marginLeft:'-2px'}}>
            <a href="tel:+34603368787" target="_blank" rel="noopener noreferrer"  >
              <IconPhone className="icon-bullet" style={{marginLeft:'-1px', marginRight:'8px'}}/>+34.603.368.787
            </a>
          </li>
          <li>
            <a href="mailto:justin.blair.rankin@gmail.com" target="_top"  >
              <IconEnvelope className="icon-bullet"/>justin.blair.rankin@gmail.com
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/rankinjustin" target="_blank" rel="noopener noreferrer"  >
              <IconLinkedinIn className="icon-bullet" style={{opacity:0.65}}/>
             linkedin.com/in/rankinjustin
            </a>
          </li>
          <li>
            <a href="http://finografic.com" target="_self" rel="noopener noreferrer" >
              <IconGlobe className="icon-bullet" style={{opacity:0.85}}/>finografic.com
            </a>
          </li>
        </ul>
      </section>
    </Element>
  )
}
