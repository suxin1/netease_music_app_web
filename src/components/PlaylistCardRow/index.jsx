import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  PlaylistCardBox,
  PlaylistInfoBox,
  PlaylistImage,
  PlaylistTextBox,
  PlaylistName,
  PlaylistDesc,
  PlaylistActionBox
} from "./styled";

export function PlaylistCardRow({coverImgUrl, name, trackCount, creator, ...rest}) {
  return (
    <PlaylistCardBox {...rest}>
      <PlaylistInfoBox>
        <PlaylistImage src={coverImgUrl}/>
        <PlaylistTextBox>
          <PlaylistName>{name}</PlaylistName>
          <PlaylistDesc>{trackCount}首</PlaylistDesc>
        </PlaylistTextBox>
      </PlaylistInfoBox>
      <PlaylistActionBox>

      </PlaylistActionBox>
    </PlaylistCardBox>
  )
}

PlaylistCardRow.propTypes = {
  coverImgUrl: PropTypes.string,
  name: PropTypes.string,
  trackCount: PropTypes.number,
};

