import React from 'react';
import { BarLoader, BeatLoader, PulseLoader, ScaleLoader, FadeLoader } from 'react-spinners';
import { ContextGlobal } from 'lib/state';
import { useState, useContext } from 'react';

/*
export default function loading () {
  return(
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
}
*/

const styles = {
  // display: 'block',
  // margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '-webkit-fill-available',
  maxHeight: '33vh',
};

function loading(props) {
  let { state, dispatch } = useContext(ContextGlobal);
  // let { match, location, history } = props;
  // const [data, setData] = useState({ data: [] });
  //Object.assign(state,{previous:true})

  return (
    <BeatLoader
      css={styles}
      sizeUnit={'px'}
      size={10}
      color={'rgba(0,0,0,0.2)'}
      // style={{...styles}}
      // loading={this.state.loading}
    />
  );
}

export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.loading = true;
  }

  componentWillUnmount() {
    // alert('!!!');
  }

  /*

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    console.log(new Date());
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }
  */

  render() {
    console.log('(spinner) LOADING...');
    // alert('loading');
    return (
      <div>
        <BeatLoader
          css={styles}
          sizeUnit={'px'}
          size={10}
          color={'rgba(255,0,0,0.2)'}
          // style={{...styles}}
          // loading={this.state.loading}
        />
        XXX
      </div>
    );
  }
}
