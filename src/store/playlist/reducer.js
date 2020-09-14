import {USER_PLAYLIST_REQUEST, USER_PLAYLIST_SUCCESS, USER_PLAYLIST_FAIL} from "./action";
import paginate from "../reducers/paginate";

export const userPlaylists = paginate({
  mapActionToKey: action => action.userId,
  types: [
    USER_PLAYLIST_REQUEST,
    USER_PLAYLIST_SUCCESS,
    USER_PLAYLIST_FAIL
  ],
  listKey: "playlist"
});
