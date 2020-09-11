import {combineReducers} from "redux";
import merge from "lodash/merge";

import {loginState} from "../user/reducer";

const entities =(state = {user:{}, profile: {}}, action) => {
  if (action.response && action.response.entities){
    return merge({}, state, action.response.entities);
  }
  return state;
};

const rootReducer = combineReducers({
  entities,
  loginState
});

export default rootReducer;
