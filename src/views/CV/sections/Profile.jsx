import React from "react";
import { Element} from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function Profile(props) {

  return (
    <Element name="profile">
    <section  {...props} className={`${props.className} section-profile`}>

      <h2><FormattedMessage id="Profile.title" /></h2>
      <FormattedMessage id="Profile.text">
        {(paragraphs)=>{
          var output = [];
          paragraphs.forEach((text, index) => {
            output.push(<p>{text}</p>);
          });
          return output;
        }}
      </FormattedMessage>

      </section>
    </Element>
  )
}
