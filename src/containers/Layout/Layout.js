import React, { Suspense } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
import { Router, Redirect } from '@reach/router';

import { Col, Row, Container } from 'react-bootstrap';
import { useStore } from 'store';

// import { routes } from 'config/routes';
import { loading, routeLoading } from 'components/Loading';

import SideBar from 'components/Sidebar';
import CV from 'containers/CV';
import { RemoveScroll } from 'react-remove-scroll';

import ButtonPDF from 'components/ButtonPDF';
import pdf_en from 'assets/CV_Justin-Rankin_EN.pdf';
import pdf_es from 'assets/CV_Justin-Rankin_ES.pdf';

const Footer = React.lazy(() => import('components/Footer'));
const pdf = {
  en: pdf_en,
  es: pdf_es,
};

export default function Layout(props) {
  const { state, dispatch } = useStore();

  // COOL, BUT NOT REQUIRED FOR THIS PROJECT
  // import useWindowScrollPosition from '@rehooks/window-scroll-position';
  // let position = useWindowScrollPosition();
  // <div className={`app sidebar-${state.sidebar.isOpen} yPos-${position.y}`}>

  const _state = (title) => {
    state.page.title = title;
  };

  return (
    <div className={`app sidebar-${state.sidebar.isOpen}`}>
      <div className="app-body">
        {/*
        <Suspense fallback={loading()}>
          <SideBar />
        </Suspense>
        */}
        <main id="page-wrap">
          <RemoveScroll enabled={state.sidebar.isOpen} removeScrollBar={false}>
            <Container fluid>
              <Row>
                <Col style={{ padding: '0px 15px' }}>
                  <Suspense fallback={routeLoading(state)}>
                    <Router>
                      <CV path="/" />
                      <CV path="cv-justin-rankin" />
                      {/*<Redirect from="/" to="/cv" />*/}
                    </Router>
                    {/*
                    <a href={pdf[state.locale]} download>
                      <ButtonPDF />
                    </a>
                    */}
                  </Suspense>
                </Col>
              </Row>
            </Container>
          </RemoveScroll>
        </main>
      </div>
      {/*
      <Suspense fallback={loading(false)}>
        <Footer />
      </Suspense>
      */}
    </div>
  );
}
