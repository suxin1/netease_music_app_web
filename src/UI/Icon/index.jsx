import React from "react";
import styled from "styled-components";

const SIZE = {
  medium: {
    width: "50px",
    height: "50px",
  },
  small: {
    width: "35px",
    height: "35px",
  },
};

const IconContainer = styled.span.attrs(({ size }) => {
  const sizeConfig = SIZE[size] || SIZE.medium;
  return {
    ...sizeConfig,
  };
})`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: block;
  position: relative;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &:active {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0.5))
    );
  }
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export function Icon({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
}

export default Icon;
