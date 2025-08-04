import { applyMiddleware, combineReducers, createStore } from 'redux'

import bugsReducer from '../bugs/reducers/bugs-reducer'
import projectsReducer from '../projects/reducers/projects-reducer';
import {logger} from 'redux-logger'
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
});
/* 
// recreation of "redux-logger"
// logger middleware
const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('Before -> ', store.getState())
    console.log('Action -> ', action)
    next(action)
    console.log("After -> ", store.getState());
    console.groupEnd()
}

// recreation of "redux-thunk"
const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch)
    }
    next(action)
}

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, asyncMiddleware)
); */

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

console.log('store state =>', store.getState());

export default store;