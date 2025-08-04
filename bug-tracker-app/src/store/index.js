import { combineReducers, createStore } from 'redux'

import bugsReducer from '../bugs/reducers/bugs-reducer'
import projectsReducer from '../projects/reducers/projects-reducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
});

const store = createStore(rootReducer);

console.log('store state =>', store.getState());

export default store;