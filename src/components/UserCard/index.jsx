import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StyledNavLink } from "../Navigation/styled";
import { layout } from "../../UI/uiConstants";
import {
  CardBox,
  CardImage,
  CardInfoBox,
  CardName,
  CardActionBox,
  CardSubcontent,
  CardTextBox,
} from "./styled";

const NavLink = styled(StyledNavLink)`
  margin-left: ${layout.spacing.secondary};
`;
const AvattarBox = styled.svg`
  height: 50px;
  width: 50px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: #f9e9ea;
  padding-top: 10px;
`;

export function UserCardRow({
  authenticated,
  nickname,
  avatarUrl,
  name,
  trackCount,
  creator,
  ...rest
}) {
  return (
    <CardBox {...rest}>
      <CardInfoBox>
        {avatarUrl ? (
          <CardImage src={avatarUrl} />
        ) : (
          <AvattarBox>
            <use href="#icon-touxiang"></use>
          </AvattarBox>
        )}
        {authenticated ? (
          <CardTextBox>
            <CardName>{nickname}</CardName>
            <CardSubcontent>{trackCount}</CardSubcontent>
          </CardTextBox>
        ) : (
          <NavLink to="/login">立即登录</NavLink>
        )}
      </CardInfoBox>
      <CardActionBox></CardActionBox>
    </CardBox>
  );
}

UserCardRow.propTypes = {
  coverImgUrl: PropTypes.string,
  name: PropTypes.string,
  trackCount: PropTypes.number,
};
