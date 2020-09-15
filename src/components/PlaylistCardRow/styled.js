import styled from "styled-components";
import {layout} from "../../UI/uiConstants";

export const PlaylistCardBox = styled.div`
  display: grid;
  height: 10vh;
  padding: 3px ${layout.spacing.primary};
  grid-template-columns: 8fr 2fr;
  align-items: center;
  background-color: white;
  border-radius: ${props => props.rounded?"10px":""};
  :active {
    background-color: rgba(0, 0, 0, .1);
  }
`;

export const PlaylistInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlaylistActionBox = styled.div`

`;

export const PlaylistImage = styled.span`
  display: block;
  flex-shrink: 0;
  height: 60px;
  width: 60px;
  background-color: #5e5e5e;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 7px;
`;

export const PlaylistTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 0;
`;
export const PlaylistName = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  width: 50vw;
  text-overflow: ellipsis;
`;
export const PlaylistDesc = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #5e5e5e;
`;
