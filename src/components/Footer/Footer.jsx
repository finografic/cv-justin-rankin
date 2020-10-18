import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
        <Row>
          <Col lg={6} className="col">
              &copy; {new Date().getFullYear()} Justin Rankin
          </Col>
          <Col lg={6} className="col">
            <a href="https://finografic.com" style={{marginLeft:'8px'}}>finografic.com</a>
          </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
