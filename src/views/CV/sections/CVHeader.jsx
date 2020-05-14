import React from "react";
import photo from 'assets/img/justin.png';
import { Col, Row } from 'react-bootstrap';

export default function CVHeader(props) {

  return (
    <header className="cv-header">
      <Row>
        <Col className="col-photo">
          <img src={photo} alt="Jusitn Rankin" className="me" />
        </Col>
        <Col className="col-title">
          <h1>Justin Rankin</h1>
          <h2>Full-stack developer</h2>
        </Col>
      </Row>
    </header>
  )
}
