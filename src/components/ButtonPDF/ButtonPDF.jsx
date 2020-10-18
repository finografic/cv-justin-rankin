import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';

// DEPRECATED: ALL @fortawesome/FontAwesome on npmjs.com EXPIRED !!
// NEW: SVG VERSIONS (SVGs are still FontAwesome v5)
import { ReactComponent as IconFileCheck } from 'assets/icons/file-check.svg';
import { ReactComponent as IconCheckCircle } from 'assets/icons/check-circle.svg';
import { ReactComponent as IconCheck } from 'assets/icons/check.svg';

import icon from 'assets/img/pdf-download.svg';
import './ButtonPDF.scss';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '-webkit-fill-available',
  maxHeight: '33vh',
  transform: 'rotate(90deg)',
  opacity: 0
};

class ButtonPDF extends Component {
  render() {
    return (
      <div className="btn-download-pdf">
        <img src={icon} alt="Download CV PDF" className="icon" style={{opacity:1}}/>
        <PulseLoader
          css={styles}
          sizeUnit={'px'}
          size={8}
          color={'rgba(255,255,255,0.80)'}
          // style={{...styles}}
          // loading={this.state.loading}
        />
        <IconFileCheck style={{opacity:0}} />
        <IconCheck style={{opacity:0}} />
        <IconCheckCircle style={{opacity:0}} />
      </div>
    );
  }
}

export default ButtonPDF;

