// import useContext (or we could write React.useContext)
import React from 'react';
import { BeatLoader } from 'react-spinners';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '-webkit-fill-available',
  maxHeight: '33vh',
};

export const loading = (isVisible = true) => {
  return (
    <div>
      <BeatLoader
        css={styles}
        sizeUnit={'px'}
        size={10}
        color={'rgba(0,0,0,0.2)'}
        style={ !isVisible && { display:'none' }}
        // style={{...styles}}
        // loading={this.state.loading}
      />
    </div>
  );
};

export const routeLoading = state => {
  return (
    <div>
      <BeatLoader
        css={styles}
        sizeUnit={'px'}
        size={10}
        color={'rgba(0,0,0,0.2)'}
        // style={{...styles}}
        // loading={this.state.loading}
      />
    </div>
  );
};
