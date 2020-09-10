import {normalize, schema} from "normla"
import {camelizeKeys} from "humps";

import {request} from "../../utilities/http";
import apiConfig from "../../config/api";

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, config, schema) => {
  // TODO Error handling
  return request(config).then(response => {
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      return Object.assign({}, normalize(camelizedJson, schema))
    })
  })
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API_KEY = "CALL API";

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callInfo = action[CALL_API_KEY];
  if (typeof callInfo === "undefined") {
    return next(action);
  }

  let {endpoint} = action;
  const {schema, types, config} = callInfo;

  if (typeof endpoint === "function") {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== "string") {
    throw new Error("Endpoint Url must be a string");
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expect an Array of three action types");
  }

  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expect action types to be string");
  }

  const actionWith = (data) => {
    const finalAction = {...action, ...data};
    delete finalAction[CALL_API_KEY];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({type: requestType}));

  return callApi(endpoint, config, schema).then(
    response => next(actionWith({
      type: successType,
      response,
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || `Call to ${endpoint} has failed!`,
    }))
  )
}
