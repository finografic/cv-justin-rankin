import React from "react";
import { Element} from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

export default function Profile(props) {

  const { messages: { PROFILE } } = getIntl();

  // console.log('PARAGRAPHS:', Profile.text);

  // Profile.text.forEach((text, index) => {
  //   console.log(`PARAGRAPH ${index}:`, text);
  // });

  // Profile.text.map((text, index) => {
  //   console.log(`PARAGRAPH ${index}:`, text);
  // });

  // for(let [index, paragraph] of Object.entries(Profile.text)) {
  //   console.log(`PARAGRAPH: ${index}`, paragraph);
  // }

  return (
    <Element name="profile">
    <section  {...props} className={`${props.className} section-profile`}>
      <h2><FormattedMessage id={PROFILE.title} /></h2>
      {
        PROFILE.text.map((paragraph, i) => {
          // return <p key={index}>{paragraph}</p>;
          return <p key={i}><FormattedMessage id={PROFILE.text[i]} /></p>
        })
      }
      </section>
    </Element>
  )
}
