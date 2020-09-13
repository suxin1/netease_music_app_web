import PropTypes from "prop-types";
import styled from "styled-components";

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
};


export const Input = styled.input.attrs((props) => {
  return SIZE[props.size];
})`
  box-sizing: border-box;
  height: ${props => props.size};
  border: 0;
  padding: 0 10px;
  height: ${props => props.height};
  background-color: rgba(255, 255, 255, .8);
  :focus {
    outline: none;
  }
`;

Input.PropTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Input.defaultProps = {
  size: "medium"
};


export const RoundInput = styled(Input).attrs((props) => {
  return {
    ...(SIZE[props.size]),
    ...props,
  };
})`
  border-radius: ${props => parseInt(props.height) / 2 + "px"};
  padding: 15px;
`;

RoundInput.PropTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

RoundInput.defaultProps = {
  size: "medium"
};
