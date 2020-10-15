import React from "react";
import styled from "styled-components";

const SIZE = {
  medium: {
    width: "50px",
    height: "auto",
  },
  small: {
    width: "40px",
    height: "auto",
  },
};

const IconContainer = styled.span.attrs(({ size }) => {
  const sizeConfig = SIZE[size] || SIZE.medium;
  return { ...sizeConfig };
})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 6px;
  font-weight: 400;

  cursor: pointer;
`;

const IconLabel = styled.span`
  display: block;

  font-weight: 800;
  font-size: 14px;
  color: #3d3d3d;

  margin-top: 5px;
`;

export function Icon({ icon, label, onClick, ...rest }) {
  return (
    <IconContainer onClick={onClick} {...rest}>
      {icon}
      <IconLabel>{label}</IconLabel>
    </IconContainer>
  );
}

export default Icon;
