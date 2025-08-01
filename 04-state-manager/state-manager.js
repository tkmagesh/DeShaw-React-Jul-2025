const StateManager = (() => {
  let _currentState = null,
    _subscribers = [],
    _reducer = null,
    _init_action = { type : '@INIT/ACTION'};

  function getState() {
    return _currentState;
  }

  function subscribe(callbackFn) {
    _subscribers.push(callbackFn);
  }

  function _notifyChanges() {
    _subscribers.forEach((callbackFn) => callbackFn());
  }

  function dispatch(action) {
    const newState = _reducer(_currentState, action);
    if (newState === _currentState) return; // no state changes
    _currentState = newState;
    _notifyChanges();
  }

  function createStore(reducer) {
    if (typeof reducer !== "function")
      throw new Error("a reducer is mandatory to create a store");
    _reducer = reducer;
    _currentState = _reducer(undefined, _init_action); // call the reducer to initialize the store with a valid default state
    return {
      getState,
      subscribe,
      dispatch,
    };
  }

  function bindActionCreators(actionCreators, dispatch) {
    const actionDispatchers = {};
    for (let key in actionCreators) {
      actionDispatchers[key] = function (...args) {
        const action = actionCreators[key](...args);
        dispatch(action);
      };
    }
    return actionDispatchers;
  }

  return { createStore, bindActionCreators };
})()