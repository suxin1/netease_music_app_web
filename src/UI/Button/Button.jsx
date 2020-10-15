// import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SIZE = {
  medium: {
    height: "32px",
    padding: "4px 15px",
    fontSize: "14px",
  },
  large: {
    height: "40px",
    padding: "6px 15px",
    fontSize: "16px",
  },
  small: {
    height: "24px",
    padding: "0 7px",
    fontSize: "14px",
  },
  auto: {
    height: "auto",
    padding: "0",
    fontSize: "inherit",
  },
};

const TYPE = {
  primary: {
    backgroundColor: "#e60025",
    color: "white",
  },
  secondary: {
    backgroundColor: "white",
    color: "black",
  },
};

export const Button = styled.button.attrs((props) => {
  return {
    border: (props) =>
      props.border
        ? `1px ${props.borderType ? props.borderType : "solid"} #9d9d9d`
        : "0",
    ...SIZE[props.size],
    ...TYPE[props.type],
  };
})`
  position: relative;
  display: inline-block;

  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => `${parseInt(props.height, 10) / 2}px`};
  border: ${(props) => props.border};
  outline: 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: all cubic-bezier(0.645, 0.045, 0.335, 1);
  user-select: none;
  touch-action: manipulation;
`;

Button.propTypes = {
  /* 按钮尺寸，默认中等（medium）大小 */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["primary", "secondary", "warn"]),
  border: PropTypes.boolean,
};

Button.defaultProps = {
  size: "medium",
  border: false,
  type: "primary",
};

export const LinkButton = Button.withComponent("a");

export default Button;
