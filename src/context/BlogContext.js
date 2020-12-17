import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

// skal du legge til flere funksjoner så fører du det inn i reduceren og du lager funskjonen
// useReducer er en annen type hook
// håndterer data
// filter itererer over alle elementene i state og kjører en child funksjon
const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      // map iterer over blogpost array
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          // randomkey generator
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

// funksjon som modifiserer reducer
// endrer data
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
// konvensjon er type og payload som variabel navn i dispatch
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

// Provider gjør at vi kan ta data fra andre steder i appen
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: "23456" }]
);
