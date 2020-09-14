import {CALL_API_KEY} from "../middleware/api";
import {playlistSchemas} from "./schema";

export const USER_PLAYLIST_REQUEST = Symbol("USER_PLAYLIST_REQUEST");
export const USER_PLAYLIST_SUCCESS = Symbol("USER_PLAYLIST_SUCCESS");
export const USER_PLAYLIST_FAIL = Symbol("USER_PLAYLIST_FAIL");

export const fetchUserPlaylist = params => ({
  userId: params.uid,
  [CALL_API_KEY]: {
    types: [USER_PLAYLIST_REQUEST, USER_PLAYLIST_SUCCESS, USER_PLAYLIST_FAIL],
    endpoint: "/user/playlist",
    schema: playlistSchemas.USER_PLAYLIST,
    params: params,
    method: "GET"
  }
});

export const loadUserPlayList = (userId, requiredFields) => (dispatch, getState) => {
  // const {
  //   nextPageUrl = `users/${login}/starred`,
  //   pageCount = 0
  // } = getState().pagination.starredByUser[login] || {}
  //
  // if (pageCount > 0 && !nextPage) {
  //   return null
  // }
  //
  // return dispatch(fetchStarred(login, nextPageUrl))
}
