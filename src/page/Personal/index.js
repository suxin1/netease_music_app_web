import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/action";
import { fetchUserPlaylist } from "../../store/playlist/action";
import { denormalize } from "normalizr";
import { playlistSchemas } from "../../store/playlist/schema";
import { userSchemas } from "../../store/user/schema";
import { Personal } from "./Personal";

class PersonalWrapper extends Component {
  componentDidMount() {
    const { fetchUserPlaylist, auth } = this.props;
    if (auth.account) fetchUserPlaylist({ uid: auth.account.id });
  }

  render() {
    return <Personal {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const {
    auth,
    entities,
    pagination: { userPlaylists },
  } = state;
  const data = denormalize(
    userPlaylists[auth.data.account] || { playlist: [] },
    playlistSchemas.USER_PLAYLIST,
    entities
  );
  const authData = denormalize(auth.data, userSchemas.LOGIN, entities);

  data.likedList = [];
  data.collectedList = [];
  data.createdList = [];

  if (data && data.playlist) {
    for (let list of data.playlist) {
      if (list.creator.userId === auth.data.account) {
        if (list.specialType === 5) data.likedList.push({ ...list });
        if (list.specialType === 0) data.createdList.push({ ...list });
      } else {
        data.collectedList.push({ ...list });
      }
    }
  }

  return {
    auth: authData,
    selfPlaylists: data,
  };
};

export default connect(mapStateToProps, { login, fetchUserPlaylist })(
  PersonalWrapper
);
