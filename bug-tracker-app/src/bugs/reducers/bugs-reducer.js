function bugsReducer(currentState = [], action) {
  switch (action.type) {
    case "BUGS_ADD":
      return [...currentState, action.payload];
      break;
    case "BUGS_UPDATE":
      return currentState.map((bug) =>
        bug.id === action.payload.id ? action.payload : bug
      );
      break;
    case "BUGS_REMOVE":
      return currentState.filter((bug) => bug.id !== action.payload.id);
    case "BUGS_LOAD":
      return action.payload;
    default:
      return currentState;
  }
}

export default bugsReducer;