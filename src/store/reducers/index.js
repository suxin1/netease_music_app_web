import {combineReducers} from "redux";
import merge from "lodash/merge";

import {auth} from "../user/reducer";

// 分页数据
import {userPlaylists} from "../playlist/reducer";
const pagination = combineReducers({
  userPlaylists,
});

const entities =(state = {user:{}, profile: {}}, action) => {
  if (action.response && action.response.entities){
    return merge({}, state, action.response.entities);
  }
  return state;
};

const rootReducer = combineReducers({
  entities,
  auth,
  pagination,
});

export default rootReducer;
