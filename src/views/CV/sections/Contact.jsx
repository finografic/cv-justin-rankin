import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/pro-light-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function Contact (props) {

  return (
    <Element name="contact">
      <section {...props} className={`${props.className} section-contact`}>
        {/* <h2>CONTACT</h2> */}
        <h2><FormattedMessage id="Contact.title" /></h2>
        <ul className="no-bullets">
          <li style={{marginLeft:'-2px'}}>
            <a href="tel:+34603368787" target="_blank" rel="noopener noreferrer"  >
              <FontAwesomeIcon icon={faPhone} className="icon-bullet" style={{marginLeft:'-1px', marginRight:'8px'}}/>+34.603.368.787
            </a>
          </li>
          <li>
            <a href="mailto:justin.blair.rankin@gmail.com" target="_top"  >
              <FontAwesomeIcon icon={faEnvelope} className="icon-bullet"/>justin.blair.rankin@gmail.com
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/rankinjustin" target="_blank" rel="noopener noreferrer"  >
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-bullet" style={{opacity:0.65}}/>linkedin.com/in/rankinjustin
            </a>
          </li>
          <li>
            <a href="http://finografic.com" target="_self" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faGlobe} className="icon-bullet" style={{opacity:0.85}}/>finografic.com
            </a>
          </li>
        </ul>
      </section>
    </Element>
  )
}
