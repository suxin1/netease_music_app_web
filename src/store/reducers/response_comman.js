import merge from "lodash/merge";
import { validateAsyncActionTypes } from "../utilities";

// generate reducers that cloud commonly use for an async action.
export const responseReducer = (
  types,
  initialState = {},
  successReducer = () => ({})
) => {
  validateAsyncActionTypes(types);
  if (successReducer && !(typeof successReducer === "function")) {
    throw new Error("successReducer must to be a function.");
  }
  const [requestType, successType, failureType] = types;

  return (
    state = {
      isFetching: false,
      error: null,
      ...initialState,
    },
    action
  ) => {
    switch (action.type) {
      case requestType:
        return { ...state, isFetching: true };
      case successType:
        return merge(
          {
            ...state,
            isFetching: false,
            error: null,
            data: action.response.result,
          },
          successReducer(state, action.response.result)
        );
      case failureType:
        return {
          ...state,
          isFetching: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
};
