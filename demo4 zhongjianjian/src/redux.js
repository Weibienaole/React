import React from "react";
import { applyMiddleware, createStore } from 'redux';
import {logger} from 'redux-logger';

const NumReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    default:
      return state;
  }
};


// const logger = createLogger();
// const store = createStore(NumReducer);


// let next = store.dispatch;
// store.dispatch = function dispatchAndLog(action) {
//   console.log('dispatching', action);
//   next(action);
//   console.log('next state', store.getState());
// }



 
const store = createStore(
  NumReducer,
  applyMiddleware(logger)
);

store.dispatch('ADD')
