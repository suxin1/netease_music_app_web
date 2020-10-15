/* global linkState */
import React, { Component } from "react";
import styled from "styled-components";

import { Page } from "../../components/Page";
import { Card } from "../../UI/Card";
import { PlaylistCardRow } from "../../components/PlaylistCardRow";
import { UserCardRow } from "../../components/UserCard";
import { layout } from "../../UI/uiConstants";

const LikedPlayCard = styled(PlaylistCardRow)`
  margin-bottom: ${layout.spacing.primary};
`;

const UserCardRowStyled = styled(UserCardRow)`
  margin: ${layout.spacing.primary} 0;
`;

export class Personal extends Component {
  render() {
    const {
      auth,
      selfPlaylists: { likedList, collectedList, createdList },
    } = this.props;
    const userInfo = {
      authenticated: Boolean(auth.token),
      ...(auth.account || {}),
    };
    return (
      <Page topWhiteSpace background="#f8f8f8">
        <UserCardRowStyled {...userInfo} />
        {likedList.map((item) => {
          return <LikedPlayCard {...item} name="我喜欢的音乐" rounded />;
        })}
        <Card title={`创建歌单（${createdList.length}个）`}>
          {createdList.map((item) => {
            return <PlaylistCardRow {...item} key={item.id} />;
          })}
        </Card>
        <Card title={`收藏歌单（${createdList.length}个）`}>
          {collectedList.map((item) => {
            return <PlaylistCardRow {...item} key={item.id} />;
          })}
        </Card>
      </Page>
    );
  }
}
