import * as React from 'react';
import schema from './state.schema';
import { reducer } from './state.reducer';

// FOR OTHER EXAMPLES
import { Component } from 'react';
import PropTypes from 'prop-types';

// REDUX
// import {Provider} from 'react-redux';  // ALT-PROVIDER BELOW
import { createStore } from 'redux';
// Creating the store using the reducers info.
// That's because reducers are the building blocks of a Redux Store.
const store = createStore(reducer);

let ContextGlobal = React.createContext();
let initialState = {
  ...schema,
};

function ContextGlobalProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextGlobal.Provider value={value} store={store}>
      {props.children}
    </ContextGlobal.Provider>
  );
}

let ContextGlobalConsumer = ContextGlobal.Consumer;

export { ContextGlobal, ContextGlobalProvider, ContextGlobalConsumer };

// -------------------------------------------------------------------

// BELOW EXAMPLE, TWEAKED
export const WithProvider = Component => {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return function ComponentWithProvider(props) {
    return (
      // <Provider>
      //   <Component {...props} />
      // </Provider>
      <ContextGlobal.Provider value={value}>
        <Component {...props} />
      </ContextGlobal.Provider>
    );
  };
};

export class Provider extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  state = {
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };
  render() {
    const {
      state,
      props: { children },
    } = this;
    return <ContextGlobal.Provider value={state}>{children}</ContextGlobal.Provider>;
  }
}

/*
// Alternative to wrap the parent component with the Provider
export const withProviderORIG = Component => {
  return function ComponentWithProvider(props) {
    // ... and renders the wrapped component with the Provider
    return (
        <Provider>
            <Component {...props} />
        </Provider>
    );
  };
};
*/
