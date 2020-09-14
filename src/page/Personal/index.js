import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from "../../store/user/action";
import {fetchUserPlaylist} from "../../store/playlist/action";
import {denormalize} from "normalizr";
import {playlistSchemas} from "../../store/playlist/schema";

import {Personal} from "./Personal";

class PersonalWrapper extends Component {
  componentDidMount() {
    const {fetchUserPlaylist, auth} = this.props;
    if(auth.authenticated && auth.data.account)
    fetchUserPlaylist({uid: auth.data.account});
  }

  render() {
    return <Personal {...this.props} />
  }
}

const mapStateToProps = state => {
  const {auth, entities, pagination: {userPlaylists}} = state;
  const data = denormalize(
    userPlaylists[auth.data.account] || {playlist: []},
    playlistSchemas.USER_PLAYLIST,
    entities
  );
  return {
    auth,
    selfPlaylists: data,
  }
};

export default connect(
  mapStateToProps,
  {login, fetchUserPlaylist}
)(PersonalWrapper)
