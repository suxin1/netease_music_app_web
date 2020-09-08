import React from "react";
import styled from "styled-components";
const IconWidth = 100;
const IconHeight = 100;

const SIZE = {
  medium: {
    width: "50px",
    height: "auto",
  },
  small: {
    width: "40px",
    height: "auto"
  }
};

const IconContainer = styled.span.attrs(({size}) => {
  const sizeConfig = SIZE[size] || SIZE["medium"];
  return {...sizeConfig}
})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: ${props => props.height};
  width: ${props => props.width};
  padding: 6px;
  font-weight: 400;

  cursor: pointer;
`;

const IconPhoto = styled.span`
  display: block;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`;

const IconLabel= styled.span`
  display: block;

  font-weight: 800;
  font-size: 14px;
  color: #3d3d3d;
`;


export function Icon({children, label, onClick, ...rest}) {
  return (
    <IconContainer onClick={onClick} {...rest}>
      <IconPhoto>
        {children}
      </IconPhoto>
      <IconLabel>
        {label}
      </IconLabel>
    </IconContainer>
  )
}

export default Icon;
