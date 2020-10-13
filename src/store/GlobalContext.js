import React, { createContext, useContext, useReducer } from 'react';

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  if (props === undefined) throw new Error('Props Undefined. You probably mixed up betweenn default/named import');
  const { store, children, ...rest } = props;
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }} {...rest}>
      {children}
    </StoreContext.Provider>
  );
};

// export const StoreProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;

export const useStore = () => useContext(StoreContext);

// ============================================== //
// ADDIOTIONS:

/*
export const setStore = function (updateStore: any, callback: Function): void {
  stores.update(updateStore, callback);
};

export const getStore = function (key: string): any {
  return stores.data[key];
};
*/
