import React, { useReducer } from "react";

// vi har laget en gjenbrukbar function for context og provider.
// automatisk oppsett av context

export default (reducer, actions, initialState) => {
  // dette objektet sender info fra parent til barnebarn (nestedchild)
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // action === { addBlogPost: (dispatch) => {return () => {} } }
    // action kaller dispatch som endrer vår data.
    // vi looper gjennom action og for hver key som er addblogpost, vi tar den funksjonen og kaller den med dispatch
    // argrument og den gir oss tilbake en funksjon som igjen sendes videre til .Provider
    // til value og gjør alle children mulig å endre state objektet

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
