import React, {useState} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { StickyContainer, Sticky} from 'react-sticky';
import { ContextGlobal } from 'lib/state';
import ButtonLocale from 'components/ButtonLocale';

// SECTIONS
import CVHeader from './sections/CVHeader';
import Contact from './sections/Contact';
import Profile from './sections/Profile';
import Education from './sections/Education';
import Languages from './sections/Languages';
import Technologies from "./sections/Technologies";
import Principles from "./sections/Principles";
import WorkExperience from "./sections/WorkExperience";
import ExampleProjects from "./sections/ExampleProjects";
import Connected from "./sections/Connected";
import MyStack from "./sections/MyStack";

//----------------------------------------------------------------------------------//

export default function CV (props) {

  let { state } = React.useContext(ContextGlobal);
  const [isPadded, setIsPadded] = useState(0);

  const handleSticky = isSticky => {
    if(!isSticky) {
      setIsPadded(false);
    }else{
      setIsPadded(true);
    }
  }

  return (
    <div className="animated fadeIn">
      <StickyContainer>
        <Container className="content-main">
          <Sticky disableCompensation>
            {
              ({
                style,
                isSticky,
                distanceFromTop
              }) =>
                <div>
                  {handleSticky(isSticky)}
                  <div style={{ ...style, zIndex: 10, }}>
                    <Row>
                      <Col lg={12} className="col">
                        <Row>
                          <Col xs={12} sm={12} md={5} lg={4} xl={4} className="col" style={{ paddingRight: '0px' }}>
                            <CVHeader />
                          </Col>
                          <Col xs={12} sm={12} md={7} lg={8} xl={8} className="col">
                            <ButtonLocale />
                            {/* LATER USE */}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
            }
          </Sticky>
          <div className={state.localeTransition === true && 'locale-transition'}  >
          <Row className={`padded-${isPadded}`} >
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
              <Education className="hide-md-up"/>
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
  )
}
