import { applyMiddleware, combineReducers, createStore } from 'redux'

import bugsReducer from '../bugs/reducers/bugs-reducer'
import projectsReducer from '../projects/reducers/projects-reducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
});

// logger middleware
const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('Before -> ', store.getState())
    console.log('Action -> ', action)
    next(action)
    console.log("After -> ", store.getState());
    console.groupEnd()
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

console.log('store state =>', store.getState());

export default store;