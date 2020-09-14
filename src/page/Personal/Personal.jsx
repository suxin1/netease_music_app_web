/* global linkState */
import React, {Component} from "react";
import {Page} from "../../components/Page";
import {Card} from "../../UI/Card";
import {PlaylistCardRow} from "../../components/PlaylistCardRow";

export class Personal extends Component {
  state = {
    warn: "",
  };
  componentDidMount() {
    // this.props.login({phone: "13540239926", password: "ggg123456"})
  }

  render() {
    const {selfPlaylists:{isFetching, playlist}} = this.props;
    console.log(playlist);
    return (
      <Page topWhiteSpace={true} background="#f8f8f8">
        <Card title="创建歌单">
          {playlist.map(item => {
            return <PlaylistCardRow {...item}/>
          })}
        </Card>
        {
          isFetching?<h3>Loading</h3>:<h3>Loading complete</h3>
        }
      </Page>
    );
  }
}
