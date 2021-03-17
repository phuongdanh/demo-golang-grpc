import React, {createContext, useReducer} from 'react';

const initialState = {
  app: "name",
  accessToken: ""
};
const store = createContext(initialState);
const { Provider } = store;

function reducer(state, action) {
  switch(action.type) {
    case 'LOGIN':
      const newState = {...state, accessToken: action.accessToken}
      return newState
    case 'LOGOUT':
      const newState2 = {...state, accessToken: ""}
      return newState2
    default:
      return state
  }
}

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }