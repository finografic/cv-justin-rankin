/** @jsx jsx */
import React, { useState } from 'react';
import photo from 'assets/img/justin.png';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Sticky } from 'react-sticky';
import ButtonLocale from 'components/ButtonLocale';
import { jsx } from '@emotion/core';
import { styles } from './Header.css';

export const Header = ({ style, props }) => {
  // const [isPadded, setIsPadded] = useState(0);

  return (
    <div style={{ ...style, zIndex: 10 }}>
      <Row>
        <Col lg={12} className="col">
          <Row>
            <Col xs={12} sm={12} md={5} lg={4} xl={4} className="col" style={{ paddingRight: '0px' }}>
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
            </Col>
            <Col xs={12} sm={12} md={7} lg={8} xl={8} className="col">
              {/*<ButtonLocale />*/}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

// export default Header;
