import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

// useReducer er en annen type hook
// håndterer data
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

// funksjon som modifiserer reducer
// endrer data
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

// Provider gjør at vi kan ta data fra andre steder i appen
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
