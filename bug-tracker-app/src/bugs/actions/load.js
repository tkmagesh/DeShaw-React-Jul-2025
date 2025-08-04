import axios from 'axios';

// async action creator
export function load(){
    /* 
    return function(dispatch){
        axios.get('http://localhost:3000/bugs')
            .then(response => response.data)
            .then(bugs => dispatch({ type : 'BUGS_LOAD', payload : bugs}))
    } 
    */

    // using async await
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3000/bugs")
      const bugs = response.data
      dispatch({ type: "BUGS_LOAD", payload: bugs })
    };
}