import {
  FETCH_SMURFS_DATA_START,
  FETCH_SMURFS_DATA_SUCCESS,
  FETCH_SMURFS_DATA_FAILURE,
} from '../actions';

const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_SMURFS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: '',
      };
    case FETCH_SMURFS_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
