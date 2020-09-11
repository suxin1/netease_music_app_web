import {validateAsyncActionTypes} from "../utilities";

// generate reducers that cloud commonly use for an async action.
export const responseReducer = (types) => {
  validateAsyncActionTypes(types);
  const [requestType, successType, failureType] = types;

  return (state={
    isFetching: false,
    error: null,
  }, action) => {
    switch (action.type) {
      case requestType:
        return {...state, isFetching: true};
      case successType:
        return {...state, isFetching: false, error: null, data: action.response.result};
      case failureType:
        return {...state, isFetching: false, error: action.error};
      default:
        return state;
    }
  }
};
