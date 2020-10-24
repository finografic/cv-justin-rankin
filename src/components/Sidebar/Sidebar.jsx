import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// import nav from 'config/nav';
import { ContextGlobal } from "lib/state";
import { FormattedMessage } from 'react-intl';
import { scroller } from 'react-scroll';

// DEPRECATED: ALL @fortawesome/FontAwesome on npmjs.com EXPIRED !!
// NEW: SVG VERSIONS (SVGs are still FontAwesome v5)
import { ReactComponent as IconBars } from 'assets/icons/bars.svg';
import { ReactComponent as IconChevronLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as IconPhone } from 'assets/icons/phone.svg';
import { ReactComponent as IconEnvelope } from 'assets/icons/envelope.svg';
import { ReactComponent as IconLinkedinIn } from 'assets/icons/linkedin-in.svg';

import './Sidebar.scss';

export default props => {

  let { state, dispatch } = React.useContext(ContextGlobal);

  const isMenuOpen = function(newState) {
    dispatch({ type: "sidebar", payload: newState });
  };

  const handleClick = (section, e) => {
    e.preventDefault();
    dispatch({ type: "sidebar", payload: {isOpen:false} });
    scroller.scrollTo(section, {
      duration: 1200,
      delay: 200,
      smooth: true,
      offset: -130, // Scrolls to element + 50 pixels down the page
      //containerId: 'page-wrap',
    })
  }

  return (
    <React.Fragment>
      <Menu
        onStateChange={ isMenuOpen }
        isOpen={ state.sidebar.isOpen }
        className={ "nav-sidebar-wrap" }
        menuClassName={ "nav-sidebar" }
        bodyClassName={ "sidebar-open" }
        burgerButtonClassName={ "nav-btn-toggle" }
        // burgerBarClassName={ "my-class" }
        crossButtonClassName={ "nav-btn-close" }
        crossClassName={ "my-class" }
        itemListClassName={ "bm-item-list" }
        itemClassName={ "nav-link" }
        overlayClassName={ "bm-overlay" }
        customBurgerIcon={ <IconBars /> }
        customCrossIcon={ <IconChevronLeft /> }
        style={{background:'transparent'}}
        >
        <h1 className="nav-title">Justin Rankin</h1>
        <h2 className="nav-title-sub">Full-stack developer</h2>

        <a href="tel:+34603368787" target="_blank" rel="noopener noreferrer" className="nav-link-contact">
          <IconPhone className="icon-bullet" style={{marginLeft:'-1px', marginRight:'8px'}}/>+34.603.368.787
        </a>

        <a href="mailto:justin.blair.rankin@gmail.com" target="_top" className="nav-link-contact">
          <IconEnvelope className="icon-bullet"/>justin.blair.rankin@gmail.com
        </a>

        <a href="//linkedin.com/in/rankinjustin" target="_blank" rel="noopener noreferrer" className="nav-link-contact">
          <IconLinkedinIn className="icon-bullet" style={{opacity:0.65}}/>linkedin.com/in/rankinjustin
        </a>

        <FormattedMessage id="Sidebar.nav.list">
        {(listItems)=>{
          var output = [];
          listItems.forEach((item, index) => {
            output.push(<a  href={item.url}
                  className={ item.label && 'nav-link' }
                  onClick={(e) => handleClick(item.url, e)}>
                {item.label}
              </a>);
          });
          return output;
        }}
      </FormattedMessage>

      </Menu>
    </React.Fragment>
  );
};
