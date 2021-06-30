import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import { application } from './ducks/application';

const logger = createLogger({
  collapsed: true,
});
export const store = createStore(
  combineReducers({ application }),
  applyMiddleware(thunk, logger),
);
