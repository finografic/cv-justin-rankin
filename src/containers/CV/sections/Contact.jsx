import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

import { MdPhoneAndroid as IconPhone } from "react-icons/md";
import { BiEnvelope as IconEnvelope2 } from "react-icons/bi";
import { VscGlobe as IconGlobe } from "react-icons/vsc";
import { FaLinkedinIn as IconLinkedinIn, FaRegEnvelope as IconEnvelope } from "react-icons/fa";

export default function Contact (props) {

  const { messages: { CONTACT } } = getIntl();

  return (
    <Element name="contact">
      <section {...props} className={`${props.className} section-contact`}>
        {/* <h2>CONTACT</h2> */}
        <h2><FormattedMessage id={CONTACT.title} /></h2>
        <ul className="no-bullets">
          <li style={{marginLeft:'-2px'}}>
            <a href="tel:+34603368787" target="_blank" rel="noopener noreferrer"  >
              <IconPhone className="icon-bullet" style={{marginLeft:'-1px',marginRight:'8px',transform:'scale(1.2)'}}/>+34.603.368.787
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
            <a href="https://finografic.github.io/cv-justin-rankin" target="_self" rel="noopener noreferrer" >
              <IconGlobe className="icon-bullet" style={{opacity:0.85,transform:'scale(1.25)'}}/>finografic.github.io/cv-justin-rankin
            </a>
          </li>
        </ul>
      </section>
    </Element>
  )
}
