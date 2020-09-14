import {schema} from "normalizr";
import {userSchemas} from "../user/schema";

const playlistSchema = new schema.Entity(
  "playlist",
  {
    subscribers: userSchemas.ACCOUNT_ARRAY,
    creator: userSchemas.ACCOUNT
  },
  {
    idAttribute: item => item.id
  }
);

const userPlaylistSchema = new schema.Object({
  playlist: [playlistSchema],
});

export const playlistSchemas = {
  PLAYLIST: playlistSchema,
  PLAYLIST_ARRAY: [playlistSchema],
  USER_PLAYLIST: userPlaylistSchema,
};
