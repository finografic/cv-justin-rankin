import React, { useState } from 'react';
import { useStore } from 'store';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-styled-flexboxgrid';
import { StickyContainer, Sticky } from 'react-sticky';
import ButtonLocale from 'components/ButtonLocale';

// SECTIONS
import { Header } from '../../components/Header';
import Contact from './sections/Contact'; // OK
import Profile from './sections/Profile'; // OK
import Education from './sections/Education'; // OK
import Languages from './sections/Languages'; // OK
import Technologies from './sections/Technologies'; // OK
import Principles from './sections/Principles'; // OK
import WorkExperience from './sections/WorkExperience'; // OK
import ExampleProjects from './sections/ExampleProjects'; // OK
import Connected from './sections/Connected'; // OK
import MyStack from './sections/MyStack'; // OK

//----------------------------------------------------------------------------------//

export default function CV(props) {
  const { state, dispatch } = useStore();
  const [isPadded, setIsPadded] = useState(0);

  const handleSticky = (isSticky) => {
    if (!isSticky) {
      setIsPadded(false);
    } else {
      setIsPadded(true);
    }
  };

  return (
    <div className="animated fadeIn">
      <StickyContainer>
        <Container className="content-main">
          <Sticky disableCompensation>
            {({ style, isSticky, distanceFromTop }) => (
              <div>
                {handleSticky(isSticky)}
                <div style={{ ...style, zIndex: 10 }}>
                  <Row>
                    <Col lg={12} className="col">
                      <Row>
                        <Col xs={12} sm={12} md={5} lg={4} xl={4} className="col" style={{ paddingRight: '0px' }}>
                          <Header />
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={8} xl={8} className="col">
                          {/*<ButtonLocale />*/}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </Sticky>
          <div className={state.localeTransition === true && 'locale-transition'}>
            <Row className={`padded-${isPadded}`}>
              <Col xs={12} sm={12} md={5} lg={4} xl={4} className="col">
                <Contact />
                <Profile />
                <Principles className="hide-md-down" />
                <MyStack className="hide-md-down" />
                <Connected className="hide-md-down" />
                <Education className="hide-md-down" />
                <Languages className="hide-md-down" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={8} xl={8} className="col">
                <Technologies />
                <Principles className="hide-md-up" />
                <WorkExperience />
                <Education className="hide-md-up" />
                <MyStack className="hide-md-up" />
                <ExampleProjects />
                <Connected className="hide-md-up" />
                <Languages className="hide-md-up" />
              </Col>
            </Row>
          </div>
        </Container>
      </StickyContainer>
    </div>
  );
}
