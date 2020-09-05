import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SIZE = {
  medium: {
    height: "32px",
    padding: "4px 15px",
    fontSize: "14px"
  },
  large: {
    height: "40px",
    padding: "6px 15px",
    fontSize: "16px",
  },
  small: {
    height: "24px",
    padding: "0 7px",
    fontSize: "14px"
  },
  auto: {
    height: "auto",
    padding: "4px 15px",
    fontSize: "inherit"
  }
};

export const Button = styled.button.attrs({
  border_: props => props.border ? `1px ${props.borderType ? props.borderType : "solid"} #9d9d9d` : "0"
})`
  position: relative;
  display: inline-block;
  
  height: ${props => SIZE[props.size].height};
  padding: ${props => SIZE[props.size].padding};
  font-size: ${props => SIZE[props.size].fontSize};
  border-radius: 3px;
  border: ${props => props.border_};
  outline: 0;
  background-color: white;
  
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: all cubic-bezier(.645, .045, .335, 1);
  user-select: none;
  touch-action: manipulation;
`;

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  border: PropTypes.boolean,
};

Button.defaultProps = {
  size: "medium",
  border: true,
};
