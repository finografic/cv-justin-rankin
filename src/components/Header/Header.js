/** @jsx jsx */
import React from 'react';
import photo from 'assets/img/justin.png';
import { Col, Row } from 'react-styled-flexboxgrid';
import { jsx } from '@emotion/core';
import { styles } from './Header.css';

export const Header = (props) => {
  return (
    <header className="cv-header" css={styles}>
      <Row>
        <Col className="col-photo">
          <img src={photo} alt="Justin Rankin" className="me" />
        </Col>
        <Col className="col-title">
          <h1>Justin Rankin</h1>
          <h2>Full-stack developer</h2>
        </Col>
      </Row>
    </header>
  );
};

// export default Header;
