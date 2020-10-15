import { normalize, schema } from "normalizr";
import { camelizeKeys } from "humps";

import { httpClient } from "../../utilities/http";
import { validateAsyncActionTypes } from "../utilities";

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (options, schema) => {
  // TODO Error handling

  return httpClient(options).then((response) => {
    if (!(response.status === 200)) {
      return Promise.reject({ ...response.data, fromNetwork: true });
    }
    if (!(response.data.code === 200)) {
      return Promise.reject({ ...response.data, fromApplication: true });
    }

    const camelizedJson = camelizeKeys(response.data);
    return Object.assign({}, normalize(camelizedJson, schema));
  });
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API_KEY = "CALL API";

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store) => (next) => (action) => {
  const callInfo = action[CALL_API_KEY];
  if (typeof callInfo === "undefined") {
    return next(action);
  }

  let { endpoint } = callInfo;
  const { schema, types, method, body, params } = callInfo;

  if (typeof endpoint === "function") {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== "string") {
    throw new Error("Endpoint Url must be a string");
  }

  validateAsyncActionTypes(types);

  const actionWith = (data) => {
    const finalAction = { ...action, ...data };
    delete finalAction[CALL_API_KEY];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));
  const options = {
    url: endpoint,
    method,
    data: body,
    params: params,
  };
  return callApi(options, schema).then(
    (response) =>
      next(
        actionWith({
          type: successType,
          response,
        })
      ),
    (error) => {
      return Promise.reject(
        next(
          actionWith({
            type: failureType,
            code: error.code,
            error: error.message || `Call to ${endpoint} has failed!`,
          })
        )
      );
    }
  );
};
