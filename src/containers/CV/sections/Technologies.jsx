import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import getIntl from 'utils/getIntl';

export default function Technologies (props) {

  const { messages: { TECHNOLOGIES } } = getIntl();

  return (
    <Element name="technologies">
      <section {...props} className={`${props.className} section-technologies`}>
      <h2><FormattedMessage id={TECHNOLOGIES.title} /></h2>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="col col-technologies">
            <h3><FormattedMessage id={TECHNOLOGIES['proficient'].title} /> :</h3>
            {  
              TECHNOLOGIES['proficient'].list.map((skill, i) => 
                <span key={i} className="pill"><FormattedMessage id={skill} /></span>
              )
            }
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="col col-technologies">
            <h3><FormattedMessage id={TECHNOLOGIES['experienced'].title} /> :</h3>
            {  
              TECHNOLOGIES['experienced'].list.map((skill, i) => 
                <span key={i} className="pill"><FormattedMessage id={skill} /></span>
              )
            }
          </Col>
        </Row>
      </section>
    </Element>
  )
}
