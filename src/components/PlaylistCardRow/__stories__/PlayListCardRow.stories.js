import React from "react";
import { PlaylistCardRow } from "../index";

export default {
  title: "Component/PlaylistCardRow",
  component: PlaylistCardRow,
};

export const PlaylistCard = (props) => {
  return (
    <div style={{ padding: "15px" }}>
      <PlaylistCardRow {...props} />
    </div>
  );
};
PlaylistCard.args = {
  name: "全国小众摇滚",
  coverImgUrl:
    "http://p1.music.126.net/zGzNJcfLZfLW7E0bkI0opg==/109951163815887214.jpg",
  trackCount: 3,
};
