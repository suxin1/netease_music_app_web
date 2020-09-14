import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PlaylistCardBox = styled.div`
  display: grid;
  height: 12vh;
  padding: 3px 15px;
  grid-template-columns: 80% 20%;
  align-items: center;
  background-color: white;
`;

const PlaylistInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlaylistActionBox = styled.div`

`;

const PlaylistImage = styled.span`
  display: block;
  height: 60px;
  width: 60px;
  background-color: #5e5e5e;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  
  border-radius: 7px;
`;

const PlaylistTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 0;
`;
const PlaylistName = styled.span`
  font-size: 14px;
`;
const PlaylistDesc = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #5e5e5e;
`;

export function PlaylistCardRow({coverImgUrl, name, trackCount, creator, ...rest}) {
  console.log(coverImgUrl);
  return (
    <PlaylistCardBox>
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

