import React from 'react';
import { Router } from '@reach/router';

import { Col, Row, Container } from 'react-bootstrap';
import { useStore } from 'store';

// import { loading, routeLoading } from 'components/Loading';
import { routeLoading } from 'components/Loading';

//import SideBar from 'components/Sidebar';
import CV from 'containers/CV';
import { RemoveScroll } from 'react-remove-scroll';

// import ButtonPDF from 'components/ButtonPDF';
// import pdf_en from 'assets/CV_Justin-Rankin_EN.pdf';
// import pdf_es from 'assets/CV_Justin-Rankin_ES.pdf';

// const Footer = React.lazy(() => import('components/Footer'));
// const pdf = {
//   en: pdf_en,
//   es: pdf_es,
// };

export default function Layout() {
  const { state } = useStore();

  // COOL, BUT NOT REQUIRED FOR THIS PROJECT
  // import useWindowScrollPosition from '@rehooks/window-scroll-position';
  // let position = useWindowScrollPosition();
  // <div className={`app sidebar-${state.sidebar.isOpen} yPos-${position.y}`}>

  // const _state = (title) => {
  //   state.page.title = title;
  // };

  return (
    <div className={`app sidebar-${state.sidebar.isOpen}`}>
      <div className="app-body">
        {/*
        <React.Suspense fallback={loading()}>
          <SideBar />
        </React.Suspense>
        */}
        <main id="page-wrap">
          <RemoveScroll enabled={state.sidebar.isOpen} removeScrollBar={false}>
            <Container fluid>
              <Row>
                <Col style={{ padding: '0px 15px' }}>
                  <React.Suspense fallback={routeLoading(state)}>
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
                  </React.Suspense>
                </Col>
              </Row>
            </Container>
          </RemoveScroll>
        </main>
      </div>
      {/*
      <React.Suspense fallback={loading(false)}>
        <Footer />
      </React.Suspense>
      */}
    </div>
  );
}
