import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 3vw;
  padding: 0 15px;
`;

const CardTitle = styled.div`
  padding: 15px 0 10px 0;
  font-size: 13px;
  line-height: 14px;
  color: #a8a8a8;
`;

const CardContent = styled.div`
  padding-bottom: 10px;
`;

export function Card({children, title, ...rest}) {
  return (
    <CardContainer {...rest}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </CardContainer>
  )
}

Card.propTypes = {
  title: PropTypes.string
};

Card.defaultProps = {
  title: null,
};
