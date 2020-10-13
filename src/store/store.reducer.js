import React from 'react';
import schema from './store.schema';
import { Redirect } from 'react-router-dom';

let initialState = {
  ...schema,
};

export const reducer = (state = initialState, action) => {
  console.log(`${action.type}: `, action.payload);

  switch (action.type) {
    // RESET
    case 'reset': {
      return initialState;
    }

    // SET_STATE (from dev.to example)
    case 'SET_STATE': {
      return {
        ...state,
        ...action.payload,
      };
    }

    // -------------------------------------------------------------------
    // -------------------------------------------------------------------
    // NEW TESTS

    case 'SELECT_SINGLE': {
      Object.assign(state[`select_${action.payload.name}`], { value: action.payload.value });
      return { ...state };
    }

    case 'GOTO_PREVIOUS': {
      return <Redirect from={state.location.pathname} to={state.previous_root} />;
    }

    // -------------------------------------------------------------------
    // LOCATION

    case 'location': {
      // BETTER TO LEAVE location AS IS
      let {
        previous: { pathname, key },
      } = action.payload.location;
      let location = Object.assign({}, { [action.type]: action.payload });
      return {
        ...state,
        ...location,
      };
    }

    // -------------------------------------------------------------------
    // DATA

    case 'data': {
      console.log('DATA ACTION: ', action.payload);
      let data = Object.assign(state.data, { [action.type]: action.payload });
      console.log('STATE DATA: ', data);
      return {
        ...state,
        ...data,
      };
    }

    // -------------------------------------------------------------------
    // SIDEBAR

    case 'sidebar': {
      let sidebar = Object.assign({ sidebar: action.payload });
      return {
        ...state,
        ...sidebar,
      };
    }

    // -------------------------------------------------------------------
    // LOCALE

    case 'locale': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'localeTransition': {
      return {
        ...state,
        ...action.payload,
      };
    }

    // -------------------------------------------------------------------
    // DEFAULT DYNAMIC ACTION :D

    default: {
      return {
        ...state,
      };
    }
  }
};
