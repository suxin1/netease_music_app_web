import styled from "styled-components";
import { layout } from "../../UI/uiConstants";

export const CardBox = styled.div`
  display: grid;
  height: 10vh;
  padding: 3px ${layout.spacing.primary};
  grid-template-columns: 80% 20%;
  align-items: center;
  border-radius: ${(props) => (props.rounded ? "10px" : "")};
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardActionBox = styled.div``;

export const CardImage = styled.span`
  display: block;
  height: 60px;
  width: 60px;
  background-color: #5e5e5e;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 30px;
`;

export const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 0;
`;
export const CardName = styled.span`
  font-size: 14px;
`;
export const CardSubcontent = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #5e5e5e;
`;
