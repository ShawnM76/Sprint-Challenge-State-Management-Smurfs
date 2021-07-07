import axios from 'axios';

export const FETCH_SMURFS_DATA_START = 'FETCH_SMURFS_DATA_START';
export const FETCH_SMURFS_DATA_SUCCESS = 'FETCH_SMURFS_DATA_SUCCESS';
export const FETCH_SMURFS_DATA_FAILURE = 'FETCH_SMURFS_DATA_FAILURE';
export const POST_SMURFS_DATA_START = 'POST_SMURFS_DATA_START';
export const POST_SMURFS_DATA_SUCCESS = 'POST_SMURFS_DATA_SUCCESS';
export const POST_SMURFS_DATA_FAILURE = 'POST_SMURFS_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_DATA_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(results => {
        console.log(results);
        dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: results.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: error.response });
      });
  };
};

export const storeData = smurf => {
  return dispatch => {
    dispatch({ type: POST_SMURFS_DATA_START });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(results => {
        console.log(results);
        dispatch({ type: POST_SMURFS_DATA_SUCCESS, payload: results.data });
      })
      .catch(error => {
        console.log('O no there is an error!', error);
        dispatch({ type: POST_SMURFS_DATA_FAILURE, payload: error.response });
      });
  };
};
