import union from "lodash/union";


const paginate = ({types, mapActionToKey}) => {
  if (!Array.isArray(types) && types.length === 3) {
    throw new Error("Expect an Array of three action types.");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expect action types to be string.")
  }
  if (typeof mapActionToKey !== "function") {
    throw new Error("Expected mapActionToKey to be a function.");
  }

  const [requestType, successType, failureType] = types;

  const updatePagination = (state = {
    isFetching: false,
    nextPageUrl: undefined,
    pageCount: 0,
    ids: []
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
          ids: union(state.ids, action.response.result),
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount + 1
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
        if (typeof key !== "string") {
          throw new Error("Expect key to be a string.")
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
