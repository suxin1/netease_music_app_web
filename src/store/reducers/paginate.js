import union from "lodash/union";
import {validateAsyncActionTypes} from "../utilities";

const paginate = ({types, mapActionToKey, listKey="ids"}) => {
  validateAsyncActionTypes(types);

  if (typeof mapActionToKey !== "function") {
    throw new Error("Expected mapActionToKey to be a function.");
  }

  const [requestType, successType, failureType] = types;

  const updatePagination = (state = {
    isFetching: false,
    [listKey]: [],
  }, action) => {
    switch (action.type) {
      case requestType: {
        return {
          ...state,
          isFetching: true
        }
      }
      case successType: {
        return {
          ...state,
          isFetching: false,
          ...action.response.result,
        }
      }
      case failureType: {
        return {
          ...state,
          isFetching: false
        }
      }
      default:
        return state;
    }
  }

  return (state={}, action) => {
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action);
        if (!(typeof key === "string" || typeof key === "number")) {
          throw new Error("Expect key to be a string or a number.")
        }
        return {
          ...state,
          [key]: updatePagination(state[key], action)
        }
      default:
        return state;
    }
  }
};


export default paginate;
