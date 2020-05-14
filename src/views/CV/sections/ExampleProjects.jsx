import React from "react";
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function ExampleProjects (props) {

  return (
    <Element name="example-projects">
      <section {...props} className={`${props.className} section-example-projects`}>
        <h2><FormattedMessage id="Projects.title" /></h2>
        <FormattedMessage id="Projects.list">
          {(listItems)=>{
            var output = [];
            listItems.forEach((item, index) => {
              var outputItem = [];
              outputItem.push(<strong className="accent">{item.name}</strong>);
              outputItem.push(<span> - </span>);
              item.text.forEach((p, i) => {
                // TEXT ARRAY -> PARAGRAPHS
                if(i === 0) {outputItem.push(<span>{p}<br /></span>)}
                else if(i > 0) {outputItem.push(<div>{p}</div>)};
              });
              output.push(<p>{outputItem}</p>);
            });
            return output;
          }}
        </FormattedMessage>
      </section>
    </Element>
  );
}
