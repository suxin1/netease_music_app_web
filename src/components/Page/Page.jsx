
import PropTypes from "prop-types";

import styled from "styled-components";

export const Page = styled.div`
  box-sizing: border-box;
  background: ${props => props.background};
  padding: 0;
  padding-top: ${props => props.topWhiteSpace?"45px":"0"};
  margin: 0;
  width: 100vw;
  min-height: 100vh;
`;

Page.propTypes = {
  background: PropTypes.string,
  topWhiteSpace: PropTypes.bool,
};

Page.defaultProps = {
  background: "white",
  topWhiteSpace: false,
};
