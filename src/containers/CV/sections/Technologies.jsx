import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

export default function Technologies (props) {

  return (
    <Element name="technologies">
      <section {...props} className={`${props.className} section-technologies`}>
        <h2><FormattedMessage id="Technologies.title" /></h2>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="col col-technologies">
            <h3><FormattedMessage id="Technologies.proficient" /> :</h3>
            <FormattedMessage id="Technologies.proficient.list">
              {(listItems) => {
                var output = [];
                listItems.forEach((item, index) => {
                  output.push(<span className="pill">{item}</span>);
                });
                return output;
              }}
            </FormattedMessage>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="col col-technologies">
            <h3><FormattedMessage id="Technologies.experienced" /> :</h3>
            <FormattedMessage id="Technologies.experienced.list">
              {(listItems) => {
                var output = [];
                listItems.forEach((item, index) => {
                  output.push(<span className="pill">{item}</span>);
                });
                return output;
              }}
            </FormattedMessage>
          </Col>
        </Row>
      </section>
    </Element>
  )
}
