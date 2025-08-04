import axios from "axios";

export function createNew(newBugName, projectId) {
  return function(dispatch){
    const newBugData = {
      id: 0,
      name: newBugName,
      isClosed: false,
      createdAt: new Date(),
      projectId : projectId
    };
    axios
      .post("http://localhost:3000/bugs", newBugData)
      .then((response) => response.data)
      .then((newBug) =>
        dispatch({
          type: "BUGS_ADD",
          payload: newBug,
        })
      );
  }
}
